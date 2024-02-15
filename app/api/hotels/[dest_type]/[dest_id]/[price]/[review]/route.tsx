import apiCall from "@/utils/apiCall"
import fetchApi from "@/utils/fetchApi"
import { NextResponse } from "next/server"
import moment, { min } from "moment"
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

const _fetchHotelPrices = async (type: string, id: string, price: string, review: string, page: string) => {
	let currentDate: string = moment().format("YYYY-MM-DD")
	let tomorrowDate: string = moment().add(1, "days").format("YYYY-MM-DD")

	let min_price = price.split("_")[0]
	let max_price = price.split("_")[1]

	let requestBody = {
		booker: {
			country: "nl",
			platform: "desktop",
		},
		currency: "USD",
		price: {
			minimum: parseInt(min_price),
			maximum: parseInt(max_price),
		},
		rating: {
			minimum_review_score: parseInt(review),
		},
		checkin: currentDate,
		checkout: tomorrowDate,
		guests: {
			number_of_adults: 2,
			number_of_rooms: 1,
		},
	}

	let updatedRequestBody: object = {}
	if (page !== "null") {
		updatedRequestBody = { page }
	} else {
		if (type === "airport") {
			updatedRequestBody = { ...requestBody, airport: Number(id) }
		} else if (type === "city") {
			updatedRequestBody = { ...requestBody, city: Number(id) }
		} else if (type === "country") {
			updatedRequestBody = { ...requestBody, country: Number(id) }
		} else if (type === "district") {
			updatedRequestBody = { ...requestBody, district: Number(id) }
		} else if (type === "landmark") {
			updatedRequestBody = { ...requestBody, landmark: Number(id) }
		} else if (type === "region") {
			updatedRequestBody = { ...requestBody, region: Number(id) }
		}
	}

	console.log("updatedRequestBody")
	console.log(updatedRequestBody)

	const hotelSearch = await fetchApi("/accommodations/search", updatedRequestBody)
	return hotelSearch
}

const _fetchHotelDetails = async (hotelIds: number[]) => {
	//  * Will split hotels into 100 because it can only take 100 hotels per request
	const splitArray = _chunkArray(hotelIds, 100) // Note: change 2 to 100 after testing
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
	return allHotelDetailsFlattened
}

export async function GET(request: Request, params: any) {
	const { dest_type, dest_id, price, review } = params.params
	// If next_page exists then that means remove all params and just use next_page
	let next_page = dest_type && dest_id === "null" && price === "null" ? dest_type : "null"

	try {
		const hotelPrices = await _fetchHotelPrices(dest_type, dest_id, price, review, next_page)
		const hotelDetails = await _fetchHotelDetails(hotelPrices?.data.map((x: { id: number }) => x.id))
		const hotelPricesAndDetails = await _combinePricesAndDetails(hotelDetails, hotelPrices?.data)
		const currentNextPage = hotelPrices.next_page ? hotelPrices.next_page : null

		console.log(`Done fetching ${hotelPricesAndDetails.length} hotels...`)
		return NextResponse.json({ data: hotelPricesAndDetails, next_page: currentNextPage })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
