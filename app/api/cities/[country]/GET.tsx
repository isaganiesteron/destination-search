import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"

export async function GET(request: Request, params: any) {
	const { country } = params.params
	const allCities = await apiCall("/common/locations/cities", { country: country })

	return NextResponse.json(`Get all cities in ${country} country.`)
}
