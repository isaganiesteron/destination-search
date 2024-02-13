import { NextResponse } from "next/server"
export async function GET(request: Request, params: any) {
	const { string } = params.params

	try {
		const response = await fetch(`https://accommodations.booking.com/autocomplete.json`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query: string, language: "en-us", size: 10 }),
		})
		if (response.status === 200) {
			const data = await response.json()
			return NextResponse.json(data.results, { status: 200 })
		} else {
			return NextResponse.json(response, { status: 500 })
		}
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
