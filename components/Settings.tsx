import React, { useState } from "react"

type settingsProps = {
	settings: any
	saveSettings: Function
}

const Settings = ({ settings, saveSettings }: settingsProps) => {
	const [curReviewScore, setCurReviewScore] = useState<number>(settings.review)
	const [curConsiderReviewQuantity, setCurConsiderReviewQuantity] = useState<boolean>(settings.consider_review_quantity)
	const [curBudgetMinPrice, setCurBudgetMinPrice] = useState<number>(settings.budget.min_price)
	const [curBudgetMaxPrice, setCurBudgetMaxPrice] = useState<number>(settings.budget.max_price)
	const [curMidrangeMinPrice, setCurMidrangeMinPrice] = useState<number>(settings.midrange.min_price)
	const [curMidrangeMaxPrice, setCurMidrangeMaxPrice] = useState<number>(settings.midrange.max_price)
	const [curLuxuryMinPrice, setCurLuxuryMinPrice] = useState<number>(settings.luxury.min_price)
	const [curLuxuryMaxPrice, setCurLuxuryMaxPrice] = useState<number>(settings.luxury.max_price)

	const saveHandler = () => {
		saveSettings({
			...settings,
			review: curReviewScore,
			consider_review_quantity: curConsiderReviewQuantity,
			budget: {
				min_price: curBudgetMinPrice,
				max_price: curBudgetMaxPrice,
				conditions: {},
			},
			midrange: {
				min_price: curMidrangeMinPrice,
				max_price: curMidrangeMaxPrice,
				conditions: {},
			},
			luxury: {
				min_price: curLuxuryMinPrice,
				max_price: curLuxuryMaxPrice,
				conditions: {},
			},
		})
	}
	return (
		<div className="m-4 p-2 border border-black rounded-md">
			<p className="font-bold text-md pb-2">Settings:</p>
			<p className="font-bold text-sm ">Minimum Review Score</p>
			<input type="number" value={curReviewScore} className="w-full border border-black rounded-md text-black text-md px-1" onChange={(e) => setCurReviewScore(Number(e.target.value))} />
			<div className="flex flex-row">
				<input type="checkbox" checked={curConsiderReviewQuantity} onChange={(e) => setCurConsiderReviewQuantity(e.target.checked)} />
				<p className="font-bold text-sm ml-2">Consider Review Quantity</p>
			</div>
			<div className="pt-4">
				<p className="font-bold text-sm">Min Budget Price</p>
				<input type="number" value={curBudgetMinPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurBudgetMinPrice(Number(e.target.value))} />
				<p className="font-bold text-sm">Max Budget Price</p>
				<input type="number" value={curBudgetMaxPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurBudgetMaxPrice(Number(e.target.value))} />
			</div>
			<div className="pt-4">
				<p className="font-bold text-sm">Min Midrange Price</p>
				<input type="number" value={curMidrangeMinPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurMidrangeMinPrice(Number(e.target.value))} />
				<p className="font-bold text-sm">Max Midrange Price</p>
				<input type="number" value={curMidrangeMaxPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurMidrangeMaxPrice(Number(e.target.value))} />
			</div>
			<div className="pt-4">
				<p className="font-bold text-sm">Min Luxury Price</p>
				<input type="number" value={curLuxuryMinPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurLuxuryMinPrice(Number(e.target.value))} />
				<p className="font-bold text-sm">Max Luxury Price</p>
				<input type="number" value={curLuxuryMaxPrice} className="w-full border border-black rounded-md px-1" onChange={(e) => setCurLuxuryMaxPrice(Number(e.target.value))} />
			</div>
			<div className="pt-4">
				<button className="w-full border border-black rounded-md p-1 bg-success-300 hover:bg-slate-300 font-bold" onClick={saveHandler}>
					Save Settings
				</button>
			</div>
		</div>
	)
}

export default Settings
