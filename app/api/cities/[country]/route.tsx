import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"
// import tempPhCities from "@/mock_data/cities" // Add missing import statement

export async function GET(request: Request, params: any) {
	// return NextResponse.json(tempPhCities)
	try {
		const { country } = params.params
		const allCities = await apiCall("/common/locations/cities", { country: country })
		return NextResponse.json(allCities)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
