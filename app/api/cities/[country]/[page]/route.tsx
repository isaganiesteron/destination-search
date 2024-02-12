import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"
// import tempPhCities from "@/mock_data/cities" // Add missing import statement

export async function GET(request: Request, params: any) {
	const { country, page } = params.params

	const token = `Bearer ${process.env.API_KEY}`
	const endpoint = "/common/locations/cities"
	const fetchBody = { country: country }

	try {
		const fetchedResponse = await fetch(`https://demandapi-sandbox.booking.com/3.1${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(page === "null" ? fetchBody : { page }),
		})

		if (fetchedResponse.status === 200) {
			const response = await fetchedResponse.json()
			return NextResponse.json(response, { status: 200 })
		} else {
			return NextResponse.json(fetchedResponse, { status: 500 })
		}
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
