import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"
import moment from "moment"
// import tempHotelPricesAndDetails from "@/mock_data/hotels"

const _chunkArray = (array: any[], chunkSize: number) => {
	const chunks = []
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize))
	}
	return chunks
}

const _combinePricesAndDetails = (details: object[], prices: object[]) => {
	const detailsAndPrices = details.map((detail: object) => {
		let tempDetail = { ...detail }
		let currentPrice = prices.filter((price: object) => {
			return price["id" as keyof typeof price] === detail["id" as keyof typeof price]
		})
		const priceObject = currentPrice.length === 1 ? currentPrice[0] : null
		if (priceObject) {
			tempDetail = {
				...tempDetail,
				price: priceObject
					? {
							currency: priceObject["currency" as keyof typeof priceObject],
							price: priceObject["price" as keyof typeof priceObject],
					  }
					: "NA",
			}
		} else {
			tempDetail = { ...tempDetail, price: "NA" }
		}
		return tempDetail
	})

	return detailsAndPrices
}

const _fetchHotelPrices = async (city: string, price: string) => {
	let currentDate: string = moment().format("YYYY-MM-DD")

	let tomorrowDate: string = moment().add(1, "days").format("YYYY-MM-DD")
	const requestBody = {
		booker: {
			country: "nl",
			platform: "desktop",
		},
		city: Number(city),
		price: {
			maximum: Number(price),
		},
		currency: "USD",
		checkin: currentDate,
		checkout: tomorrowDate,
		guests: {
			number_of_adults: 2,
			number_of_rooms: 1,
		},
	}
	console.log("requestBody")
	console.log(requestBody)
	const hotelSearch = await apiCall("/accommodations/search", requestBody)
	console.log(JSON.stringify(hotelSearch))
	return hotelSearch
}

const _fetchHotelDetails = async (hotelIds: number[]) => {
	//  * Will split hotels into 100 because it can only take 100 hotels per request
	const splitArray = _chunkArray(hotelIds, 2) // Note: change 2 to 100 after testing
	console.log(`There will be ${splitArray.length} requests.`)
	const promises = splitArray.map((array) => {
		const requestBody = {
			accommodations: array,
			extras: ["description", "photos"],
		}
		return apiCall("/accommodations/details", requestBody)
	})
	const allHotelDetails = await Promise.all(promises)
	const allHotelDetailsFlattened = ([] as object[]).concat(...allHotelDetails)
	console.log(JSON.stringify(allHotelDetailsFlattened))
	return allHotelDetailsFlattened
}

export async function GET(request: Request, params: any) {
	try {
		const { city, price } = params.params
		const hotelPrices = await _fetchHotelPrices(city, price)
		const hotelDetails = await _fetchHotelDetails(hotelPrices.map((x: { id: number }) => x.id))
		const hotelPricesAndDetails = _combinePricesAndDetails(hotelDetails, hotelPrices)

		console.log("*******")
		console.log(`Done fetching ${hotelPricesAndDetails.length} hotels...`)

		console.log(JSON.stringify(hotelPricesAndDetails))
		return NextResponse.json(hotelPricesAndDetails)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}

	// return NextResponse.json(tempHotelPricesAndDetails)
}
