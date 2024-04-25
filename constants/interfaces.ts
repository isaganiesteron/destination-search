export interface FetchSettings {
  ignoreReviewAndTier: boolean;
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
  useReviewQuantity: boolean;
  hoteltypes: string[];
  apartmentTypes: string[];
  facilities: number[];
  fetchMultiplePrices: boolean;
  showFlats: boolean;
  showTopTen: boolean;
  googleSearchRadius: number;
}
