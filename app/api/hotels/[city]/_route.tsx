// ****There is a new version of this file and this file won't be used anymore

import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"

const tempHotelsDetailsAndPrices = [
	{
		id: 1530112,
		name: {
			"en-gb": "Ever O Business Hotel",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/1530112?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb":
					"Standard check-in time is from 14:00 and check-out time is until 12:00. Early check-in and late check-out will be subject to a fee, depending on room availability and time of check-in/out.\n\n===\nPlease note that smoking is strictly not allowed in the guest rooms, bathrooms and function rooms. A cleaning fee will be applicable if cigarette smoke is detected in the room. Guests are allowed to smoke at the prescribed smoking areas only.",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Set 1.3 km from Fort Pilar, Ever O Business Hotel features rooms with air conditioning in Zamboanga. The accommodation offers a 24-hour front desk, airport transfers, room service and free WiFi.\n\nThe units at the hotel come with a seating area, a flat-screen TV with cable channels and a private bathroom with free toiletries and a bidet. At Ever O Business Hotel every room includes bed linen and towels.\n\nThe nearest airport is Zamboanga International Airport, 2 km from the accommodation.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Tomas Claudio Street, Corner La Purisima",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.907669,
				longitude: 122.076379,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 5,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58176296.jpg?k=5688ecdac935b35ea0f61196bbef30dc0f2f4adb0c2f92874f3f67477c6acdd7&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58176296.jpg?k=5688ecdac935b35ea0f61196bbef30dc0f2f4adb0c2f92874f3f67477c6acdd7&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58179620.jpg?k=b189e9907a5b67c9f251300a66a286221e7df88c4cb502293586a11dd748150c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58179620.jpg?k=b189e9907a5b67c9f251300a66a286221e7df88c4cb502293586a11dd748150c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58177863.jpg?k=97fc2c6227d83b2d76975493eac28282d84599fbf26f5fca4486894f774c7bde&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58177863.jpg?k=97fc2c6227d83b2d76975493eac28282d84599fbf26f5fca4486894f774c7bde&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/140843377.jpg?k=e0981f1714e7a22b152bfe9f807dea8650e558bc001402b7d76bec23d84202fa&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/140843377.jpg?k=e0981f1714e7a22b152bfe9f807dea8650e558bc001402b7d76bec23d84202fa&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/140843380.jpg?k=78702e803bb0e477341228eab4947889a25a52011a8391decda0c73d0075166f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/140843380.jpg?k=78702e803bb0e477341228eab4947889a25a52011a8391decda0c73d0075166f&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58179440.jpg?k=da6fd1f0682a151ccdc357288d81f6d5af8439801491d69b3e19ee0c057d56a4&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58179440.jpg?k=da6fd1f0682a151ccdc357288d81f6d5af8439801491d69b3e19ee0c057d56a4&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58179487.jpg?k=0d37a5b87f687aad91d13821452135202128c9eefc310591b4c45f5e92d9e566&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58179487.jpg?k=0d37a5b87f687aad91d13821452135202128c9eefc310591b4c45f5e92d9e566&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58185019.jpg?k=a86d8637671187782c7197598146664af766e34302213c1cdf2dcd6dd03c0672&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58185019.jpg?k=a86d8637671187782c7197598146664af766e34302213c1cdf2dcd6dd03c0672&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58178095.jpg?k=a0f147adae4b4299b791417c1078435a8d593b4b5e5841f375bfd25d37550f90&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58178095.jpg?k=a0f147adae4b4299b791417c1078435a8d593b4b5e5841f375bfd25d37550f90&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/58178332.jpg?k=7d954b9ee41faa3b09b16afbc448de28e58103f388de188f0697709b434b0fa7&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/58178332.jpg?k=7d954b9ee41faa3b09b16afbc448de28e58103f388de188f0697709b434b0fa7&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 288,
			preferred: false,
			review_score: 7.2,
			stars: 3,
			stars_type: "estimated_by_accommodation",
		},
		spoken_languages: ["en-gb", "tl", "en-us"],
		themes: [8, 16, 45, 60, 69, 70, 71, 72, 84, 100, 104],
		url: "https://www.booking.com/hotel/ph/ever-o-business.html?aid=1198318",
		price: {
			id: 1530112,
			currency: "PHP",
			deep_link_url: "booking://hotel/1530112?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 2240,
				total: 2240,
			},
			url: "https://www.booking.com/hotel/ph/ever-o-business.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 3096321,
		name: {
			"en-gb": "W Hotel",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "15:00:00",
			checkout_from: "11:30:00",
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/3096321?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb":
					"Payment before arrival via bank transfer is required. The property will contact you after you book to provide instructions.\nPlease inform  in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Situated in Zamboanga, Mindanao region, W Hotel is located 1.8 km from Fort Pilar. Boasting an ATM, this property also provides guests with a restaurant. The accommodation features room service, a 24-hour front desk and luggage storage for guests.\n\nAt the hotel, each room is equipped with a desk. Complete with a private bathroom fitted with a bidet and free toiletries, all rooms at W Hotel have a flat-screen TV and air conditioning, and selected rooms also boast a balcony. At the accommodation the rooms have bed linen and towels.\n\nThe nearest airport is Zamboanga International, 2 km from W Hotel, and the property offers a paid airport shuttle service.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Agro Building, Veterans Avenue",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.915263,
				longitude: 122.079246,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 5,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/131118119.jpg?k=0c73e30accf89458dd2ec0cf15cf50298ed6269f6f7ac45d25fc6bd76b2e20db&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/131118119.jpg?k=0c73e30accf89458dd2ec0cf15cf50298ed6269f6f7ac45d25fc6bd76b2e20db&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379030706.jpg?k=989987a6f6abaea8321fbc398077c30ad1c2f9edef1bd89d712710174b7b6fc0&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379030706.jpg?k=989987a6f6abaea8321fbc398077c30ad1c2f9edef1bd89d712710174b7b6fc0&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379030710.jpg?k=bfd5ccee222e40329f2789f9baf50431f2210aec7132e9fa4d17d4a3f9a8e5e2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379030710.jpg?k=bfd5ccee222e40329f2789f9baf50431f2210aec7132e9fa4d17d4a3f9a8e5e2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379030718.jpg?k=1abb23e84d8e164b0440e1ce9aab90bf1882fba3aa9489dd59cdab7ad384ad58&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379030718.jpg?k=1abb23e84d8e164b0440e1ce9aab90bf1882fba3aa9489dd59cdab7ad384ad58&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379030723.jpg?k=4ad990609c8120b902ed04d59d5400ce8fef5219fba9ff108c66da8093dd35d3&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379030723.jpg?k=4ad990609c8120b902ed04d59d5400ce8fef5219fba9ff108c66da8093dd35d3&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379030322.jpg?k=7d5734f192d7058d098df8240850731a26843fe2206611386d31fe190d8dba3f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379030322.jpg?k=7d5734f192d7058d098df8240850731a26843fe2206611386d31fe190d8dba3f&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/379028959.jpg?k=54fcdc7858ec4ed6eb88876d63c56a9ad4273836926bc4819bde406be0e6925c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/379028959.jpg?k=54fcdc7858ec4ed6eb88876d63c56a9ad4273836926bc4819bde406be0e6925c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/375995171.jpg?k=3a003e9c44ac7a5756e98c2b0b418338a4ec2fb183d8f7e0ec7beeb15d85f32d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/375995171.jpg?k=3a003e9c44ac7a5756e98c2b0b418338a4ec2fb183d8f7e0ec7beeb15d85f32d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/375995173.jpg?k=2877d61540719785f15eada99e59795b2808f5beb24715d0aa89d3014af2862c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/375995173.jpg?k=2877d61540719785f15eada99e59795b2808f5beb24715d0aa89d3014af2862c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/375995175.jpg?k=091307f3be35efd73a66970487cad7bc836f08b4390256ca6b3c7b121d3a747b&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/375995175.jpg?k=091307f3be35efd73a66970487cad7bc836f08b4390256ca6b3c7b121d3a747b&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 21,
			preferred: false,
			review_score: 7.2,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl", "zh-cn"],
		themes: [8, 16, 45, 69, 70, 71, 72, 82, 84, 100],
		url: "https://www.booking.com/hotel/ph/w.html?aid=1198318",
		price: {
			id: 3096321,
			currency: "PHP",
			deep_link_url: "booking://hotel/3096321?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 2632,
				total: 2632,
			},
			url: "https://www.booking.com/hotel/ph/w.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 5095333,
		name: {
			"en-gb": "Yubenco Global Ecotel",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "12:00:00",
			checkin_to: "14:00:00",
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/5095333?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Yubenco Global Ecotel is offering accommodation in Zamboanga. Among the facilities at this property are a 24-hour front desk and an ATM, along with free WiFi throughout the property. The property is non-smoking and is set 4.8 km from Fort Pilar.\n\nAt the hotel, all rooms have a desk, a flat-screen TV, a private bathroom, bed linen and towels. Every room is equipped with a kettle, while selected rooms also offer a balcony and others also have mountain views. All guest rooms feature a wardrobe.\n\nThe nearest airport is Zamboanga International Airport, 3 km from Yubenco Global Ecotel.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Yubenco Starmall, MCLL Hiway, Putik,",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.935753,
				longitude: 122.092518,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 4,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/203939115.jpg?k=1c11e01e120be0804c14a7ea8ecdcc709f43a1d80da150a8dacf2474c40ddf56&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/203939115.jpg?k=1c11e01e120be0804c14a7ea8ecdcc709f43a1d80da150a8dacf2474c40ddf56&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/412933860.jpg?k=c54c2467c78ba706a084b30d4a11b87d5a0a2bbd7d376329a7152e05f54ff593&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/412933860.jpg?k=c54c2467c78ba706a084b30d4a11b87d5a0a2bbd7d376329a7152e05f54ff593&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/412932906.jpg?k=7f07229355a43d86d2904081572724c37051653b30545892c1b5aab994d4b9c0&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/412932906.jpg?k=7f07229355a43d86d2904081572724c37051653b30545892c1b5aab994d4b9c0&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/412932768.jpg?k=34bd7ac51c9136124add12aaeb38f6a14b6bc66eca4aff04f5847f9f7f3d21f9&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/412932768.jpg?k=34bd7ac51c9136124add12aaeb38f6a14b6bc66eca4aff04f5847f9f7f3d21f9&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/203728683.jpg?k=0cb34f0afdebb3ae6bb417ddd21365cd94a2bc1270722da98bbf37bd087cad67&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/203728683.jpg?k=0cb34f0afdebb3ae6bb417ddd21365cd94a2bc1270722da98bbf37bd087cad67&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/203728593.jpg?k=92fc9a0e1ac39970b4281202e167390fb3200f942353de20795074fa38e21cea&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/203728593.jpg?k=92fc9a0e1ac39970b4281202e167390fb3200f942353de20795074fa38e21cea&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/203728529.jpg?k=cf752a1a925f9e0beb5b0f4338c39765d1b371486b45864c4c03878d3d83d838&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/203728529.jpg?k=cf752a1a925f9e0beb5b0f4338c39765d1b371486b45864c4c03878d3d83d838&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/201406532.jpg?k=a140ac3c5bbc1ac201cc9b2ce767426818125cf2dded179059579b0e40c716ae&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/201406532.jpg?k=a140ac3c5bbc1ac201cc9b2ce767426818125cf2dded179059579b0e40c716ae&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/201406509.jpg?k=307a375deeb54e52c537f995afa0e9e6c2869869fb34920100acd40647ac07c8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/201406509.jpg?k=307a375deeb54e52c537f995afa0e9e6c2869869fb34920100acd40647ac07c8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/201406417.jpg?k=541f4b12677725884b93d58e13d54bd1ba5489987f056feddf56ba1dc0891d47&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/201406417.jpg?k=541f4b12677725884b93d58e13d54bd1ba5489987f056feddf56ba1dc0891d47&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 20,
			preferred: false,
			review_score: 6.5,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 16, 45, 69, 70, 71, 72, 82, 84, 104],
		url: "https://www.booking.com/hotel/ph/yubenco-global-ecotel.html?aid=1198318",
		price: {
			id: 5095333,
			currency: "PHP",
			deep_link_url: "booking://hotel/5095333?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 2228,
				total: 2228,
			},
			url: "https://www.booking.com/hotel/ph/yubenco-global-ecotel.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 6078028,
		name: {
			"en-gb": "Isteraha Haven Inn",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "12:00:00",
			checkin_to: "12:00:00",
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/6078028?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Situated in Zamboanga, 2.4 km from Fort Pilar, Isteraha Haven Inn features accommodation with a garden, free private parking and a shared lounge. Boasting family rooms, this property also provides guests with a sun terrace. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.\n\nAt the hotel, rooms are fitted with air conditioning and a flat-screen TV.\n\nThe nearest airport is Zamboanga International Airport, 3 km from Isteraha Haven Inn.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "876 Doña Maria Subdivision",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.916322,
				longitude: 122.086516,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 3,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/299496246.jpg?k=da46c052c42adc185bec1ede5caaf8c1f7ad5a79082512b1c94995eaad0b63f1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/299496246.jpg?k=da46c052c42adc185bec1ede5caaf8c1f7ad5a79082512b1c94995eaad0b63f1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/238248265.jpg?k=688856276a63a09793ddd00899434f4958fecaede2b8d9d3e555c696c63777a8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/238248265.jpg?k=688856276a63a09793ddd00899434f4958fecaede2b8d9d3e555c696c63777a8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/299496447.jpg?k=0fd1e75295f2484eb799dba977c9b488b058fa5c3bd9ddf83a1eaf8d0a2d98e1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/299496447.jpg?k=0fd1e75295f2484eb799dba977c9b488b058fa5c3bd9ddf83a1eaf8d0a2d98e1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/299496456.jpg?k=c7e6855cb8bfe0e4c2f7fa22773a0c7c18053a1299e85b5892adf9d6302667d2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/299496456.jpg?k=c7e6855cb8bfe0e4c2f7fa22773a0c7c18053a1299e85b5892adf9d6302667d2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/298402117.jpg?k=33639b90c41db477b949e89818afa32b7965d322c4cbac00279eb16898ccc94c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/298402117.jpg?k=33639b90c41db477b949e89818afa32b7965d322c4cbac00279eb16898ccc94c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/238252780.jpg?k=4b373b5d2bbded1a3a626fb0241ccd938b7dbd81583fa3fa8c8e461f1a960391&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/238252780.jpg?k=4b373b5d2bbded1a3a626fb0241ccd938b7dbd81583fa3fa8c8e461f1a960391&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/238251460.jpg?k=f9c2609a43193868c01aa8378a6c0bc93047edebe6184677a35eb6dc6f6011d2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/238251460.jpg?k=f9c2609a43193868c01aa8378a6c0bc93047edebe6184677a35eb6dc6f6011d2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/238195000.jpg?k=eee3fca56dcddc861d3a098c0c0e0e82c72392e396a1394820f94ffb358ea4b0&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/238195000.jpg?k=eee3fca56dcddc861d3a098c0c0e0e82c72392e396a1394820f94ffb358ea4b0&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/299496396.jpg?k=d8d3a215e1d4dc18f0b55b3bdfb69f3c1963f05e0c277b7caa5a5bff934dd9ef&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/299496396.jpg?k=d8d3a215e1d4dc18f0b55b3bdfb69f3c1963f05e0c277b7caa5a5bff934dd9ef&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/298402099.jpg?k=c2be55f89f4dc71a39e351b5f3e53af6761d6d48f96d996be2511a780daf30a8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/298402099.jpg?k=c2be55f89f4dc71a39e351b5f3e53af6761d6d48f96d996be2511a780daf30a8&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 174,
			preferred: false,
			review_score: 8.3,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 16, 45, 69, 70, 71, 72, 82, 84, 89, 100, 104],
		url: "https://www.booking.com/hotel/ph/isteraha-haven-inn-amp-resort.html?aid=1198318",
		price: {
			id: 6078028,
			currency: "PHP",
			deep_link_url: "booking://hotel/6078028?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 1478.4,
				total: 1478.4,
			},
			url: "https://www.booking.com/hotel/ph/isteraha-haven-inn-amp-resort.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 6280271,
		name: {
			"en-gb": "L' Meridian Suite",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "23:30:00",
			checkout_from: "06:00:00",
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/6280271?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Situated in Zamboanga, 3.7 km from Fort Pilar, L' Meridian Suite features views of the city. With a restaurant, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation features room service, a 24-hour front desk and luggage storage for guests.\n\nAt the hotel, every room is fitted with a desk and a flat-screen TV. At L' Meridian Suite the rooms have bed linen and towels.\n\nThe nearest airport is Zamboanga International Airport, a few steps from the accommodation.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Governor Camins Avenue, Zamboanga del Sur",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.919121,
				longitude: 122.066646,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 3,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058384.jpg?k=1a843e48ed4a3511607c2774301961cc5151b3d29f2ee6681de2c9ba97086089&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058384.jpg?k=1a843e48ed4a3511607c2774301961cc5151b3d29f2ee6681de2c9ba97086089&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058390.jpg?k=82818e5d80909786c9710f5ccd9131caf71b448be4ca166226aa85af496bed5c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058390.jpg?k=82818e5d80909786c9710f5ccd9131caf71b448be4ca166226aa85af496bed5c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058383.jpg?k=d95afecc5a3a7266adf7c41d13b8a7856c66288a8180ffd3ed103e73f89be37a&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058383.jpg?k=d95afecc5a3a7266adf7c41d13b8a7856c66288a8180ffd3ed103e73f89be37a&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058394.jpg?k=4cd2f8463c3fd1e6025c6aa762a104ed02379f71614a9798ba8dffe016c45095&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058394.jpg?k=4cd2f8463c3fd1e6025c6aa762a104ed02379f71614a9798ba8dffe016c45095&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058378.jpg?k=24ef0a8e116cec065fca2f29572656fbbf632285a2685e57d06576c54d28bdf5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058378.jpg?k=24ef0a8e116cec065fca2f29572656fbbf632285a2685e57d06576c54d28bdf5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/246058335.jpg?k=da7af0b44fdd8a7e072e98f9ca343e86b98ae0498c0bd1f36897f76fd8289476&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/246058335.jpg?k=da7af0b44fdd8a7e072e98f9ca343e86b98ae0498c0bd1f36897f76fd8289476&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/289322225.jpg?k=c3c1304b78c5a181df3aafcb88f4a35945f26a7003fd38c3ad36a558436889bc&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/289322225.jpg?k=c3c1304b78c5a181df3aafcb88f4a35945f26a7003fd38c3ad36a558436889bc&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/389902367.jpg?k=b0d8ba481e365b919d26d146e501f5d2061393993964b00c5595ced456a2b90c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/389902367.jpg?k=b0d8ba481e365b919d26d146e501f5d2061393993964b00c5595ced456a2b90c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/389902477.jpg?k=08a7836d744cb2d8ffe9cf443f561d645becc922fc95dc7bf2a50041e0d05864&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/389902477.jpg?k=08a7836d744cb2d8ffe9cf443f561d645becc922fc95dc7bf2a50041e0d05864&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/389903234.jpg?k=91b03b7eb48c45c99601b683037e7ad559f0779d5e8a45da12a959000b49ab8d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/389903234.jpg?k=91b03b7eb48c45c99601b683037e7ad559f0779d5e8a45da12a959000b49ab8d&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 44,
			preferred: false,
			review_score: 7.5,
			stars: 3,
			stars_type: "estimated_by_accommodation",
		},
		spoken_languages: ["en-gb", "en-us"],
		themes: [8, 45, 60, 69, 70, 71, 72, 84, 100],
		url: "https://www.booking.com/hotel/ph/l-39-meridian-suite.html?aid=1198318",
		price: {
			id: 6280271,
			currency: "PHP",
			deep_link_url: "booking://hotel/6280271?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 2338.56,
				total: 2338.56,
			},
			url: "https://www.booking.com/hotel/ph/l-39-meridian-suite.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 6908465,
		name: {
			"en-gb": "Marcian Garden Hotel",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "23:30:00",
			checkout_from: "12:00:00",
			checkout_to: "12:30:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/6908465?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb":
					"Please inform  in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.\nGuests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Located in Zamboanga, 3.5 km from Fort Pilar, Marcian Garden Hotel provides accommodation with a garden, free private parking, a restaurant and a bar. This 4-star hotel offers an ATM and a concierge service. The accommodation offers a 24-hour front desk, airport transfers, room service and free WiFi.\n\nThe hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a safety deposit box, a flat-screen TV and a private bathroom with a bidet. At Marcian Garden Hotel each room is equipped with bed linen and towels.\n\nBuffet and continental breakfast options are available daily at the accommodation.\n\nThe nearest airport is Zamboanga International Airport, a few steps from Marcian Garden Hotel.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Governor Camins Avenue",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.91781,
				longitude: 122.06398,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 6,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325386.jpg?k=42356f1020d1ad6553ce3e13d451bc708d5dd46125dbfde47faa2b4e1c0b92c2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325386.jpg?k=42356f1020d1ad6553ce3e13d451bc708d5dd46125dbfde47faa2b4e1c0b92c2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325534.jpg?k=243897401e8868f11bea1537927df12b1b72665933e0b4350ac8aacb408a2546&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325534.jpg?k=243897401e8868f11bea1537927df12b1b72665933e0b4350ac8aacb408a2546&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325402.jpg?k=2f6432cdf7fe750f94f123b68465ea09f03bcb9c5ade0fabaf3ae6768158d047&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325402.jpg?k=2f6432cdf7fe750f94f123b68465ea09f03bcb9c5ade0fabaf3ae6768158d047&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325552.jpg?k=cf741bf00aa435fb472b52d3b967718d806a869b34aeb7c96dab12c41d6a75fe&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325552.jpg?k=cf741bf00aa435fb472b52d3b967718d806a869b34aeb7c96dab12c41d6a75fe&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325348.jpg?k=16266dc34a75e06249b1f2c2127b846d58c95c1ae3303865a6524ef258a9f505&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325348.jpg?k=16266dc34a75e06249b1f2c2127b846d58c95c1ae3303865a6524ef258a9f505&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/287611230.jpg?k=0c0cefe8bd9d315a1ce0bf975a9c90ddf0eed7caa4d22a25dce042306eb867f5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/287611230.jpg?k=0c0cefe8bd9d315a1ce0bf975a9c90ddf0eed7caa4d22a25dce042306eb867f5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/287611204.jpg?k=5fe15cbc5cf715b828040f13f00f1ab5cbdad11799fd0da87fb5f611871591b5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/287611204.jpg?k=5fe15cbc5cf715b828040f13f00f1ab5cbdad11799fd0da87fb5f611871591b5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325373.jpg?k=19cc429e414a3c9a32a851af4deb3cfa70c65b0ff5e4976944a17dd2a29fa872&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325373.jpg?k=19cc429e414a3c9a32a851af4deb3cfa70c65b0ff5e4976944a17dd2a29fa872&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325375.jpg?k=83b7612d3bd2de00efa87bf0c501d13fdd3d7403c8d5355a7adee747154a5bd1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325375.jpg?k=83b7612d3bd2de00efa87bf0c501d13fdd3d7403c8d5355a7adee747154a5bd1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/277325376.jpg?k=132ac40e878e1377880a4e93b06214d391bf8f14074ac16958d5e8297f3890cb&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/277325376.jpg?k=132ac40e878e1377880a4e93b06214d391bf8f14074ac16958d5e8297f3890cb&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 139,
			preferred: true,
			review_score: 7.9,
			stars: 4,
			stars_type: "estimated_by_accommodation",
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 9, 16, 45, 59, 69, 70, 71, 72, 84, 100],
		url: "https://www.booking.com/hotel/ph/marcian-garden-zamboanga-city.html?aid=1198318",
		price: {
			id: 6908465,
			currency: "PHP",
			deep_link_url: "booking://hotel/6908465?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 5481.73,
				total: 5481.73,
			},
			url: "https://www.booking.com/hotel/ph/marcian-garden-zamboanga-city.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 9561652,
		name: {
			"en-gb": "ES holiday home",
		},
		accommodation_type: 220,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "15:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "15:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/9561652?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\nManaged by a private host\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Located in Zamboanga in the Mindanao region, ES holiday home provides accommodation with free WiFi and free private parking. Set 15 km from Fort Pilar, the property offers a garden.\n\nThis holiday home will provide guests with 1 bedroom, a flat-screen TV and air conditioning.\n\nThe nearest airport is Zamboanga International Airport, 10 km from the holiday home.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "maasin zone 4",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.957972,
				longitude: 121.984464,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 1,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939768.jpg?k=d372b82e5e1415936d3f3d1f9d869605b6b46c5525c74482574e5de9cf70c476&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939768.jpg?k=d372b82e5e1415936d3f3d1f9d869605b6b46c5525c74482574e5de9cf70c476&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939840.jpg?k=ba6edd47b3e7dbbbf85f423c08cdb4edf8b193b019578b517f8b22cd2c64e75c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939840.jpg?k=ba6edd47b3e7dbbbf85f423c08cdb4edf8b193b019578b517f8b22cd2c64e75c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939852.jpg?k=197eee5d7b7d8cff8a10a323ba9a43d6396801c39d7cc33eb7793abe48421af3&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939852.jpg?k=197eee5d7b7d8cff8a10a323ba9a43d6396801c39d7cc33eb7793abe48421af3&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939861.jpg?k=672ce32913d5a2f7bb6b5441c270be70577ebf1e214f6a43d43144a095c26ad4&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939861.jpg?k=672ce32913d5a2f7bb6b5441c270be70577ebf1e214f6a43d43144a095c26ad4&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939870.jpg?k=a63fcada5044753d78034c93b36a088c3fc74562387e1e94ae5920e49ab16fde&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939870.jpg?k=a63fcada5044753d78034c93b36a088c3fc74562387e1e94ae5920e49ab16fde&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939877.jpg?k=c60061e220ea67b58f9aecd4289b09ddc2efff5cfac59ff50b426d128b9d1ea6&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939877.jpg?k=c60061e220ea67b58f9aecd4289b09ddc2efff5cfac59ff50b426d128b9d1ea6&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939886.jpg?k=6a7a33516462cca2f2e6aec4c97b892f8ae1fe153db68cadb4487ca2a230ca68&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939886.jpg?k=6a7a33516462cca2f2e6aec4c97b892f8ae1fe153db68cadb4487ca2a230ca68&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939901.jpg?k=f4d2007b251372dc16639399de8f312fdd7763a3edf0cd3f419024165154d6d8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939901.jpg?k=f4d2007b251372dc16639399de8f312fdd7763a3edf0cd3f419024165154d6d8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939908.jpg?k=aa7420c6504723ded5e2986eb2d75c0ad6d01e5a85bce799f01b935f4d45feb5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939908.jpg?k=aa7420c6504723ded5e2986eb2d75c0ad6d01e5a85bce799f01b935f4d45feb5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/424939911.jpg?k=9ef0a6a4c508d2f7b7011005359754d74e265b09ef1434fdbbda556cc1565f12&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/424939911.jpg?k=9ef0a6a4c508d2f7b7011005359754d74e265b09ef1434fdbbda556cc1565f12&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 2,
			stars: 3,
			stars_type: "estimated_by_booking",
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [7, 8, 16, 20, 26, 42, 45, 69, 70, 71, 72, 74, 82, 84, 102, 113, 114],
		url: "https://www.booking.com/hotel/ph/enjoy-a-quiet-place-beside-the-river-zamboanga-city.html?aid=1198318",
		price: "NA",
	},
	{
		id: 9681834,
		name: {
			"en-gb": "RedDoorz @ Sundance Mountain Resort Tampilisan",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "22:00:00",
			checkout_from: "10:00:00",
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/9681834?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Set in Zamboanga, Mindanao region, RedDoorz @ Sundance Mountain Resort Tampilisan is located 2.5 km from Fort Pilar. The hotel has family rooms.\n\nAt the hotel all rooms have air conditioning and a flat-screen TV.\n\nSpeaking English and Filipino, staff at the 24-hour front desk can help you plan your stay.\n\nThe nearest airport is Zamboanga International Airport, 1 km from RedDoorz @ Sundance Mountain Resort Tampilisan.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Sundance Mountain Resort, Road, Zamboanga del Norte, Philippines",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.921442,
				longitude: 122.079027,
			},
			country: "ph",
			districts: [],
			postal_code: "7116",
			regions: [1063],
		},
		number_of_rooms: 8,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171825.jpg?k=a64eb45c7b471f9e16a12c25864ec59a793d97e12b577951e3032e488ebdc3c5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171825.jpg?k=a64eb45c7b471f9e16a12c25864ec59a793d97e12b577951e3032e488ebdc3c5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171855.jpg?k=b196f7e6f83815b708e87e1988e46e1bf7c3cd6e73f7cb26f14754d8cdb34f6e&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171855.jpg?k=b196f7e6f83815b708e87e1988e46e1bf7c3cd6e73f7cb26f14754d8cdb34f6e&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171857.jpg?k=b94fc862f0df81bb114cc4f8d7fc77668b61d8fa20e6295a4086ba743ad29839&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171857.jpg?k=b94fc862f0df81bb114cc4f8d7fc77668b61d8fa20e6295a4086ba743ad29839&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171859.jpg?k=70961733bc8e011ca4454149b4bb5111eecee255ae6f09599d96103aa0a3bb54&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171859.jpg?k=70961733bc8e011ca4454149b4bb5111eecee255ae6f09599d96103aa0a3bb54&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171861.jpg?k=2800c2afb9a5fd47d8ca6d3cb560ae48f11483df77776678da09a092fc01ebed&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171861.jpg?k=2800c2afb9a5fd47d8ca6d3cb560ae48f11483df77776678da09a092fc01ebed&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171863.jpg?k=011abd77d3a163df0a8bd1d82f714780ceb7df5778563360fe87dca547f71f9f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171863.jpg?k=011abd77d3a163df0a8bd1d82f714780ceb7df5778563360fe87dca547f71f9f&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171866.jpg?k=ecf4f3eabd290af3e26bd4105c5a7285cbe9272e82629d445940ae99cb79ffdd&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171866.jpg?k=ecf4f3eabd290af3e26bd4105c5a7285cbe9272e82629d445940ae99cb79ffdd&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433171869.jpg?k=b365625831c8a8698336dbbb533ad7441f1e0df12961dcf2ad593d7530fea177&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433171869.jpg?k=b365625831c8a8698336dbbb533ad7441f1e0df12961dcf2ad593d7530fea177&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433187807.jpg?k=47d5513e1ba8da98b64ce0398ac564398c207e811bd1ba8e62cef7f3c5cf1248&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433187807.jpg?k=47d5513e1ba8da98b64ce0398ac564398c207e811bd1ba8e62cef7f3c5cf1248&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/433187806.jpg?k=99b706bf210845fe0463896d663b987b2fe652064f1ed6855899c5316a7808ca&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/433187806.jpg?k=99b706bf210845fe0463896d663b987b2fe652064f1ed6855899c5316a7808ca&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 1,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl", "en-us"],
		themes: [8, 45, 69, 70, 71, 72, 82, 84],
		url: "https://www.booking.com/hotel/ph/reddoorz-sundance-mountain-resort-tampilisan.html?aid=1198318",
		price: {
			id: 9681834,
			currency: "PHP",
			deep_link_url: "booking://hotel/9681834?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 1736.63,
				total: 1736.63,
			},
			url: "https://www.booking.com/hotel/ph/reddoorz-sundance-mountain-resort-tampilisan.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 9825436,
		name: {
			"en-gb": "Casa Don Atilano Pension House",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/9825436?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Casa Don Atilano Pension House is set in Zamboanga. This 1-star hotel has air-conditioned rooms with a private bathroom. The property is non-smoking and is located 3 km from Fort Pilar.\n\nAt the hotel every room comes with bed linen and towels.\n\nAround-the-clock guidance is available at the reception, where staff speak English and Filipino.\n\nThe nearest airport is Zamboanga International Airport, 1 km from Casa Don Atilano Pension House.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Canelar Moret",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.916631,
				longitude: 122.068777,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 3,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475218.jpg?k=c6cfa84e4b813388ebe3a71933c63732243b50a1e2ce26c644654b80d6014eba&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475218.jpg?k=c6cfa84e4b813388ebe3a71933c63732243b50a1e2ce26c644654b80d6014eba&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/443195052.jpg?k=2c230a5c4c7342e438b2dfa4e5e2d6271493ac9a15808e6dd2be7e89454bcaec&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/443195052.jpg?k=2c230a5c4c7342e438b2dfa4e5e2d6271493ac9a15808e6dd2be7e89454bcaec&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475217.jpg?k=8fdf366a2f571f627e6f283e7f262ecb4cd19c91154eb85ee885f3555f74aeb1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475217.jpg?k=8fdf366a2f571f627e6f283e7f262ecb4cd19c91154eb85ee885f3555f74aeb1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475183.jpg?k=052083b9974c2ec36d01195e09479e1421739477cf89e75ec89d86fc42d9989d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475183.jpg?k=052083b9974c2ec36d01195e09479e1421739477cf89e75ec89d86fc42d9989d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475169.jpg?k=648929fb8097cfe1330f9aa91ccf6be617e949b69fab833def0c949ce2bd0e94&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475169.jpg?k=648929fb8097cfe1330f9aa91ccf6be617e949b69fab833def0c949ce2bd0e94&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475259.jpg?k=ae1ad2bdfb0932ece03ddc255bddbc4a76f642bafba57eb32090164b0a326bd2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475259.jpg?k=ae1ad2bdfb0932ece03ddc255bddbc4a76f642bafba57eb32090164b0a326bd2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475318.jpg?k=2fc679474a866e852fc332263c9516ee2f3210ee2ad65fc0b38a70c39751ef00&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475318.jpg?k=2fc679474a866e852fc332263c9516ee2f3210ee2ad65fc0b38a70c39751ef00&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/445475325.jpg?k=3f2592ffe7432e1d2351e1c7aefa5cef825149abc9083ab50b37a18359a2fe31&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/445475325.jpg?k=3f2592ffe7432e1d2351e1c7aefa5cef825149abc9083ab50b37a18359a2fe31&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 1,
			stars: 1,
			stars_type: "estimated_by_accommodation",
		},
		spoken_languages: ["en-gb", "tl", "en-us"],
		themes: [8, 45, 62, 69, 70, 71, 72, 84],
		url: "https://www.booking.com/hotel/ph/casa-don-atilano-pension-house.html?aid=1198318",
		price: "NA",
	},
	{
		id: 10172377,
		name: {
			"en-gb": "Stunning 1-Bed House in zamboanga",
		},
		accommodation_type: 220,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "16:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "10:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/10172377?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Set 15 km from Fort Pilar, Stunning 1-Bed House in zamboanga offers accommodation with free WiFi and free private parking.\n\nThe holiday home includes 1 bedroom, a living room, and 1 bathroom with a walk-in shower. Towels and bed linen are offered in the holiday home. For added privacy, the accommodation features a private entrance.\n\nThe nearest airport is Zamboanga International Airport, 10 km from the holiday home.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Puro 4",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.95453,
				longitude: 121.9826,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 1,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/471883460.jpg?k=6520f88a4da66ff66472c14d94eb7f8c303e88a61274515bcaf10f61f1480f45&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/471883460.jpg?k=6520f88a4da66ff66472c14d94eb7f8c303e88a61274515bcaf10f61f1480f45&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033785.jpg?k=f119818611205de5aec77d3adf593f3fd29504ddabcd2d5feca99afbcda5fb98&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033785.jpg?k=f119818611205de5aec77d3adf593f3fd29504ddabcd2d5feca99afbcda5fb98&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033788.jpg?k=dcab1a769adaff5954df26de782edab29430a296457818627164538593ed1473&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033788.jpg?k=dcab1a769adaff5954df26de782edab29430a296457818627164538593ed1473&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033790.jpg?k=f8de332106f256aae21e38cd4f06e3afa374c15269e969e36fcd403b28546cee&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033790.jpg?k=f8de332106f256aae21e38cd4f06e3afa374c15269e969e36fcd403b28546cee&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033791.jpg?k=5ede921edc14afbfb3d40bcb7c09e7a8ef409e5e3191f388b14a553f1135c658&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033791.jpg?k=5ede921edc14afbfb3d40bcb7c09e7a8ef409e5e3191f388b14a553f1135c658&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033781.jpg?k=383a15342d5bbc5a23cd86c23221e9d10e8f39fe2529078ed5bf1ef790b812a8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033781.jpg?k=383a15342d5bbc5a23cd86c23221e9d10e8f39fe2529078ed5bf1ef790b812a8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033794.jpg?k=124057a021dcfb078d33f4c3c44cefdbf040b7677397715164e0035cb5fdc721&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033794.jpg?k=124057a021dcfb078d33f4c3c44cefdbf040b7677397715164e0035cb5fdc721&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033786.jpg?k=aa010467625c60d2777be4dafcdd3451053ca23866a21c22f04fd1ea726f6ae1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033786.jpg?k=aa010467625c60d2777be4dafcdd3451053ca23866a21c22f04fd1ea726f6ae1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033804.jpg?k=640e9578e19b1e8d603866cd58058bac8bfe09571ea15052faf741e313508028&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033804.jpg?k=640e9578e19b1e8d603866cd58058bac8bfe09571ea15052faf741e313508028&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/465033784.jpg?k=4d5805f31181ec58405f1d34c9df07d1c30a242f35c1c7ef62808b677eb8eb3f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/465033784.jpg?k=4d5805f31181ec58405f1d34c9df07d1c30a242f35c1c7ef62808b677eb8eb3f&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 2,
			stars: 4,
			stars_type: "estimated_by_booking",
		},
		spoken_languages: ["en-gb"],
		themes: [8, 16, 20, 26, 42, 45, 57, 69, 70, 71, 72, 74, 82, 84, 113, 114],
		url: "https://www.booking.com/hotel/ph/stunning-1-bed-house-in-zamboanga.html?aid=1198318",
		price: "NA",
	},
	{
		id: 10629171,
		name: {
			"en-gb": "Airbnb Zamboanga",
		},
		accommodation_type: 222,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "17:00:00",
			checkout_from: "11:00:00",
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/10629171?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\nManaged by a private host\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Situated in Zamboanga, within 2.4 km of Fort Pilar, Airbnb Zamboanga offers accommodation with air conditioning. This property offers access to a terrace, free private parking and free WiFi. Guests can make use of a garden.\n\nThe homestay features a flat-screen TV. Towels and bed linen are available in the homestay. The accommodation is non-smoking.\n\nThe nearest airport is Zamboanga International Airport, 3 km from the homestay.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Don Alfaro Street",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.916279,
				longitude: 122.087129,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 1,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589818.jpg?k=4ab8d9f9d399916af7004cf8efdc23601415a9e8c5b27f4ecc72d0570ac5c609&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589818.jpg?k=4ab8d9f9d399916af7004cf8efdc23601415a9e8c5b27f4ecc72d0570ac5c609&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589835.jpg?k=bc866591b8da44b64ebe787990423f55aa376ca99bc564797436449ef132dd7b&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589835.jpg?k=bc866591b8da44b64ebe787990423f55aa376ca99bc564797436449ef132dd7b&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589838.jpg?k=aca930f0f63d88adf52399c2954a7f6cb6cdf47c6e09a09f37769f8c0d6a1bf8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589838.jpg?k=aca930f0f63d88adf52399c2954a7f6cb6cdf47c6e09a09f37769f8c0d6a1bf8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589841.jpg?k=816af926bab7b95be625ada0380dd403787188a90c2397595241935afcca6f74&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589841.jpg?k=816af926bab7b95be625ada0380dd403787188a90c2397595241935afcca6f74&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589845.jpg?k=cbe5c5e644abea48ff1c840f3301e0c1f90a5df342ff8589bd4fba57bd9e654f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589845.jpg?k=cbe5c5e644abea48ff1c840f3301e0c1f90a5df342ff8589bd4fba57bd9e654f&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/485589848.jpg?k=02bb5bd127b0667e3b13c9420720240644fb7631182635d58903633c95962808&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/485589848.jpg?k=02bb5bd127b0667e3b13c9420720240644fb7631182635d58903633c95962808&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 0,
			preferred: false,
			review_score: null,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 16, 28, 45, 57, 69, 70, 71, 72, 74, 82, 84, 114],
		url: "https://www.booking.com/hotel/ph/airbnb-zamboanga.html?aid=1198318",
		price: "NA",
	},
	{
		id: 11019764,
		name: {
			"en-gb": "Azzura Hotel",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "12:00:00",
			checkin_to: "14:00:00",
			checkout_from: "12:00:00",
			checkout_to: "13:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11019764?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Located in Zamboanga, 4.9 km from Fort Pilar, Azzura Hotel provides accommodation with a garden, free private parking, a terrace and a restaurant. Among the facilities at this property are room service and a 24-hour front desk, along with free WiFi throughout the property. The hotel features family rooms.\n\nAt the hotel, the rooms are fitted with a desk. Complete with a private bathroom equipped with a bidet and free toiletries, all units at Azzura Hotel have a flat-screen TV and air conditioning, and selected rooms have a balcony. At the accommodation each room includes bed linen and towels.\n\nThe nearest airport is Zamboanga International Airport, 3 km from Azzura Hotel.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Sto. Niño Village",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.935593,
				longitude: 122.093358,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 4,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792303.jpg?k=7d7e9b2621bdbd8da55a44bcc46f2eab03343701c1421abe19e943d355d32bff&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792303.jpg?k=7d7e9b2621bdbd8da55a44bcc46f2eab03343701c1421abe19e943d355d32bff&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792376.jpg?k=dc18f0261184c20c9f8788d9c1be7b7437d3470c6d7cf9e4f5f087188c824b3f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792376.jpg?k=dc18f0261184c20c9f8788d9c1be7b7437d3470c6d7cf9e4f5f087188c824b3f&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792377.jpg?k=b06dea951c78207fd19c02a1192fe8c6308f028934a2066542604603b818953e&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792377.jpg?k=b06dea951c78207fd19c02a1192fe8c6308f028934a2066542604603b818953e&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792379.jpg?k=7d1046e488b2ad136c9b2842f41b6cc5721399ea18c6e758779199a72dbc07a1&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792379.jpg?k=7d1046e488b2ad136c9b2842f41b6cc5721399ea18c6e758779199a72dbc07a1&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792381.jpg?k=457b2238f8b37f6d0d9db93fae942c83fd099f44d05e22e547e25e01351ed3b7&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792381.jpg?k=457b2238f8b37f6d0d9db93fae942c83fd099f44d05e22e547e25e01351ed3b7&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792382.jpg?k=c8829d3b4dea621c6b6d78e3d0d99d955616bc20c844e66a6e7eb7c8db0edd8a&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792382.jpg?k=c8829d3b4dea621c6b6d78e3d0d99d955616bc20c844e66a6e7eb7c8db0edd8a&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792385.jpg?k=48423fead7bfbb987b1be42215872435176553ca1fafdff7a750f4f6648c72b3&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792385.jpg?k=48423fead7bfbb987b1be42215872435176553ca1fafdff7a750f4f6648c72b3&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792389.jpg?k=41967a39d1b5bcba09dfeb8aa5d2f9eeca3bef29d99a7bfe071a9a1c78d7fcf9&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792389.jpg?k=41967a39d1b5bcba09dfeb8aa5d2f9eeca3bef29d99a7bfe071a9a1c78d7fcf9&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/503792391.jpg?k=d3a889479f4c4224bcccbb761e4d26ed8aae046b0c6ab31ff00e944c7831d9d9&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/503792391.jpg?k=d3a889479f4c4224bcccbb761e4d26ed8aae046b0c6ab31ff00e944c7831d9d9&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 7,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 16, 45, 57, 69, 70, 71, 72, 82, 84],
		url: "https://www.booking.com/hotel/ph/azzura.html?aid=1198318",
		price: {
			id: 11019764,
			currency: "PHP",
			deep_link_url: "booking://hotel/11019764?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 1774.08,
				total: 1774.08,
			},
			url: "https://www.booking.com/hotel/ph/azzura.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 11037629,
		name: {
			"en-gb": "RB Modern Condos",
		},
		accommodation_type: 220,
		brands: [5343],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11037629?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\nGuests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Set in Zamboanga within 4.5 km of Fort Pilar, RB Modern Condos offers accommodation with free WiFi, seating area and a kitchen. There is a private entrance at the holiday home for the convenience of those who stay. The accommodation provides a 24-hour front desk and parking on-site.\n\nAll units come with air conditioning, a flat-screen TV with streaming services, a fridge, a kettle, a shower, free toiletries and a wardrobe. At the holiday home, the units have bed linen and towels.\n\nA car rental service is available at the holiday home.\n\nThe nearest airport is Zamboanga International Airport, 3 km from RB Modern Condos.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {},
			city: -2460321,
			coordinates: {
				latitude: 6.933687,
				longitude: 122.090312,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 5,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596869.jpg?k=42a705278be4f3eedf2fd32cf4a9e26e09cca769403fdbb2d724dc526c3a8615&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596869.jpg?k=42a705278be4f3eedf2fd32cf4a9e26e09cca769403fdbb2d724dc526c3a8615&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596927.jpg?k=97af2fd23a22b69017ed41de07f79c72a6f1219ec1dc9715ed0156f81ba81b3d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596927.jpg?k=97af2fd23a22b69017ed41de07f79c72a6f1219ec1dc9715ed0156f81ba81b3d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596908.jpg?k=80abc3deb311f8ad4211248022991491500c9cf2eb050b50b07f4c8ccaed7630&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596908.jpg?k=80abc3deb311f8ad4211248022991491500c9cf2eb050b50b07f4c8ccaed7630&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596862.jpg?k=6df282345cd53357dc09794ef52b91687479554fd7b61cb70b9af5709b5eb833&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596862.jpg?k=6df282345cd53357dc09794ef52b91687479554fd7b61cb70b9af5709b5eb833&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596742.jpg?k=9c106de886447098be6708d1332e7977a1dc85124c4ccfae19fbd8fb8aba66a0&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596742.jpg?k=9c106de886447098be6708d1332e7977a1dc85124c4ccfae19fbd8fb8aba66a0&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596866.jpg?k=6d30e6f96c02fd93a60f497b6eb0404cd6b3784775f9272e9c00dc200e99fa2a&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596866.jpg?k=6d30e6f96c02fd93a60f497b6eb0404cd6b3784775f9272e9c00dc200e99fa2a&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596812.jpg?k=c805ac880bd3df001f0b2a9e3724575172cda7708b602fe3adb490f50df991d2&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596812.jpg?k=c805ac880bd3df001f0b2a9e3724575172cda7708b602fe3adb490f50df991d2&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596877.jpg?k=6fd33f37484b0d65fbedaaece0552afee2bf9bf00fd257cb80f78e271d2e01af&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596877.jpg?k=6fd33f37484b0d65fbedaaece0552afee2bf9bf00fd257cb80f78e271d2e01af&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596830.jpg?k=0452802d1b9247ad8daa8ef2598389e6811234fd69114f4db2714b839f2645eb&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596830.jpg?k=0452802d1b9247ad8daa8ef2598389e6811234fd69114f4db2714b839f2645eb&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/504596897.jpg?k=183dce97bb568aafcf065e5a478f748e4a71ad711162612f41b1ee6be3b43198&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/504596897.jpg?k=183dce97bb568aafcf065e5a478f748e4a71ad711162612f41b1ee6be3b43198&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 3,
			stars: 3,
			stars_type: "estimated_by_booking",
		},
		spoken_languages: ["en-gb", "en-us"],
		themes: [8, 16, 20, 26, 42, 45, 69, 70, 71, 72, 82, 84, 113, 114],
		url: "https://www.booking.com/hotel/ph/stunning-2br-house-for-family-vacation.html?aid=1198318",
		price: {
			id: 11037629,
			currency: "PHP",
			deep_link_url: "booking://hotel/11037629?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 4023.56,
				total: 4023.56,
			},
			url: "https://www.booking.com/hotel/ph/stunning-2br-house-for-family-vacation.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 11051156,
		name: {
			"en-gb": "Arka's Elegant Condos",
		},
		accommodation_type: 201,
		brands: [5343],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: null,
			checkout_from: null,
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11051156?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb":
					"State ID or Driver’s License will be requested right after the reservation.This property will not accommodate hen, stag or similar parties.\nGuests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Located in Zamboanga, Mindanao region, Arka's Elegant Condos is set 4.6 km from Fort Pilar. There is a private entrance at the apartment for the convenience of those who stay. The property provides a 24-hour front desk and free WiFi is available throughout the property.\n\nThe units in the apartment complex are equipped with air conditioning, a seating area, a flat-screen TV with streaming services, a kitchen, a dining area and a private bathroom with free toiletries and a shower. A fridge, a stovetop and kitchenware are also provided, as well as a kettle. At the apartment complex, every unit includes bed linen and towels.\n\nThe nearest airport is Zamboanga International Airport, 3 km from the apartment.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {},
			city: -2460321,
			coordinates: {
				latitude: 6.934224,
				longitude: 122.091217,
			},
			country: "ph",
			districts: [],
			postal_code: "",
			regions: [1063],
		},
		number_of_rooms: 2,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189058.jpg?k=3a4632eafc470a76f960f6e3b4797a812621dedcb98e1c7931beaf3e5134793e&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189058.jpg?k=3a4632eafc470a76f960f6e3b4797a812621dedcb98e1c7931beaf3e5134793e&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189055.jpg?k=7c95af30dde757e4f98a293bbb57ccbd6e13f48bee069e2824704e22f6068642&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189055.jpg?k=7c95af30dde757e4f98a293bbb57ccbd6e13f48bee069e2824704e22f6068642&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189067.jpg?k=755a46bd68a3e61ad3c1d3ad785d907d4c5bcae0cd89ddb7940c5aad2f032e4d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189067.jpg?k=755a46bd68a3e61ad3c1d3ad785d907d4c5bcae0cd89ddb7940c5aad2f032e4d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189001.jpg?k=1281c9b5b707e92a2d34849923f6c8ca89e910f61c5df419fb21b9d0f6378cea&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189001.jpg?k=1281c9b5b707e92a2d34849923f6c8ca89e910f61c5df419fb21b9d0f6378cea&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189048.jpg?k=7ecde81630c4c3e06f6b3be27bff81a43b32831c174584da57f589c44c96ec8c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189048.jpg?k=7ecde81630c4c3e06f6b3be27bff81a43b32831c174584da57f589c44c96ec8c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189061.jpg?k=9b51433693469419f81857cc9c4cef8021273c72d4bbae074b968641f7e303e9&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189061.jpg?k=9b51433693469419f81857cc9c4cef8021273c72d4bbae074b968641f7e303e9&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189073.jpg?k=e5b62fed174ffce7e97a74d9d61fd51182e7cfcd5af4815e82fb011bf48184ee&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189073.jpg?k=e5b62fed174ffce7e97a74d9d61fd51182e7cfcd5af4815e82fb011bf48184ee&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189084.jpg?k=019605aaf085f90104497370b9d695eb3681f6e254b1e0388f2dea15c18e486c&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189084.jpg?k=019605aaf085f90104497370b9d695eb3681f6e254b1e0388f2dea15c18e486c&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189068.jpg?k=0b504157731e06d38bb9e1f29ac9923f34958613588a541dc75d5d51d678fbb5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189068.jpg?k=0b504157731e06d38bb9e1f29ac9923f34958613588a541dc75d5d51d678fbb5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505189078.jpg?k=973e422ecf5bf0004f2a36da5230bf2bd2be20195cd291fdad1488523da5363f&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505189078.jpg?k=973e422ecf5bf0004f2a36da5230bf2bd2be20195cd291fdad1488523da5363f&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 1,
			preferred: false,
			review_score: 8,
			stars: 3,
			stars_type: "estimated_by_booking",
		},
		spoken_languages: ["en-gb", "en-us"],
		themes: [1, 8, 16, 45, 69, 70, 71, 72, 82, 83, 84, 96, 114],
		url: "https://www.booking.com/hotel/ph/arkas-elegant-condos.html?aid=1198318",
		price: {
			id: 11051156,
			currency: "PHP",
			deep_link_url: "booking://hotel/11051156?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 3824.88,
				total: 3824.88,
			},
			url: "https://www.booking.com/hotel/ph/arkas-elegant-condos.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 11057634,
		name: {
			"en-gb": "Azzura Budget Rooms",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "15:00:00",
			checkout_from: "12:00:00",
			checkout_to: "13:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11057634?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Located in Zamboanga, 33 km from Fort Pilar, Azzura Budget Rooms provides accommodation with a garden, free private parking, a terrace and a restaurant. The hotel features family rooms.\n\nAt the hotel, rooms include a balcony. At Azzura Budget Rooms, every room comes with air conditioning and a private bathroom.\n\nThe nearest airport is Zamboanga International Airport, 32 km from the accommodation.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "barangay Bolong",
			},
			city: -2460321,
			coordinates: {
				latitude: 7.089817,
				longitude: 122.234026,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 3,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485204.jpg?k=aaa93a85014d21c3e6edd8f23fca5238290c00d9c6c8a560820c25d9d5ca0fea&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485204.jpg?k=aaa93a85014d21c3e6edd8f23fca5238290c00d9c6c8a560820c25d9d5ca0fea&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485212.jpg?k=26bdf7f44d9ef21075158a87313baffe5387c5dedffc81c9c2ff81681953a5bf&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485212.jpg?k=26bdf7f44d9ef21075158a87313baffe5387c5dedffc81c9c2ff81681953a5bf&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485213.jpg?k=01178c4915ee5162028e7af96b79838d7bc972b0e756b08839b3295314680a2d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485213.jpg?k=01178c4915ee5162028e7af96b79838d7bc972b0e756b08839b3295314680a2d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485214.jpg?k=7d1c5cc8af7ac3bc54a7d67b05a5952fd4c13d26077620f0808fe1f379969092&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485214.jpg?k=7d1c5cc8af7ac3bc54a7d67b05a5952fd4c13d26077620f0808fe1f379969092&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485211.jpg?k=7de8f5ef78e548fe2a90ad80ffdc4a528d69459de8ab023b11ff9c865d4239af&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485211.jpg?k=7de8f5ef78e548fe2a90ad80ffdc4a528d69459de8ab023b11ff9c865d4239af&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485215.jpg?k=d2b4d949e72317780c7d248a0bb2dfed8ca1e3a747f579988f3081e3af874c36&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485215.jpg?k=d2b4d949e72317780c7d248a0bb2dfed8ca1e3a747f579988f3081e3af874c36&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485750.jpg?k=b6ba7800be18f49796eabda63a60bb18e4dcdf2ed0e958874c30e6747e06e2f9&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485750.jpg?k=b6ba7800be18f49796eabda63a60bb18e4dcdf2ed0e958874c30e6747e06e2f9&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/505485841.jpg?k=c435462cdca028b873433207f87a13cce1b8f5071c980eab9aaa677cd4999f95&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/505485841.jpg?k=c435462cdca028b873433207f87a13cce1b8f5071c980eab9aaa677cd4999f95&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 0,
			preferred: false,
			review_score: null,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb", "tl"],
		themes: [8, 16, 45, 57, 69, 70, 71, 72, 82, 84, 89],
		url: "https://www.booking.com/hotel/ph/azzura-budget-rooms.html?aid=1198318",
		price: "NA",
	},
	{
		id: 11287438,
		name: {
			"en-gb": "S Apartelle",
		},
		accommodation_type: 201,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "15:00:00",
			checkin_to: "18:00:00",
			checkout_from: "08:00:00",
			checkout_to: "11:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11287438?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\nManaged by a private host\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"S Apartelle is set in Zamboanga. Offering complimentary private parking, the apartment is 4.8 km from Fort Pilar.\n\nThe apartment is composed of 1 bedroom, a fully equipped kitchen, and 1 bathroom. A flat-screen TV is featured. The property offers garden views.\n\nThe nearest airport is Zamboanga International Airport, 3 km from S Apartelle.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Putik Road",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.939566,
				longitude: 122.084989,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 1,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/516055192.jpg?k=e94cfae3ac69b8d9b794d7eb8d5c6217f4a7475a1cdca00bce58710429ce091a&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/516055192.jpg?k=e94cfae3ac69b8d9b794d7eb8d5c6217f4a7475a1cdca00bce58710429ce091a&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/516055246.jpg?k=5d0727e75c6649795b7709a3a57fb069f803d7653475b6657dedbb63993dbd73&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/516055246.jpg?k=5d0727e75c6649795b7709a3a57fb069f803d7653475b6657dedbb63993dbd73&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/516055249.jpg?k=91665421240e7caf9f73c468d59890e46e276e19adde44d86575ad4023230062&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/516055249.jpg?k=91665421240e7caf9f73c468d59890e46e276e19adde44d86575ad4023230062&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/516055250.jpg?k=0faa6d32803b454fc3155c425706ec747a896e4907aa04f83a911de582c173b0&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/516055250.jpg?k=0faa6d32803b454fc3155c425706ec747a896e4907aa04f83a911de582c173b0&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/516055252.jpg?k=629c4253be5faf38a381c609a463ea3479541576da85cd955ee90664ea6f46e4&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/516055252.jpg?k=629c4253be5faf38a381c609a463ea3479541576da85cd955ee90664ea6f46e4&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 0,
			preferred: false,
			review_score: null,
			stars: null,
			stars_type: null,
		},
		spoken_languages: ["en-gb"],
		themes: [1, 8, 16, 45, 69, 70, 71, 72, 82, 83, 84, 114],
		url: "https://www.booking.com/hotel/ph/s-apartelle.html?aid=1198318",
		price: {
			id: 11287438,
			currency: "PHP",
			deep_link_url: "booking://hotel/11287438?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 16800,
				total: 16800,
			},
			url: "https://www.booking.com/hotel/ph/s-apartelle.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
	{
		id: 11354582,
		name: {
			"en-gb": "Hotel Anita",
		},
		accommodation_type: 204,
		brands: [],
		checkin_checkout_times: {
			checkin_from: "14:00:00",
			checkin_to: "14:00:00",
			checkout_from: "12:00:00",
			checkout_to: "12:00:00",
		},
		currency: "PHP",
		deep_link_url: "booking://hotel/11354582?affiliate_id=1198318",
		description: {
			important_information: {
				"en-gb": "This property will not accommodate hen, stag or similar parties.\n",
			},
			license_numbers: [],
			text: {
				"en-gb":
					"Hotel Anita is set in Zamboanga. With free WiFi, this 5-star hotel offers room service and a 24-hour front desk. The property is non-smoking and is located 1.7 km from Fort Pilar.\n\nThe hotel provides certain units that include a safety deposit box, and every room comes with a private bathroom with a bidet and slippers. At Hotel Anita, every room is equipped with air conditioning and a flat-screen TV.\n\nThe accommodation offers an à la carte or American breakfast.\n\nThe nearest airport is Zamboanga International Airport, 2 km from Hotel Anita.",
			},
		},
		is_work_friendly: false,
		location: {
			address: {
				"en-gb": "Joseling Bucoy Drive",
			},
			city: -2460321,
			coordinates: {
				latitude: 6.914791,
				longitude: 122.079409,
			},
			country: "ph",
			districts: [],
			postal_code: "7000",
			regions: [1063],
		},
		number_of_rooms: 5,
		photos: [
			{
				main_photo: true,
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/519086133.jpg?k=59a7028c0f890a7ba1e4fc78af63dd24aa0e1d4741c2e7579d8409ab33f5b1f5&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/519086133.jpg?k=59a7028c0f890a7ba1e4fc78af63dd24aa0e1d4741c2e7579d8409ab33f5b1f5&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/519086134.jpg?k=2350e53d2aa56ab65d1cb15e75d361e742cdee64ff4be5a8f63af7fd4a10d31d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/519086134.jpg?k=2350e53d2aa56ab65d1cb15e75d361e742cdee64ff4be5a8f63af7fd4a10d31d&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/519086136.jpg?k=58162e6a71c757687f4b8b49cbdb186323685ccdfb8ff1c21ca1f432c3584dd8&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/519086136.jpg?k=58162e6a71c757687f4b8b49cbdb186323685ccdfb8ff1c21ca1f432c3584dd8&o=",
				},
			},
			{
				url: {
					standard: "https://q-xx.bstatic.com/xdata/images/hotel/max500/519086138.jpg?k=c1dcf7221f9edde85c6bff4be12b180a565340c321d6fb5cb5e74d409a78d61d&o=",
					thumbnail: "https://q-xx.bstatic.com/xdata/images/hotel/100x100/519086138.jpg?k=c1dcf7221f9edde85c6bff4be12b180a565340c321d6fb5cb5e74d409a78d61d&o=",
				},
			},
		],
		price_category: "",
		programmes: {
			travel_proud: false,
		},
		rating: {
			number_of_reviews: 0,
			preferred: false,
			review_score: null,
			stars: 5,
			stars_type: "estimated_by_accommodation",
		},
		spoken_languages: ["en-gb", "tl", "en-us"],
		themes: [6, 8, 16, 45, 57, 58, 69, 70, 71, 72, 84, 108, 110],
		url: "https://www.booking.com/hotel/ph/anita.html?aid=1198318",
		price: {
			id: 11354582,
			currency: "PHP",
			deep_link_url: "booking://hotel/11354582?affiliate_id=1198318&checkin=2024-02-05&checkout=2024-02-06",
			price: {
				book: 2240,
				total: 2240,
			},
			url: "https://www.booking.com/hotel/ph/anita.html?aid=1198318&checkin=2024-02-05&checkout=2024-02-06&no_rooms=1&group_adults=2",
		},
	},
]

