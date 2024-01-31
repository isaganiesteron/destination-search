import { NextResponse } from "next/server"

export async function GET(request: Request, params: any) {
	const { country, city } = params.params
	return NextResponse.json(`Search for hotels in ${city} inside ${country}`)
}
