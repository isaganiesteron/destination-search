export interface Settings {
	review: number
	consider_review_quantity: boolean
	hoteltypes: string[]
	apartmenttypes: string[]
	tier: string
	budget: Budget
	midrange: Midrange
	luxury: Luxury
}

export interface Conditions {}

export interface Budget {
	min_price: number
	max_price: number
	conditions?: Conditions
}

export interface Midrange {
	min_price: number
	max_price: number
	conditions?: Conditions
}

export interface Luxury {
	min_price: number
	max_price: number
	conditions?: Conditions
}
