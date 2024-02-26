import React, { useState } from "react"
import Image from "next/image"
import Spinner from "@/components/Spinner"
import { accommodationTypes } from "@/constants/accommodationtypes"

const ResultItem = ({ index, result }: { index: number; result: any }) => {
	const name = result.name ? result.name["en-gb" as keyof typeof result.name] : "NA"
	const currDescription = result.description ? result.description.text["en-gb" as keyof typeof result.description.text] : "NA"
	const currPhoto = result.photos ? (result.photos.length > 0 ? result.photos[0].url.thumbnail : "NA") : "NA"
	const additionRatingInfo = result.rating.additional_info
	const rating = result.rating ? { score: result.rating.review_score, reviews: result.rating.number_of_reviews, average: additionRatingInfo.average_review_score } : { score: 0, reviews: 0, average: 0 }
	const price = result.price ? (result.price?.price ? { total: result.price.price.total, book: result.price.price.book, currency: result.price.currency } : null) : null
	const accommodationType = accommodationTypes.filter((x) => x.id === result.accommodation_type).map((x) => x.name)[0]

	const [currentDescription, setCurrentDescription] = useState<string>(currDescription)
	const [descLoading, setDescLoading] = useState<boolean>(false)

	let total: number | undefined,
		book: string | undefined,
		currency: string | undefined = undefined

	if (price !== null && price !== undefined) {
		total = price["total" as keyof typeof price]
		book = price["book" as keyof typeof price]
		currency = price["currency" as keyof typeof price]
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
						<Image src={currPhoto} width={200} height={200} alt="Image of hotel" />
					</div>
					<div className="p-2 col-span-5 items-center">
						<div className="flex flex-col">
							<div className="flex flex-row">
								<h1 className="font-bold text-lg">{`${index + 1}: ${name} (${accommodationType})`}</h1>
								<button type="button" className="pl-2 text-[12px] hover:underline text-black-100" onClick={() => window.open(result.url, "_blank")}>
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
