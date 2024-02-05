import React from "react"
import Image from "next/image"

type T_ResultItem = {
	index: number
	name: string
	description: string
	photoUrl: string
	review: number
	priceObj: object | string
}

const ResultItem = ({ index, name, description, photoUrl, review, priceObj }: T_ResultItem) => {
	console.log(`${index}: ${JSON.stringify(priceObj)}`)
	return (
		<>
			<div className="border border-black rounded-md flex flex-col w-full mt-2">
				<div className="grid grid-cols-6 gap-1">
					<div className="p-2 flex items-center align-middle">
						<Image src={photoUrl} width={200} height={200} alt="Image of hotel" />
					</div>
					<div className="p-2 col-span-5 items-center">
						<div className="flex flex-col">
							<h1 className="font-bold">{`${index + 1}: ${name}`}</h1>
							<p className="text-sm">{description}</p>
							<p>Review Score: {review}</p>
							{/* <p>Price Book: {price === "NA" ? "Not Available" : price["book" as keyof typeof price]}</p>
							<p>Price Total: {price === "NA" ? "Not Available" : price["total" as keyof typeof price]}</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ResultItem
