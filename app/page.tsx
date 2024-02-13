"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import ResultItem from "@/components/ResultItem"
import { Settings as I_Settings } from "@/constants/interfaces"
import Settings from "@/components/Settings"
import Spinner from "@/components/Spinner"
import SuggestedItem from "@/components/SuggestedItem"

const Page = () => {
	const [status, setStatus] = useState<object>({ loading: false, message: "Choose a country first" })

	const [allHotelsFetched, setAllHotelsFetched] = useState<any[]>([])
	const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([])
	const [showSettings, setShowSettings] = useState<boolean>(false)

	const [suggestions, setSuggestions] = useState<object[]>([])
	const [currentDestination, setCurrentDestination] = useState<object>({
		type: "null",
		id: "null",
	})

	const [currentTier, setCurrentTier] = useState<string>("budget")
	const [settings, setSettings] = useState<I_Settings>({
		review: 8.3,
		tier: "budget",
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

	const getDestinationLabel = (destination: any) => {
		return destination
	}

	const fetchSuggestions = async (query: string) => {
		const response = await fetch("/api/autosuggest/" + query)
		if (response.status === 200) {
			const data = await response.json()
			console.log(data)
			setSuggestions(data)
		}
	}

	const fetchHotels = async () => {
		setSuggestions([])
		const tierSettings = settings[settings.tier as keyof typeof settings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]
		const destintationType = currentDestination["type" as keyof typeof currentDestination]
		const destinationId = currentDestination["id" as keyof typeof currentDestination]
		setStatus({ loading: true, message: `Fetch all hotels in ${destintationType} that is a ${destinationId} with a maximum price of ${maxPrice}...` })
		const response = await fetch(`/api/hotels/${destintationType}/${destinationId}/${maxPrice}`) // maxPrice is in USD
		const allHotels = await response.json()
		setStatus({ loading: false, message: `Done fetching ${allHotels.length} hotels.` })
		setAllHotelsFetched(allHotels) //save all hotels fetched so you can filter it later on
		prepareHotelResults(allHotels)
	}

	const prepareHotelResults = (hotels: any[] | null) => {
		const tierSettings = settings[settings.tier as keyof typeof settings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]

		const allHotels = hotels ? hotels : allHotelsFetched
		// filter hotels by review
		const allHotelsFiltered = allHotels.filter((x: { rating: { review_score: number } }) => x.rating.review_score >= settings.review)
		// sort based on review score
		allHotelsFiltered.sort((a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
			return b.rating.review_score - a.rating.review_score
		})
		setStatus({ loading: false, message: `Result: Found ${allHotelsFiltered.length} hotels in ${getDestinationLabel(currentDestination["id" as keyof typeof currentDestination])}. With a minimum review of ${settings.review} and a maximum price of ${maxPrice}.` })

		setCurrentAllHotels(allHotelsFiltered.slice(0, 10))
	}

	const handleSearch = () => {
		if (showSettings) setShowSettings(false)
		fetchHotels()
	}

	const handleReset = () => {
		setAllHotelsFetched([])
		setStatus({ loading: false, message: "Choose a country first" })
	}

	useEffect(() => {
		setSettings({ ...settings, tier: currentTier })
		// reload results based on the new tier
	}, [currentTier])

	useEffect(() => {
		console.log("Settings updated, reset results")
		prepareHotelResults(null)
		if (showSettings) setShowSettings(false)
	}, [settings])

	useEffect(() => {
		console.log("Currenty destination changed to ")
		console.log(currentDestination)
		fetchHotels()
	}, [currentDestination])

	useEffect(() => {
		console.log("**********currentAllHotels Updated**********")
		console.log(currentAllHotels)
	}, [currentAllHotels])

	const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.length < 3) setSuggestions([])
		else fetchSuggestions(event.target.value)
	}

	return (
		<main>
			<div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
				<div>
					<div className="grid grid-cols-3 gap-1">
						<div className="col-span-2">
							<p className="font-bold text-md">Search</p>
							<input type="text" className="border border-black rounded-md w-full p-[5.5px]" onChange={searchHandler} />
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
										return <SuggestedItem label={label} type={dest_type} id={dest_id} suggestionClick={setCurrentDestination} />
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
									const currDescription = x.description.text["en-gb" as keyof typeof x.description.text]
									const currPhoto = x.photos[0].url.thumbnail
									const rating = x.rating.review_score
									const price = x.price?.price ? { total: x.price.price.total, book: x.price.price.book, currency: x.price.currency } : null
									return <ResultItem key={`hotel_${i}`} name={x.name["en-gb" as keyof typeof x.name]} description={currDescription} photoUrl={currPhoto} index={i} review={rating} priceObj={price} />
							  })
							: null}
					</div>
				</div>

				<div className="flex flex-row-reverse">
					<button className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-red-500 font-bold" onChange={handleReset}>
						Reset
					</button>
				</div>
			</div>
		</main>
	)
}

export default Page
