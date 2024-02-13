import React, { MouseEventHandler } from "react"
// create props interface with a handler Function
type T_SuggestedItem = {
	label: string
	type: string
	id: string
	suggestionClick: Function
}

const SuggestedItem = ({ label, type, id, suggestionClick }: T_SuggestedItem) => {
	return (
		<div className="flex p-1 hover:bg-slate-200 rounded-md">
			<button className="flex flex-col justify-start w-full m-1" onClick={() => suggestionClick({ type, id })}>
				<h1 className="font-bold">{label}</h1>
				<small className="text-[11px]">{type}</small>
			</button>
		</div>
	)
}

export default SuggestedItem
