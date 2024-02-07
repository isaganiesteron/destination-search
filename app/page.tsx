"use client"
import React, { useEffect, useState } from "react"
import ResultItem from "@/components/ResultItem"
import { Settings as I_Settings } from "@/constants/interfaces"
import Settings from "@/components/Settings"

const page = () => {
	const [status, setStatus] = useState<string>("Choose a country first")
	const [allCountries, setallCountries] = useState<any[]>([])
	const [currentAllCities, setCurrentAllCities] = useState<any[]>([])
	const [allHotelsFetched, setAllHotelsFetched] = useState<any[]>([])
	const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([])
	const [showSettings, setShowSettings] = useState<boolean>(false)
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

	const getAllCountriesHandler = async () => {
		setStatus("Fetching all countries...")
		const response = await fetch("/api/countries")
		const allCountries = await response.json()
		setStatus(`Done fetching ${allCountries.length} countries.`)
		setallCountries(allCountries)
	}

	const fetchAllCities = async (country: string) => {
		setStatus(`Fetch all cities of ${country}...`)
		const response = await fetch(`/api/cities/${country}`)
		const allCities = await response.json()
		setStatus(`Done fetching ${allCities.length} cities.`)
		setCurrentAllCities(allCities)
	}

	const fetchHotels = async (city: string) => {
		const tierSettings = settings[settings.tier as keyof typeof settings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]
		setStatus(`Fetch all hotels in the city of ${city} with a maximum price of ${maxPrice}...`)
		const response = await fetch(`/api/hotels/${city}/${maxPrice}`) // maxPrice is in USD
		const allHotels = await response.json()
		setAllHotelsFetched(allHotels) //save all hotels fetched so you can filter it later on
		prepareHotelResults(allHotels)
		setStatus(`Done fetching ${allHotels.length} hotels.`)
	}

	const prepareHotelResults = (hotels: any[] | null) => {
		// filter results based on settings
		const allHotels = hotels ? hotels : allHotelsFetched

		console.log(`Only include hotels that are ${settings.tier} based on the following requirements`)
		console.log(settings[settings.tier as keyof typeof settings])

		// filter hotels by review
		const allHotelsFiltered = allHotels
			.filter((x: { rating: { review_score: number } }) => x.rating.review_score >= settings.review)
			.filter((x) => {
				console.log(`Only include hotels that are ${settings.tier}`)
				return true
			})

		// filter hotels by tier

		// sort based on review score
		allHotelsFiltered.sort((a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
			return b.rating.review_score - a.rating.review_score
		})

		console.log(`Will show ${allHotelsFiltered.length} hotels`)
		setCurrentAllHotels(allHotelsFiltered.slice(0, 10))
	}

	useEffect(() => {
		getAllCountriesHandler()
	}, [])

	useEffect(() => {
		setSettings({ ...settings, tier: currentTier })
		// reload results based on the new tier
	}, [currentTier])

	useEffect(() => {
		console.log("Settings updated, reset results")
		console.log(settings)
		prepareHotelResults(null)
		if (showSettings) setShowSettings(false)
	}, [settings])

	return (
		<main>
			<div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<p className="font-bold text-md">Country:</p>
						<select
							className="border border-black rounded-md w-full p-2"
							name="countries"
							id="countries"
							disabled={allCountries.length < 1}
							onChange={(e) => {
								fetchAllCities(e.target.value)
							}}
						>
							{allCountries.length > 0
								? allCountries.map((x) => {
										return (
											<option key={x.id} value={x.id}>
												{x.name["en-gb" as keyof typeof x.name]}
											</option>
										)
								  })
								: null}
						</select>
					</div>
					<div>
						<p className="font-bold text-md">City:</p>
						<select
							className="border border-black rounded-md w-full p-2"
							name="cities"
							id="cities"
							disabled={currentAllCities.length < 1}
							onChange={(e) => {
								fetchHotels(e.target.value)
							}}
						>
							{currentAllCities.length > 0
								? currentAllCities.map((x) => {
										return (
											<option key={x.id} value={x.id}>
												{x.name["en-gb" as keyof typeof x.name]}
											</option>
										)
								  })
								: null}
						</select>
					</div>
					<div>
						<p className="font-bold text-md">Price Tier:</p>
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

				<div>
					<p className="text-sm">{status}</p>
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
									const currDescription = x.description.important_information["en-gb" as keyof typeof x.description.important_information]
									const currPhoto = x.photos[0].url.thumbnail
									const rating = x.rating.review_score
									const price = x.price?.price ? { total: x.price.price.total, book: x.price.price.book, currency: x.price.currency } : null
									return <ResultItem key={`hotel_${i}`} name={x.name["en-gb" as keyof typeof x.name]} description={currDescription} photoUrl={currPhoto} index={i} review={rating} priceObj={price} />
							  })
							: null}
					</div>
				</div>

				<div className="flex flex-row-reverse">
					<button className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-slate-300 font-bold">Reset</button>
				</div>
			</div>
		</main>
	)
}

export default page
