import { NextResponse } from "next/server"
import tempCountries from "@/mock_data/countries"
// import apiCall from "@/utils/apiCall"
export async function GET(request: Request) {
	// const allCountries = await apiCall("/common/locations/countries", {})
	// return NextResponse.json(allCountries)
	return NextResponse.json(tempCountries)
}
