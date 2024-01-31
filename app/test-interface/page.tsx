import React from "react"
import ResultItem from "@/components/ResultItem"

const page = () => {
	return (
		<main>
			<div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
				<div>
					<p className="font-bold text-md">Country:</p>
					<select className="border border-black rounded-md w-full" name="countries" id="countries">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>

				<div>
					<p className="font-bold text-md">City:</p>
					<select className="border border-black rounded-md w-full " name="cities" id="cities" disabled>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>

				<div>
					<p className="font-bold text-md">Top 10 Hotels:</p>
					<div className="border border-black rounded-md h-auto p-2 flex flex-col">
						<p className="text-sm">[status] Please Choose Country... </p>
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
						<ResultItem />
					</div>
				</div>

				<div className="flex flex-row-reverse">
					<button className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-slate-300 font-bold">Reset</button>
				</div>
			</div>
		</main>
	)
}

export default page
