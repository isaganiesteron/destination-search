"use client"
import React, { useEffect, useState } from "react"
import ResultItem from "@/components/ResultItem"

const page = () => {
	const [status, setStatus] = useState<string>("Choose a country first")
	const [allCountries, setallCountries] = useState<any[]>([])
	const [currentAllCities, setCurrentAllCities] = useState<any[]>([])
	const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([])

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
		setStatus(`Fetch all hotels in the city of ${city}...`)
		const response = await fetch(`/api/hotels/${city}`)
		const allHotels = await response.json()
		setStatus(`Done fetching ${allHotels.length} hotels.`)
		// sort based on review score
		allHotels.sort((a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
			return b.rating.review_score - a.rating.review_score
		})
		setCurrentAllHotels(allHotels.slice(0, 10))
	}

	useEffect(() => {
		getAllCountriesHandler()
	}, [])

	return (
		<main>
			<div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
				<div>
					<p className="font-bold text-md">Country:</p>
					<select
						className="border border-black rounded-md w-full"
						name="countries"
						id="countries"
						disabled={allCountries.length < 1}
						onChange={(e) => {
							console.log(e.target.value + " selected")

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
						className="border border-black rounded-md w-full "
						name="cities"
						id="cities"
						disabled={currentAllCities.length < 1}
						onChange={(e) => {
							console.log(`Fetch hotels in ${e.target.value}`)
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
					<p className="font-bold text-md">Top 10 Hotels:</p>
					<div className="border border-black rounded-md h-auto p-2 flex flex-col">
						{currentAllHotels.length > 0
							? currentAllHotels.map((x, i) => {
									const currDescription = x.description.important_information["en-gb" as keyof typeof x.description.important_information]
									const currPhoto = x.photos[0].url.thumbnail
									const rating = x.rating.review_score
									return <ResultItem key={`hotel_${i}`} name={x.name["en-gb" as keyof typeof x.name]} description={currDescription} photoUrl={currPhoto} index={i} review={rating} />
							  })
							: null}
					</div>
				</div>

				<div>
					<p className="text-sm">{status}</p>
				</div>
				<div className="flex flex-row-reverse">
					<button className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-slate-300 font-bold">Reset</button>
				</div>
			</div>
		</main>
	)
}

export default page
