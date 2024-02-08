import React, { useState } from "react"
import Image from "next/image"
import Spinner from "@/components/Spinner"

type T_ResultItem = {
	index: number
	name: string
	description: string
	photoUrl: string
	review: number
	priceObj: object | null
}

const ResultItem = ({ index, name, description, photoUrl, review, priceObj }: T_ResultItem) => {
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

	const _generateHandler = () => {
		setDescLoading(true)
		console.log(`Generate description from ${currentDescription}`)
		// fetch genereated description from openAi
		setTimeout(() => {
			setDescLoading(false)
			setCurrentDescription("This is a generated description")
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
							<h1 className="font-bold text-lg">{`${index + 1}: ${name}`}</h1>
							<p>
								<span className="font-bold">Review Score:</span> {review}
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
							<button className="border border-black rounded-md p-1 text-xs bg-yellow-300 hover:bg-yellow-400 text-gray-700" onClick={_generateHandler}>
								Generate Description
							</button>
							<button className="border border-black rounded-md p-1 text-xs bg-yellow-300 hover:bg-yellow-400 text-gray-700">Regenerate Description</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ResultItem
