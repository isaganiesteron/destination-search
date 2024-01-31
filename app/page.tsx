"use client"
import React, { useState } from "react"

const Home = () => {
	const [allCountries, setallCountries] = useState<any[]>([])
	const [allCities, setallCities] = useState<any[]>([])
	const [currentCountry, setcurrentCountry] = useState<string>("")
	const [currentCities, setCurrentCities] = useState<any[]>([])

	// const allCities = await apiCall("string")

	const getAllCountriesHandler = async () => {
		console.log("get all countries")
		const response = await fetch("/api/countries")
		const allCountries = await response.json()
		setallCountries(allCountries)
	}

	const getCurrentCityHandler = async (city: string) => {
		console.log(`Click ${city}`)
		const response = await fetch(`/api/cities/${city}`)
		const allCities = await response.json()
		console.log(allCities)
		setallCities(allCities)
	}

	// const getAllCitiesHandler = async () => {
	// 	console.log("get all cities")
	// 	// const allCountries = await apiCall("/common/locations/cities", {})
	// 	// setallCities(setCurrentCity)
	// }

	return (
		<div className="container ">
			<button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getAllCountriesHandler}>
				Get all Coutries
			</button>{" "}
			<button
				className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					console.log("Click")
				}}
			>
				Get top 10 hotels
			</button>
			<div>
				<h1>Countries:</h1>
				{allCountries
					? allCountries.map((x) => {
							return (
								<div key={x.id}>
									<button onClick={() => getCurrentCityHandler(x.id)} className="bg-slate-100 py-2 px-4 m-1 rounded">
										{x.name["en-gb" as keyof typeof x.name]}
									</button>
								</div>
							)
					  })
					: "Countries havent been fetched yet"}
			</div>
			<div>
				<h1>Cities:</h1>
				{allCities
					? allCities.map((x) => {
							return <div key={x.id}>{JSON.stringify(x)}</div>
					  })
					: "No city has been selected"}
			</div>
		</div>
	)
}

export default Home
