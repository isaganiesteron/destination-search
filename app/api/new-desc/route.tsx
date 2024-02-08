import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
})

export async function POST(request: Request, params: any) {
	console.log("****************")
	// console.log(request.body)
	// const { text } = request.body

	// try {
	// 	const gptResponse = await (openai as any).complete({
	// 		engine: "text-davinci-002",
	// 		prompt: `Rewrite the following description in a more inviting way: ${text}`,
	// 		max_tokens: 60,
	// 	})

	// 	NextResponse.json({ rewrittenText: gptResponse.data.choices[0].text.strip() })
	// } catch (error) {
	// 	NextResponse.error()
	// }

	NextResponse.json({ message: "Hello" })
}
