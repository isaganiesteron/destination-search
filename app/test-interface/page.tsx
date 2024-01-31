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
					<select className="border border-black rounded-md w-full " name="cities" id="cities" disabled>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>

				<div>
					<p className="font-bold text-md">Top 10 Hotels:</p>
					<div className="border border-black rounded-md h-96 p-2 flex flex-col">
						<p className="text-sm">[status] Please Choose Country... </p>
						<div className="border border-black rounded-md flex flex-col w-full mt-2">
							<div className="grid grid-cols-6 gap-1">
								<div className="p-2 flex items-center align-middle">
									<p>1. Image</p>
								</div>
								<div className="p-2 col-span-5 items-center">
									<div className="flex flex-col">
										<h1>Title</h1>
										<p>description</p>
									</div>
								</div>
							</div>
						</div>
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
