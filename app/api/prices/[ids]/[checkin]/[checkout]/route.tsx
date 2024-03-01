import fetchApi from "@/utils/fetchApi"
import { NextResponse } from "next/server"

export async function GET(request: Request, params: any) {
	// This will only accept 100 or less ids
	// It's totally possible to get a nextpage here
	const { ids, checkin, checkout } = params.params
	let next_page = ids && checkin === "null" && checkout === "null" ? ids : "null"
	const accommodationIds = ids.split(",").map(Number)

	let requestBody =
		next_page === "null"
			? {
					booker: {
						country: "nl",
						platform: "desktop",
					},
					accommodations: accommodationIds,
					currency: "USD",
					checkin: checkin,
					checkout: checkout,
					guests: {
						number_of_adults: 2,
						number_of_rooms: 1,
					},
			  }
			: { page: next_page }

	try {
		const hotelSearch = await fetchApi("/accommodations/search", requestBody)
		return NextResponse.json({ data: { ...hotelSearch, checkin, checkout } })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
