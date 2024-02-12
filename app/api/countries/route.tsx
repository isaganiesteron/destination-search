import { NextResponse } from "next/server"
import tempCountries from "./countries"

export async function GET() {
	try {
		return NextResponse.json(tempCountries, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
