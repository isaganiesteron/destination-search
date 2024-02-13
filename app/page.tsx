"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import ResultItem from "@/components/ResultItem"
import { Settings as I_Settings } from "@/constants/interfaces"
import Settings from "@/components/Settings"
import Spinner from "@/components/Spinner"
import SuggestedItem from "@/components/SuggestedItem"

const Page = () => {
	const [status, setStatus] = useState<object>({ loading: false, message: "Choose a country first" })
	const [searching, setSearching] = useState<boolean>(false)
	const [allCountries, setallCountries] = useState<any[]>([])
	const [currentAllCities, setCurrentAllCities] = useState<any[]>([])
	const [allHotelsFetched, setAllHotelsFetched] = useState<any[]>([])
	const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([])
	const [showSettings, setShowSettings] = useState<boolean>(false)
	const [currentCountry, setCurrentCountry] = useState<string>("")
	const [currentCity, setCurrentCity] = useState<number>(0)

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

	const getCountryLabel = (id: string) => {
		const country = allCountries.find((x) => x.id === id)
		return country ? country.name["en-gb" as keyof typeof country.name] : "Unknown"
	}

	const getCityLabel = (id: number) => {
		const city = currentAllCities.find((x) => x.id === id)
		return city ? city.name["en-gb" as keyof typeof city.name] : "Unknown"
	}

	const getAllCountries = async () => {
		setStatus({ loading: true, message: "Fetching all countries..." })
		const response = await fetch("/api/countries")
		const allCountries = await response.json()
		allCountries.sort((a: { name: { "en-gb": string } }, b: { name: { "en-gb": string } }) => {
			if (a.name["en-gb"] < b.name["en-gb"]) {
				return -1
			}
			if (a.name["en-gb"] > b.name["en-gb"]) {
				return 1
			}
			return 0
		})
		setStatus({ loading: false, message: `Done fetching ${allCountries.length} countries.` })
		setallCountries(allCountries)
	}

	const fetchSuggestions = async (query: string) => {
		const response = await fetch("/api/autosuggest/" + query)
		if (response.status === 200) {
			const data = await response.json()
			console.log(data)
			setSuggestions(data)
		}
	}

	const fetchAllCities = async (country: string) => {
		setStatus({ loading: true, message: `Fetch all cities of ${getCountryLabel(country)}...` })

		let collectedCities: any[] = []
		let morePagesAvailable: boolean = true
		let currentPage: number = 0
		let page: string = "null"

		while (morePagesAvailable) {
			currentPage++
			console.log(`Fetching page: ${currentPage}`)

			const response = await fetch(`/api/cities/${country}/${page}`)

			if (response.status == 200) {
				try {
					const res = await response.json()
					if (res.data) {
						collectedCities.push(...res.data)
						setStatus({ loading: true, message: `Fetch all cities of ${getCountryLabel(country)}. Fetched ${collectedCities.length} cities...` })
					} else if (res.errors) {
						console.log("**ERROR1")
						console.log(res)
						morePagesAvailable = false
						page = "null"
					}

					if (res.next_page) {
						page = res.next_page
					} else {
						morePagesAvailable = false
						page = "null"
					}
				} catch (err) {
					console.log("**ERROR2")
					console.log(err)
					morePagesAvailable = false
					page = "null"
				}

				// pause for 1 second before next request
				await new Promise((resolve) => setTimeout(resolve, 1000))
				if (currentPage % 5 === 0) {
					// pause an extra 5 seconds every 5 requests
					await new Promise((resolve) => setTimeout(resolve, 5000))
				}
			} else {
				console.log(`Status ${response.status}`)
				console.log(response)
				morePagesAvailable = false
				page = "null"
			}
		}

		collectedCities.sort((a: { name: { "en-gb": string } }, b: { name: { "en-gb": string } }) => {
			if (a.name["en-gb"] < b.name["en-gb"]) {
				return -1
			}
			if (a.name["en-gb"] > b.name["en-gb"]) {
				return 1
			}
			return 0
		})
		setStatus({ loading: false, message: `Done fetching ${collectedCities.length} cities. ` })
		setCurrentAllCities(collectedCities)
	}

	const fetchHotels = async () => {
		setSearching(true)
		const tierSettings = settings[settings.tier as keyof typeof settings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]
		setStatus({ loading: true, message: `Fetch all hotels in the city of ${getCityLabel(currentCity)} with a maximum price of ${maxPrice}...` })
		const response = await fetch(`/api/hotels/${currentCity}/${maxPrice}`) // maxPrice is in USD
		const allHotels = await response.json()
		setStatus({ loading: false, message: `Done fetching ${allHotels.length} hotels.` })
		setAllHotelsFetched(allHotels) //save all hotels fetched so you can filter it later on
		prepareHotelResults(allHotels)
		setSearching(false)
	}

	const prepareHotelResults = (hotels: any[] | null) => {
		if (allCountries.length < 1) return
		if (currentAllCities.length < 1) return

		const tierSettings = settings[settings.tier as keyof typeof settings]
		const maxPrice = tierSettings["max_price" as keyof typeof tierSettings]

		const allHotels = hotels ? hotels : allHotelsFetched
		// filter hotels by review
		const allHotelsFiltered = allHotels.filter((x: { rating: { review_score: number } }) => x.rating.review_score >= settings.review)
		// sort based on review score
		allHotelsFiltered.sort((a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
			return b.rating.review_score - a.rating.review_score
		})

		setStatus({ loading: false, message: `Result: Found ${allHotelsFiltered.length} hotels in ${getCityLabel(currentCity)} ${getCountryLabel(currentCountry)}. With a minimum review of ${settings.review} and a maximum price of ${maxPrice}.` })

		setCurrentAllHotels(allHotelsFiltered.slice(0, 10))
	}

	const handleSearch = () => {
		if (showSettings) setShowSettings(false)
		fetchHotels()
	}

	const handleReset = () => {
		setAllHotelsFetched([])
		setCurrentCity(0)
		setStatus({ loading: false, message: "Choose a country first" })
	}

	useEffect(() => {
		getAllCountries()
	}, [])

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
	}, [currentDestination])

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
