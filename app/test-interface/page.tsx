import React from "react"

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
					{/* <input className="border border-black rounded-md" type="text"></input> */}
				</div>

				<div>
					<p className="font-bold text-md">City:</p>
					<select className="border border-black rounded-md w-full" name="cities" id="cities">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>

				<div>
					<p className="font-bold text-md">Top 10 Hotels:</p>
				</div>
			</div>
		</main>
	)
}

export default page
