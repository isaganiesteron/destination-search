import { NextResponse } from "next/server"

export async function GET(request: Request, params: any) {
	const { hotels } = params.params
	return NextResponse.json(`Get ratings of the following hotels ${hotels}`)
}
