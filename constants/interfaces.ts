export interface FetchSettings {
  review: number;
  tier: string;
  budget: Budget;
  midrange: Midrange;
  luxury: Luxury;
}

export interface Conditions {}

export interface Budget {
  min_price: number;
  max_price: number;
  conditions?: Conditions;
}

export interface Midrange {
  min_price: number;
  max_price: number;
  conditions?: Conditions;
}

export interface Luxury {
  min_price: number;
  max_price: number;
  conditions?: Conditions;
}

export interface Settings {
  consider_review_quantity: boolean;
  hoteltypes: string[];
  apartmenttypes: string[];
  facilities: number[];
  fetchMultiplePrices: boolean;
  showFlats: boolean;
  showTop10: boolean;
  ignorePriceAndRating: boolean;
}
