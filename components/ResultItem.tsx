import React from "react"
import Image from "next/image"

type T_ResultItem = {
	index: number
	name: string
	description: string
	photoUrl: string
	review: number
	priceObj: object | null
}

const ResultItem = ({ index, name, description, photoUrl, review, priceObj }: T_ResultItem) => {
	let total: number | undefined,
		book: string | undefined,
		currency: string | undefined = undefined

	if (priceObj !== null && priceObj !== undefined) {
		total = priceObj["total" as keyof typeof priceObj]
		book = priceObj["book" as keyof typeof priceObj]
		currency = priceObj["currency" as keyof typeof priceObj]
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
							<h1 className="font-bold">{`${index + 1}: ${name}`}</h1>
							{/* <p className="text-sm">{description}</p> */}
							<p>Review Score: {review}</p>
							{/* <p>Price (book): {book ? `${book}${currency}` : "NA"}</p> */}
							<p>Price: {total ? `${total}${currency}` : "NA"}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ResultItem
