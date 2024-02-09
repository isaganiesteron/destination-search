import { NextResponse } from "next/server"
import tempCountries from "@/mock_data/countries"
import apiCall from "@/utils/apiCall"

export async function GET(request: Request) {
	// return NextResponse.json(tempCountries)
	try {
		const allCountries = await apiCall("/common/locations/countries", {})
		return NextResponse.json(allCountries, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
