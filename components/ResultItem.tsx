import React, { useState } from "react"
import Image from "next/image"
import Spinner from "@/components/Spinner"

type T_ResultItem = {
	index: number
	name: string
	description: string
	photoUrl: string
	rating: {
		score: number
		reviews: number
		average: number
	}
	priceObj: object | null
	url: string
}

const ResultItem = ({ index, name, description, photoUrl, rating, priceObj, url }: T_ResultItem) => {
	const [currentDescription, setCurrentDescription] = useState<string>(description)
	const [descLoading, setDescLoading] = useState<boolean>(false)

	let total: number | undefined,
		book: string | undefined,
		currency: string | undefined = undefined

	if (priceObj !== null && priceObj !== undefined) {
		total = priceObj["total" as keyof typeof priceObj]
		book = priceObj["book" as keyof typeof priceObj]
		currency = priceObj["currency" as keyof typeof priceObj]
	}

	const _regenerateHandler = () => {
		setDescLoading(true)
		// fetch genereated description from openAi
		setTimeout(() => {
			setDescLoading(false)
			setCurrentDescription(`[Regenerated with openAI in developement]   ${currentDescription}`)
		}, 1000)
		setCurrentDescription("")
	}

	return (
		<>
			<div className="border border-black rounded-md flex flex-col w-full mt-2">
				<div className="grid grid-cols-6 gap-1">
					<div className="p-2 flex items-center align-middle">
						<Image src={photoUrl} width={200} height={200} alt="Image of hotel" />
					</div>
					<div className="p-2 col-span-5 items-center">
						<div className="flex flex-col">
							<div className="flex flex-row">
								<h1 className="font-bold text-lg">{`${index + 1}: ${name}`}</h1>
								<button type="button" className="pl-2 text-[12px] hover:underline text-black-100" onClick={() => window.open(url, "_blank")}>
									Link to Hotel
								</button>
							</div>

							<p>
								<span className="font-bold">Rating:</span> {rating.score}
							</p>
							<p>
								<span className="font-bold">
									Adjusted Rating <span className="text-xs">(considering # of reviews)</span>:
								</span>{" "}
								{rating.average.toFixed(2)}
							</p>
							<p>
								<span className="font-bold">Number of Reviews:</span> {rating.reviews}
							</p>
							<p>
								<span className="font-bold">Price:</span> {total ? `${total}${currency}` : "NA"}
							</p>
							<p>
								<span className="font-bold">Description:</span>
							</p>
							{descLoading ? (
								<div className="flex justify-center items-center min-h-20 align-middle transition-opacity ease-in-out duration-500">
									<Spinner />
								</div>
							) : (
								<div className="transition-opacity ease-in-out duration-500">
									<p className="text-sm">{currentDescription}</p>
								</div>
							)}
						</div>
						<div className="space-x-2 space-y-1">
							<button className="border border-black rounded-md p-1 text-xs bg-yellow-300 hover:bg-yellow-400 text-gray-700" onClick={_regenerateHandler}>
								Regenerate Description
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ResultItem
