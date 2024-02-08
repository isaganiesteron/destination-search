import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
})

export async function POST(request: Request) {
	const data = await request.json()
	const { description } = data

	try {
		const gptResponse = await openai.chat.completions.create({
			model: "gpt-3.5-turbo-0125",
			response_format: { type: "json_object" },
			messages: [
				{ role: "system", content: "You are an experienced copywriter who writes about hotels and destinations." },
				{ role: "user", content: `Rewrite the following description in a more inviting way: ${description}` },
			],
		})
		console.log(JSON.stringify(gptResponse))
		console.log(gptResponse.choices[0].message.content)
		return NextResponse.json({ rewrittenText: gptResponse.choices[0].message.content }, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