// const _fakeSearchAPI = (ids: number[]) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log(`_fakeSearchAPI ${ids}`)
// 			resolve(ids)
// 		}, 5000) // 1000 milliseconds = 1 second
// 	})
// }

const _chunkArray = (array: any[], chunkSize: number) => {
	const chunks = []
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize))
	}
	return chunks
}

const _fetchHotelPrices = async (hotels: number[]) => {
	const splitArray = _chunkArray(hotels, 2) //search endpoint only allow 100 hotels per search
	console.log(`There will be ${splitArray.length} requests.`)
	const promises = splitArray.map((array) => {
		const requestBody = {
			booker: {
				country: "nl",
				platform: "desktop",
			},
			checkin: "2024-02-05",
			checkout: "2024-02-06",
			accommodations: array,
			guests: {
				number_of_adults: 2,
				number_of_rooms: 1,
			},
		}
		return apiCall("/accommodations/search", requestBody)
	})

	const allHotelPrices = await Promise.all(promises)
	const flattenedArray = ([] as object[]).concat(...allHotelPrices)
	return flattenedArray
}

const _combinePricesAndDetails = (details: object[], prices: object[]) => {
	const detailsAndPrices = details.map((detail: object) => {
		let tempDetail = { ...detail }
		// look this current ID in the prices object
		let currentPrice = prices.filter((price: object) => {
			return price["id" as keyof typeof price] === detail["id" as keyof typeof price]
		})
		tempDetail = { ...tempDetail, price: currentPrice.length === 1 ? currentPrice[0] : "NA" }

		return tempDetail
	})

	return detailsAndPrices
}

export async function GET(request: Request, params: any) {
	const { city, price } = params.params
	// const body = {
	// 	city: Number(city),
	// 	extras: ["description", "photos"],
	// }
	// const hotelDetails = await apiCall("/accommodations/details", body)

	// const hotelDetailsIDs = hotelDetails.map((x) => x.id)
	// const hotelPrices = await _fetchHotelPrices(hotelDetailsIDs)

	// const hotelsDetailsAndPrice = await _combinePricesAndDetails(hotelDetails, hotelPrices)
	// return NextResponse.json(hotelsDetailsAndPrice)

	return NextResponse.json(tempHotelsDetailsAndPrices)
}
