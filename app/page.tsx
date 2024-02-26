"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import ResultItem from "@/components/ResultItem"
import { Settings as I_Settings } from "@/constants/interfaces"
import Settings from "@/components/Settings"
import Spinner from "@/components/Spinner"
import SuggestedItem from "@/components/SuggestedItem"
import { apartmentTypes, hotelTypes } from "@/constants/accommodationtypes"

const Page = () => {
	const [status, setStatus] = useState<object>({ loading: false, message: "Search for a destination." })

	const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([])
	const [showSettings, setShowSettings] = useState<boolean>(false)

	const [destination, setDestination] = useState<string>("")
	const [suggestions, setSuggestions] = useState<object[]>([])
	const [currentDestination, setCurrentDestination] = useState<object>({
		type: "null",
		id: "null",
	})

	const [currentTier, setCurrentTier] = useState<string>("budget")
	const [settings, setSettings] = useState<I_Settings>({
		review: 8.3,
		consider_review_quantity: true,
		tier: "budget",
		hoteltypes: hotelTypes,
		apartmenttypes: ["201"],
		budget: {
			min_price: 0,
			max_price: 100,
			conditions: {},
		},
		midrange: {
			min_price: 100,
			max_price: 200,
			conditions: {},
		},
		luxury: {
			min_price: 200,
			max_price: 20000,
			conditions: {},
		},
	})

	// ***This isn't working well, it's not getting the data in realtime. TODO
	// const [inputValue, setInputValue] = useState("")
	// const [typingTimeout, setTypingTimeout] = useState<any>(0)

	const getDestinationLabel = (destination: any) => {
		return destination
	}

	const fetchSuggestions = async (query: string) => {
		const response = await fetch("/api/autosuggest/" + query)
		if (response.status === 200) {
			const data = await response.json()
			setSuggestions(data)
		}
	}

	const fetchHotels = async () => {
		const tierSettings = settings[settings.tier as keyof typeof settings]
		const minPrice = tierSettings["min_price" as keyof typeof tierSettings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]
		const review = settings.review
		const destinationType = currentDestination["type" as keyof typeof currentDestination]
		const destinationId = currentDestination["id" as keyof typeof currentDestination]

		if (destinationType === "null" || destinationId === "null") return

		setSuggestions([])
		setCurrentAllHotels([])
		setStatus({ loading: true, message: `Fetch all hotels in ${destinationId} that is a ${destinationType} with a maximum price of ${maxPrice} with a minumum review of ${review}` })

		let allAccommodationsFetched: any[] = []
		let morePages = true
		let nextPage = ""

		// fetch all pages
		while (morePages) {
			const currentDestinationType = nextPage === "" ? destinationType : nextPage
			const currentDestinationId = nextPage === "" ? destinationId : "null"
			const currentPriceRange = nextPage === "" ? `${minPrice}_${maxPrice}` : "null"

			const response = await fetch(`/api/hotels/${currentDestinationType}/${currentDestinationId}/${currentPriceRange}/${review}`) // maxPrice is in USD
			const responseJson = await response.json()

			if (responseJson.data) allAccommodationsFetched.push(...responseJson.data)

			if (responseJson.next_page) {
				console.log("Fetching next page...")
				nextPage = responseJson.next_page
				setStatus({ loading: true, message: `Fetched ${allAccommodationsFetched.length} hotels so far. Fetching more...` })
				// pause for 1 second before next request
				await new Promise((resolve) => setTimeout(resolve, 1000))
			} else {
				console.log("All pages fetched.")
				nextPage = ""
				morePages = false
			}
		}
		console.log("----Done Fetching Hotels----")
		prepareHotelResults(allAccommodationsFetched)
		// prepareApartmentsResults(allAccommodationsFetched)
	}

	// const prepareApartmentsResults = (allAccommodations: any[] | null) => {
	// 	if (allAccommodations === null) return

	// 	const allApartments = allAccommodations.filter((x) => apartmentTypes.includes(x.accommodation_type))
	// 	console.log("allApartments")
	// 	console.log(allApartments)
	// }

	const prepareHotelResults = (allAccommodations: any[] | null) => {
		if (allAccommodations === null) return

		const allHotels = allAccommodations.filter((x) => settings.hoteltypes.includes(x.accommodation_type))

		// console.log("allHotels")
		// console.log(allHotels)

		const tierSettings = settings[settings.tier as keyof typeof settings]
		const minPrice = tierSettings["min_price" as keyof typeof tierSettings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]

		if (allHotels.length === 0) {
			setStatus({ loading: false, message: `Result: Found 0 hotels in ${getDestinationLabel(currentDestination["id" as keyof typeof currentDestination])}. With a minimum review of ${settings.review} and a price range of ${minPrice}-${maxPrice}.` })
			return
		}

		const allHotelsRatingInfoAdded = addRatingInfo(allHotels)

		// filter hotels by review
		const allHotelsFiltered = allHotelsRatingInfoAdded.filter((x: { rating: { review_score: number } }) => x.rating?.review_score >= settings.review)
		// sort based on review score
		if (settings.consider_review_quantity) {
			allHotelsFiltered.sort((a: { rating: { additional_info: { average_review_score: number } } }, b: { rating: { additional_info: { average_review_score: number } } }) => {
				return b.rating.additional_info.average_review_score - a.rating.additional_info.average_review_score
			})
		} else {
			allHotelsFiltered.sort((a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
				return b.rating.review_score - a.rating.review_score
			})
		}
		setStatus({ loading: false, message: `Result: Found ${allHotelsFiltered.length} hotels in ${getDestinationLabel(currentDestination["id" as keyof typeof currentDestination])}. With a minimum review of ${settings.review} and a price range of ${minPrice}-${maxPrice}.` })

		setCurrentAllHotels(allHotelsFiltered.slice(0, 10))
	}

	const addRatingInfo = (allHotels: any[]) => {
		let highestReviewQuantity = allHotels.map((x) => x.rating.number_of_reviews).reduce((a, b) => Math.max(a, b))
		let allHotelsWithReviewQuantity = allHotels.map((x) => {
			const currentReviewQuantity = x.rating.number_of_reviews
			const percentage = (currentReviewQuantity / highestReviewQuantity) * 10

			const additionalRatingInfo = {
				most_reviews: highestReviewQuantity,
				review_percentage: percentage,
				average_review_score: (x.rating.review_score + percentage) / 2,
			}

			let newRating = { ...x }

			newRating.rating.additional_info = additionalRatingInfo
			return newRating
		})
		return allHotelsWithReviewQuantity
	}

	const handleReset = () => {
		setCurrentDestination({ type: "null", id: "null" })
		setDestination("")
		setSuggestions([])
		setCurrentAllHotels([])
		setStatus({ loading: false, message: "Search for a destination." })
	}

	useEffect(() => {
		setSettings({ ...settings, tier: currentTier })
		// reload results based on the new tier
	}, [currentTier])

	useEffect(() => {
		if (showSettings) setShowSettings(false)
		fetchHotels()
	}, [currentDestination, settings])

	// useEffect(() => {
	//   // trigger also when Price Tier Changes
	// 	fetchHotels()
	// }, [currentDestination])

	// ***This isn't working well, it's not getting the data in realtime. TODO
	// useEffect(() => {
	// 	return () => {
	// 		clearTimeout(typingTimeout)
	// 	}
	// }, [typingTimeout])

	useEffect(() => {
		console.log("settings changed")
		console.log(settings)
	}, [settings])

	const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setDestination(event.target.value)
		if (event.target.value.length > 3) fetchSuggestions(event.target.value)
		else setSuggestions([])

		// ***This isn't working well, it's not getting the data in realtime. TODO
		// if (typingTimeout) clearTimeout(typingTimeout)
		// // will wait half a second before user finishes typing before fetching suggestions
		// setInputValue(event.target.value)
		// setTypingTimeout(
		// 	setTimeout(() => {
		// 		console.log("User has finished typing:", inputValue)
		// 		if (inputValue.length > 3) fetchSuggestions(inputValue)
		// 		else setSuggestions([])
		// 	}, 300)
		// )
	}

	return (
		<main>
			<div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
				<div>
					<div className="grid grid-cols-3 gap-1">
						<div className="col-span-2">
							<p className="font-bold text-md">Search</p>
							<input type="text" value={destination} className="border border-black rounded-md w-full p-[5.5px]" onChange={searchHandler} />
						</div>
						<div>
							<p className="font-bold text-md">Price Tier</p>
							<select
								className="border border-black rounded-md w-full p-2"
								name="tier"
								id="tier"
								onChange={(e) => {
									setCurrentTier(e.target.value)
								}}
							>
								<option value={"budget"}>Budget</option>
								<option value={"midrange"}>Mid Range</option>
								<option value={"luxury"}>Luxury</option>
							</select>
						</div>
					</div>

					{suggestions.length > 0 && (
						<div className="flex flex-col w-full gap-3">
							<div className="grid grid-cols-3 gap-1">
								<div className="col-span-2 border border-black rounded-md shadow-lg p-1">
									{suggestions.map((suggestion) => {
										const label = suggestion["label" as keyof typeof suggestion]
										const dest_id = suggestion["dest_id" as keyof typeof suggestion]
										const dest_type = suggestion["dest_type" as keyof typeof suggestion]
										return <SuggestedItem key={dest_id} label={label} type={dest_type} id={dest_id} suggestionClick={setCurrentDestination} />
									})}
								</div>
							</div>
						</div>
					)}
				</div>

				<div>
					<div className="flex flex-row">
						<div>{status["loading" as keyof typeof status] ? <Spinner /> : ""}</div>
						<p className="text-sm">{status["message" as keyof typeof status]}</p>
					</div>
					<button onClick={() => setShowSettings(!showSettings)} className="p-1 text-xs">
						{!showSettings ? "+ open" : "- close"} settings
					</button>
					{showSettings && <Settings settings={settings} saveSettings={setSettings} />}
				</div>
				<div>
					<p className="font-bold text-md">Top 10 Hotels:</p>
					<div className="border border-black rounded-md h-auto p-2 flex flex-col">
						{currentAllHotels.length > 0
							? currentAllHotels.map((x, i) => {
									const name = x.name ? x.name["en-gb" as keyof typeof x.name] : "NA"
									const currDescription = x.description ? x.description.text["en-gb" as keyof typeof x.description.text] : "NA"
									const currPhoto = x.photos ? x.photos[0].url.thumbnail : "NA"
									const additionRatingInfo = x.rating.additional_info
									const rating = x.rating ? { score: x.rating.review_score, reviews: x.rating.number_of_reviews, average: additionRatingInfo.average_review_score } : { score: 0, reviews: 0, average: 0 }
									const price = x.price ? (x.price?.price ? { total: x.price.price.total, book: x.price.price.book, currency: x.price.currency } : null) : null
									return <ResultItem key={`hotel_${i}`} name={name} description={currDescription} photoUrl={currPhoto} index={i} rating={rating} priceObj={price} url={x.url} />
							  })
							: null}
					</div>
				</div>

				<div className="flex flex-row-reverse">
					<button className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-red-500 font-bold" onClick={handleReset}>
						Reset
					</button>
				</div>
			</div>
		</main>
	)
}

export default Page
