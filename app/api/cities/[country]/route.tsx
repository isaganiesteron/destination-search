import apiCall from "@/utils/apiCall"
import { NextResponse } from "next/server"

const tempPhCities = [
	{
		id: -2460381,
		name: {
			"en-gb": "Ziminila",
		},
	},
	{
		id: -2460330,
		name: {
			"en-gb": "Zamboanguita",
		},
	},
	{
		id: -2460321,
		name: {
			"en-gb": "Zamboanga",
		},
	},
	{
		id: -2460315,
		name: {
			"en-gb": "Zabali",
		},
	},
	{
		id: -2460306,
		name: {
			"en-gb": "Yumbing",
		},
	},
	{
		id: -2460297,
		name: {
			"en-gb": "Ytaya",
		},
	},
	{
		id: -2460281,
		name: {
			"en-gb": "Ynampalogan",
		},
	},
	{
		id: -2460261,
		name: {
			"en-gb": "Ybabao",
		},
	},
	{
		id: -2460243,
		name: {
			"en-gb": "Yati",
		},
	},
	{
		id: -2460176,
		name: {
			"en-gb": "Wilson",
		},
	},
	{
		id: -2460101,
		name: {
			"en-gb": "Wawa",
		},
	},
	{
		id: -2460012,
		name: {
			"en-gb": "Wack-wack",
		},
	},
	{
		id: -2460000,
		name: {
			"en-gb": "Volcan",
		},
	},
	{
		id: -2459979,
		name: {
			"en-gb": "Vito",
		},
	},
	{
		id: -2459945,
		name: {
			"en-gb": "Virac",
		},
	},
	{
		id: -2459901,
		name: {
			"en-gb": "Villasis",
		},
	},
	{
		id: -2459857,
		name: {
			"en-gb": "Villalimpia",
		},
	},
	{
		id: -2459801,
		name: {
			"en-gb": "Villaba",
		},
	},
	{
		id: -2459765,
		name: {
			"en-gb": "Vigan",
		},
	},
	{
		id: -2459728,
		name: {
			"en-gb": "Victoria",
		},
	},
	{
		id: -2459727,
		name: {
			"en-gb": "Victoria",
		},
	},
	{
		id: -2459632,
		name: {
			"en-gb": "Valencia",
		},
	},
	{
		id: -2459630,
		name: {
			"en-gb": "Valencia",
		},
	},
	{
		id: -2459629,
		name: {
			"en-gb": "Valencia",
		},
	},
	{
		id: -2459628,
		name: {
			"en-gb": "Valencia",
		},
	},
	{
		id: -2459610,
		name: {
			"en-gb": "Uyong",
		},
	},
	{
		id: -2459597,
		name: {
			"en-gb": "Utod",
		},
	},
	{
		id: -2459545,
		name: {
			"en-gb": "Urdaneta",
		},
	},
	{
		id: -2459522,
		name: {
			"en-gb": "Upper Digos",
		},
	},
	{
		id: -2459501,
		name: {
			"en-gb": "Upa",
		},
	},
	{
		id: -2459480,
		name: {
			"en-gb": "Union",
		},
	},
	{
		id: -2459475,
		name: {
			"en-gb": "Union",
		},
	},
	{
		id: -2459474,
		name: {
			"en-gb": "Union",
		},
	},
	{
		id: -2459365,
		name: {
			"en-gb": "Uldugan",
		},
	},
	{
		id: -2459363,
		name: {
			"en-gb": "Ulbojan",
		},
	},
	{
		id: -2459355,
		name: {
			"en-gb": "Ulat Segundo",
		},
	},
	{
		id: -2459354,
		name: {
			"en-gb": "Ulat Primero",
		},
	},
	{
		id: -2459348,
		name: {
			"en-gb": "Ulañgo",
		},
	},
	{
		id: -2459335,
		name: {
			"en-gb": "Uia",
		},
	},
	{
		id: -2459306,
		name: {
			"en-gb": "Upli",
		},
	},
	{
		id: -2459286,
		name: {
			"en-gb": "Ubujan",
		},
	},
	{
		id: -2459280,
		name: {
			"en-gb": "Ubojan",
		},
	},
	{
		id: -2459263,
		name: {
			"en-gb": "Ubay",
		},
	},
	{
		id: -2459183,
		name: {
			"en-gb": "Tuy",
		},
	},
	{
		id: -2459092,
		name: {
			"en-gb": "Tunkong Manga",
		},
	},
	{
		id: -2459070,
		name: {
			"en-gb": "Tunghaan",
		},
	},
	{
		id: -2459040,
		name: {
			"en-gb": "Tunga",
		},
	},
	{
		id: -2458983,
		name: {
			"en-gb": "Tumauini",
		},
	},
	{
		id: -2458973,
		name: {
			"en-gb": "Tumarbong",
		},
	},
	{
		id: -2458870,
		name: {
			"en-gb": "Tulariquin",
		},
	},
	{
		id: -2458804,
		name: {
			"en-gb": "Tuguegarao City",
		},
	},
	{
		id: -2458774,
		name: {
			"en-gb": "Tugbongan",
		},
	},
	{
		id: -2458713,
		name: {
			"en-gb": "Tuding",
		},
	},
	{
		id: -2458674,
		name: {
			"en-gb": "Tuburan",
		},
	},
	{
		id: -2458660,
		name: {
			"en-gb": "Tuburan",
		},
	},
	{
		id: -2458628,
		name: {
			"en-gb": "Tubtuban",
		},
	},
	{
		id: -2458587,
		name: {
			"en-gb": "Tubod",
		},
	},
	{
		id: -2458568,
		name: {
			"en-gb": "Tuble",
		},
	},
	{
		id: -2458552,
		name: {
			"en-gb": "Tubigon",
		},
	},
	{
		id: -2458461,
		name: {
			"en-gb": "Tuba",
		},
	},
	{
		id: -2458438,
		name: {
			"en-gb": "Trozo",
		},
	},
	{
		id: -2458394,
		name: {
			"en-gb": "Trece Martires",
		},
	},
	{
		id: -2458355,
		name: {
			"en-gb": "Totolan",
		},
	},
	{
		id: -2458213,
		name: {
			"en-gb": "Tomonoy",
		},
	},
	{
		id: -2458129,
		name: {
			"en-gb": "Toledo",
		},
	},
	{
		id: -2458087,
		name: {
			"en-gb": "Tocdoc",
		},
	},
	{
		id: -2458055,
		name: {
			"en-gb": "Tiwi",
		},
	},
	{
		id: -2458052,
		name: {
			"en-gb": "Tiwi",
		},
	},
	{
		id: -2458018,
		name: {
			"en-gb": "Tiptip",
		},
	},
	{
		id: -2457953,
		name: {
			"en-gb": "Tinubdan",
		},
	},
	{
		id: -2457922,
		name: {
			"en-gb": "Tinitian",
		},
	},
	{
		id: -2457911,
		name: {
			"en-gb": "Tiniguiban",
		},
	},
	{
		id: -2457910,
		name: {
			"en-gb": "Tiniguiban",
		},
	},
	{
		id: -2457888,
		name: {
			"en-gb": "Tingo",
		},
	},
	{
		id: -2457887,
		name: {
			"en-gb": "Tingloy",
		},
	},
	{
		id: -2457774,
		name: {
			"en-gb": "Tinajero",
		},
	},
	{
		id: -2457742,
		name: {
			"en-gb": "Tinago",
		},
	},
	{
		id: -2457702,
		name: {
			"en-gb": "Tina-an",
		},
	},
	{
		id: -2457669,
		name: {
			"en-gb": "Timbaon",
		},
	},
	{
		id: -2457668,
		name: {
			"en-gb": "Timbao",
		},
	},
	{
		id: -2457626,
		name: {
			"en-gb": "Tilhaong",
		},
	},
	{
		id: -2457609,
		name: {
			"en-gb": "Tikay",
		},
	},
	{
		id: -2457587,
		name: {
			"en-gb": "Tigumon",
		},
	},
	{
		id: -2457556,
		name: {
			"en-gb": "Tigpan",
		},
	},
	{
		id: -2457457,
		name: {
			"en-gb": "Tigbao",
		},
	},
	{
		id: -2457428,
		name: {
			"en-gb": "Tigaon",
		},
	},
	{
		id: -2457323,
		name: {
			"en-gb": "Tibiao",
		},
	},
	{
		id: -2457285,
		name: {
			"en-gb": "Tiaong",
		},
	},
	{
		id: -2457255,
		name: {
			"en-gb": "Ternate",
		},
	},
	{
		id: -2457249,
		name: {
			"en-gb": "Teresa",
		},
	},
	{
		id: -2457190,
		name: {
			"en-gb": "Telabastagan",
		},
	},
	{
		id: -2457129,
		name: {
			"en-gb": "Taytay",
		},
	},
	{
		id: -2457121,
		name: {
			"en-gb": "Taytay",
		},
	},
	{
		id: -2457114,
		name: {
			"en-gb": "Taytay",
		},
	},
	{
		id: -2457067,
		name: {
			"en-gb": "Tayabas",
		},
	},
	{
		id: -2456992,
		name: {
			"en-gb": "Tawala",
		},
	},
	{
		id: -2456925,
		name: {
			"en-gb": "Tarong",
		},
	},
	{
		id: -2456911,
		name: {
			"en-gb": "Tarlac",
		},
	},
	{
		id: -2456908,
		name: {
			"en-gb": "Tariwara",
		},
	},
	{
		id: -2456799,
		name: {
			"en-gb": "Taplan",
		},
	},
	{
		id: -2456762,
		name: {
			"en-gb": "Tapaz",
		},
	},
	{
		id: -2456732,
		name: {
			"en-gb": "Taontaon",
		},
	},
	{
		id: -2456708,
		name: {
			"en-gb": "Tanza",
		},
	},
	{
		id: -2456665,
		name: {
			"en-gb": "Tangke",
		},
	},
	{
		id: -2456608,
		name: {
			"en-gb": "Tangub",
		},
	},
	{
		id: -2456606,
		name: {
			"en-gb": "Tangub",
		},
	},
	{
		id: -2456601,
		name: {
			"en-gb": "Tangos",
		},
	},
	{
		id: -2456582,
		name: {
			"en-gb": "Tañgo",
		},
	},
	{
		id: -2456581,
		name: {
			"en-gb": "Tangnanan",
		},
	},
	{
		id: -2456577,
		name: {
			"en-gb": "Tangnan",
		},
	},
	{
		id: -2456508,
		name: {
			"en-gb": "Tangaro",
		},
	},
	{
		id: -2456495,
		name: {
			"en-gb": "Tangalan",
		},
	},
	{
		id: -2456430,
		name: {
			"en-gb": "Tandayak",
		},
	},
	{
		id: -2456403,
		name: {
			"en-gb": "Tanay",
		},
	},
	{
		id: -2456389,
		name: {
			"en-gb": "Tanawan",
		},
	},
	{
		id: -2456382,
		name: {
			"en-gb": "Tanauan",
		},
	},
	{
		id: -2456380,
		name: {
			"en-gb": "Tanauan",
		},
	},
	{
		id: -2456348,
		name: {
			"en-gb": "Tanabag",
		},
	},
	{
		id: -2456306,
		name: {
			"en-gb": "Tampi",
		},
	},
	{
		id: -2456263,
		name: {
			"en-gb": "Tamlong",
		},
	},
	{
		id: -2456257,
		name: {
			"en-gb": "Tamlang",
		},
	},
	{
		id: -2456182,
		name: {
			"en-gb": "Tambongon",
		},
	},
	{
		id: -2456168,
		name: {
			"en-gb": "Tambojangin",
		},
	},
	{
		id: -2456156,
		name: {
			"en-gb": "Tambobong",
		},
	},
	{
		id: -2456150,
		name: {
			"en-gb": "Tambo",
		},
	},
	{
		id: -2456146,
		name: {
			"en-gb": "Tambo",
		},
	},
	{
		id: -2456027,
		name: {
			"en-gb": "Tamadang",
		},
	},
	{
		id: -2456015,
		name: {
			"en-gb": "Talusan",
		},
	},
	{
		id: -2455969,
		name: {
			"en-gb": "Taloto",
		},
	},
	{
		id: -2455913,
		name: {
			"en-gb": "Taloc",
		},
	},
	{
		id: -2455853,
		name: {
			"en-gb": "Talisay",
		},
	},
	{
		id: -2455836,
		name: {
			"en-gb": "Talisay",
		},
	},
	{
		id: -2455832,
		name: {
			"en-gb": "Talisay",
		},
	},
	{
		id: -2455830,
		name: {
			"en-gb": "Talisay",
		},
	},
	{
		id: -2455828,
		name: {
			"en-gb": "Talisay",
		},
	},
	{
		id: -2455802,
		name: {
			"en-gb": "Talipan",
		},
	},
	{
		id: -2455761,
		name: {
			"en-gb": "Talictic",
		},
	},
	{
		id: -2455752,
		name: {
			"en-gb": "Talibon",
		},
	},
	{
		id: -2455730,
		name: {
			"en-gb": "Taleb",
		},
	},
	{
		id: -2455703,
		name: {
			"en-gb": "Talay",
		},
	},
	{
		id: -2455638,
		name: {
			"en-gb": "Talamban",
		},
	},
	{
		id: -2455477,
		name: {
			"en-gb": "Tahiran",
		},
	},
	{
		id: -2455442,
		name: {
			"en-gb": "Tagum",
		},
	},
	{
		id: -2455423,
		name: {
			"en-gb": "Taguite",
		},
	},
	{
		id: -2455402,
		name: {
			"en-gb": "Taguig",
		},
	},
	{
		id: -2455390,
		name: {
			"en-gb": "Tagudin",
		},
	},
	{
		id: -2455308,
		name: {
			"en-gb": "Tagnasancan",
		},
	},
	{
		id: -2455287,
		name: {
			"en-gb": "Tagkawayan",
		},
	},
	{
		id: -2455278,
		name: {
			"en-gb": "Tagisa",
		},
	},
	{
		id: -2455270,
		name: {
			"en-gb": "Tagibo",
		},
	},
	{
		id: -2455258,
		name: {
			"en-gb": "Tagdo",
		},
	},
	{
		id: -2455247,
		name: {
			"en-gb": "Tagburos",
		},
	},
	{
		id: -2455238,
		name: {
			"en-gb": "Tagbuane",
		},
	},
	{
		id: -2455218,
		name: {
			"en-gb": "Tagbina",
		},
	},
	{
		id: -2455212,
		name: {
			"en-gb": "Tagbilaran City",
		},
	},
	{
		id: -2455160,
		name: {
			"en-gb": "Tagbabolo",
		},
	},
	{
		id: -2455156,
		name: {
			"en-gb": "Tagaytay",
		},
	},
	{
		id: -2455126,
		name: {
			"en-gb": "Tagapul-an",
		},
	},
	{
		id: -2455115,
		name: {
			"en-gb": "Taganito",
		},
	},
	{
		id: -2455038,
		name: {
			"en-gb": "Tarlac",
		},
	},
	{
		id: -2455027,
		name: {
			"en-gb": "Tacurong",
		},
	},
	{
		id: -2455020,
		name: {
			"en-gb": "Taculing Hacienda",
		},
	},
	{
		id: -2455011,
		name: {
			"en-gb": "Tacondo",
		},
	},
	{
		id: -2454996,
		name: {
			"en-gb": "Tacloban",
		},
	},
	{
		id: -2454988,
		name: {
			"en-gb": "Tackulas",
		},
	},
	{
		id: -2454941,
		name: {
			"en-gb": "Tabunok",
		},
	},
	{
		id: -2454940,
		name: {
			"en-gb": "Tabunok",
		},
	},
	{
		id: -2454939,
		name: {
			"en-gb": "Tabunok",
		},
	},
	{
		id: -2454885,
		name: {
			"en-gb": "Tabuelan",
		},
	},
	{
		id: -2454816,
		name: {
			"en-gb": "Tabunan",
		},
	},
	{
		id: -2454796,
		name: {
			"en-gb": "Tabok",
		},
	},
	{
		id: -2454791,
		name: {
			"en-gb": "Tabogon",
		},
	},
	{
		id: -2454736,
		name: {
			"en-gb": "Tabla",
		},
	},
	{
		id: -2454735,
		name: {
			"en-gb": "Tabla",
		},
	},
	{
		id: -2454710,
		name: {
			"en-gb": "Tabiguian",
		},
	},
	{
		id: -2454639,
		name: {
			"en-gb": "Tabao",
		},
	},
	{
		id: -2454601,
		name: {
			"en-gb": "Tabalong",
		},
	},
	{
		id: -2454586,
		name: {
			"en-gb": "Tabaco",
		},
	},
	{
		id: -2454557,
		name: {
			"en-gb": "Taal",
		},
	},
	{
		id: -2454485,
		name: {
			"en-gb": "Surigao",
		},
	},
	{
		id: -2454473,
		name: {
			"en-gb": "Surallah",
		},
	},
	{
		id: -2454451,
		name: {
			"en-gb": "Supa",
		},
	},
	{
		id: -2454389,
		name: {
			"en-gb": "Sumbiling",
		},
	},
	{
		id: -2454364,
		name: {
			"en-gb": "Sumaguil",
		},
	},
	{
		id: -2454323,
		name: {
			"en-gb": "Sultan Kudarat",
		},
	},
	{
		id: -2454176,
		name: {
			"en-gb": "Sudtungan",
		},
	},
	{
		id: -2454168,
		name: {
			"en-gb": "Sudipen",
		},
	},
	{
		id: -2454123,
		name: {
			"en-gb": "Subic",
		},
	},
	{
		id: -2454100,
		name: {
			"en-gb": "Subandaku",
		},
	},
	{
		id: -2454081,
		name: {
			"en-gb": "Suba",
		},
	},
	{
		id: -2454064,
		name: {
			"en-gb": "Sual",
		},
	},
	{
		id: -2453998,
		name: {
			"en-gb": "South Tambo",
		},
	},
	{
		id: -2453940,
		name: {
			"en-gb": "Sorsogon",
		},
	},
	{
		id: -2453895,
		name: {
			"en-gb": "Sunacolan",
		},
	},
	{
		id: -2453886,
		name: {
			"en-gb": "Somosomo",
		},
	},
	{
		id: -2453878,
		name: {
			"en-gb": "Somilihon",
		},
	},
	{
		id: -2453820,
		name: {
			"en-gb": "Solano",
		},
	},
	{
		id: -2453818,
		name: {
			"en-gb": "Solangon",
		},
	},
	{
		id: -2453771,
		name: {
			"en-gb": "Sogod",
		},
	},
	{
		id: -2453769,
		name: {
			"en-gb": "Sogod",
		},
	},
	{
		id: -2453758,
		name: {
			"en-gb": "Socorro",
		},
	},
	{
		id: -2453756,
		name: {
			"en-gb": "Socorro",
		},
	},
	{
		id: -2453705,
		name: {
			"en-gb": "Siuk",
		},
	},
	{
		id: -2453686,
		name: {
			"en-gb": "Sison",
		},
	},
	{
		id: -2453627,
		name: {
			"en-gb": "Siquijor",
		},
	},
	{
		id: -2453615,
		name: {
			"en-gb": "Sipocot",
		},
	},
	{
		id: -2453599,
		name: {
			"en-gb": "Sipating",
		},
	},
	{
		id: -2453589,
		name: {
			"en-gb": "Sipalay",
		},
	},
	{
		id: -2453454,
		name: {
			"en-gb": "Sindangan",
		},
	},
	{
		id: -2453384,
		name: {
			"en-gb": "Sinalhan",
		},
	},
	{
		id: -2453339,
		name: {
			"en-gb": "Sinabacan",
		},
	},
	{
		id: -2453337,
		name: {
			"en-gb": "Sinabaan",
		},
	},
	{
		id: -2453263,
		name: {
			"en-gb": "Simala",
		},
	},
	{
		id: -2453214,
		name: {
			"en-gb": "Silipon",
		},
	},
	{
		id: -2453191,
		name: {
			"en-gb": "Sili",
		},
	},
	{
		id: -2453183,
		name: {
			"en-gb": "Silay",
		},
	},
	{
		id: -2453158,
		name: {
			"en-gb": "Silañgan Talaoñgan",
		},
	},
	{
		id: -2453137,
		name: {
			"en-gb": "Silang",
		},
	},
	{
		id: -2453069,
		name: {
			"en-gb": "Sigma",
		},
	},
	{
		id: -2453056,
		name: {
			"en-gb": "Sigayan",
		},
	},
	{
		id: -2453023,
		name: {
			"en-gb": "Sidiran",
		},
	},
	{
		id: -2452982,
		name: {
			"en-gb": "Sibuyan Island",
		},
	},
	{
		id: -2452973,
		name: {
			"en-gb": "Sibutu",
		},
	},
	{
		id: -2452955,
		name: {
			"en-gb": "Sibulan",
		},
	},
	{
		id: -2452906,
		name: {
			"en-gb": "Sibonga",
		},
	},
	{
		id: -2452867,
		name: {
			"en-gb": "Sibaltan",
		},
	},
	{
		id: -2452863,
		name: {
			"en-gb": "Sibalom",
		},
	},
	{
		id: -2452813,
		name: {
			"en-gb": "Siaton",
		},
	},
	{
		id: -2452639,
		name: {
			"en-gb": "Sebaste",
		},
	},
	{
		id: -2452603,
		name: {
			"en-gb": "Sayak",
		},
	},
	{
		id: -2452591,
		name: {
			"en-gb": "Sawat",
		},
	},
	{
		id: -2452580,
		name: {
			"en-gb": "Sawang",
		},
	},
	{
		id: -2452536,
		name: {
			"en-gb": "Sasabayou",
		},
	},
	{
		id: -2452523,
		name: {
			"en-gb": "Sarog",
		},
	},
	{
		id: -2452512,
		name: {
			"en-gb": "Sariaya",
		},
	},
	{
		id: -2452505,
		name: {
			"en-gb": "Saravia",
		},
	},
	{
		id: -2452480,
		name: {
			"en-gb": "Sara",
		},
	},
	{
		id: -2452407,
		name: {
			"en-gb": "Sapang Palay",
		},
	},
	{
		id: -2452368,
		name: {
			"en-gb": "Sapang",
		},
	},
	{
		id: -2452313,
		name: {
			"en-gb": "San Vincente",
		},
	},
	{
		id: -2452292,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452288,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452266,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452251,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452246,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452238,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452200,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452196,
		name: {
			"en-gb": "San Vicente",
		},
	},
	{
		id: -2452140,
		name: {
			"en-gb": "Santo Tomas",
		},
	},
	{
		id: -2452109,
		name: {
			"en-gb": "Santo Rosario",
		},
	},
	{
		id: -2452038,
		name: {
			"en-gb": "Santo Niño",
		},
	},
	{
		id: -2451987,
		name: {
			"en-gb": "Santol",
		},
	},
	{
		id: -2451961,
		name: {
			"en-gb": "Santo Domingo",
		},
	},
	{
		id: -2451951,
		name: {
			"en-gb": "Santo Domingo",
		},
	},
	{
		id: -2451943,
		name: {
			"en-gb": "Santo Domingo",
		},
	},
	{
		id: -2451930,
		name: {
			"en-gb": "Santo Domingo",
		},
	},
	{
		id: -2451907,
		name: {
			"en-gb": "Santo Cristo",
		},
	},
	{
		id: -2451901,
		name: {
			"en-gb": "Santo Angel Norte",
		},
	},
	{
		id: -2451892,
		name: {
			"en-gb": "Santisima Trinidad",
		},
	},
	{
		id: -2451873,
		name: {
			"en-gb": "Santiago",
		},
	},
	{
		id: -2451872,
		name: {
			"en-gb": "Santiago City",
		},
	},
	{
		id: -2451846,
		name: {
			"en-gb": "Santiago",
		},
	},
	{
		id: -2451844,
		name: {
			"en-gb": "Santiago",
		},
	},
	{
		id: -2451785,
		name: {
			"en-gb": "Santa Rosa",
		},
	},
	{
		id: -2451782,
		name: {
			"en-gb": "Santa Rosa",
		},
	},
	{
		id: -2451779,
		name: {
			"en-gb": "Santa Rosa",
		},
	},
	{
		id: -2451737,
		name: {
			"en-gb": "Santa Rita",
		},
	},
	{
		id: -2451733,
		name: {
			"en-gb": "Santa Rita",
		},
	},
	{
		id: -2451708,
		name: {
			"en-gb": "Santander",
		},
	},
	{
		id: -2451686,
		name: {
			"en-gb": "Santa Monica",
		},
	},
	{
		id: -2451680,
		name: {
			"en-gb": "Santa Monica",
		},
	},
	{
		id: -2451678,
		name: {
			"en-gb": "Santa Monica",
		},
	},
	{
		id: -2451656,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451655,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451634,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451630,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451624,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451614,
		name: {
			"en-gb": "Santa Maria",
		},
	},
	{
		id: -2451588,
		name: {
			"en-gb": "Santa Lucia",
		},
	},
	{
		id: -2451554,
		name: {
			"en-gb": "Santa Juliana",
		},
	},
	{
		id: -2451516,
		name: {
			"en-gb": "Santa Filomena",
		},
	},
	{
		id: -2451508,
		name: {
			"en-gb": "Santa Fe",
		},
	},
	{
		id: -2451503,
		name: {
			"en-gb": "Santa Fe",
		},
	},
	{
		id: -2451501,
		name: {
			"en-gb": "Santa Fe",
		},
	},
	{
		id: -2451440,
		name: {
			"en-gb": "Santa Cruz",
		},
	},
	{
		id: -2451419,
		name: {
			"en-gb": "Santa Cruz",
		},
	},
	{
		id: -2451374,
		name: {
			"en-gb": "Santa Cruz",
		},
	},
	{
		id: -2451352,
		name: {
			"en-gb": "Santa Cruz",
		},
	},
	{
		id: -2451324,
		name: {
			"en-gb": "Santa Catalina Hacienda",
		},
	},
	{
		id: -2451320,
		name: {
			"en-gb": "Santa Catalina",
		},
	},
	{
		id: -2451299,
		name: {
			"en-gb": "Santa Barbara",
		},
	},
	{
		id: -2451289,
		name: {
			"en-gb": "Santa Barbara",
		},
	},
	{
		id: -2451278,
		name: {
			"en-gb": "Santa Ana",
		},
	},
	{
		id: -2451273,
		name: {
			"en-gb": "Santa Ana",
		},
	},
	{
		id: -2451255,
		name: {
			"en-gb": "Santa Ana",
		},
	},
	{
		id: -2451246,
		name: {
			"en-gb": "San Simon",
		},
	},
	{
		id: -2451245,
		name: {
			"en-gb": "San Simon",
		},
	},
	{
		id: -2451098,
		name: {
			"en-gb": "San Roque",
		},
	},
	{
		id: -2451094,
		name: {
			"en-gb": "San Roque",
		},
	},
	{
		id: -2451076,
		name: {
			"en-gb": "San Remigio",
		},
	},
	{
		id: -2451028,
		name: {
			"en-gb": "San Rafael",
		},
	},
	{
		id: -2451018,
		name: {
			"en-gb": "San Rafael",
		},
	},
	{
		id: -2450989,
		name: {
			"en-gb": "San Rafael",
		},
	},
	{
		id: -2450941,
		name: {
			"en-gb": "San Pedro",
		},
	},
	{
		id: -2450933,
		name: {
			"en-gb": "San Pedro",
		},
	},
	{
		id: -2450931,
		name: {
			"en-gb": "San Pedro",
		},
	},
	{
		id: -2450921,
		name: {
			"en-gb": "San Pedro",
		},
	},
	{
		id: -2450873,
		name: {
			"en-gb": "San Pascual",
		},
	},
	{
		id: -2450840,
		name: {
			"en-gb": "San Pablo",
		},
	},
	{
		id: -2450811,
		name: {
			"en-gb": "San Nicolas",
		},
	},
	{
		id: -2450801,
		name: {
			"en-gb": "San Nicolas",
		},
	},
	{
		id: -2450772,
		name: {
			"en-gb": "San Nicolas",
		},
	},
	{
		id: -2450761,
		name: {
			"en-gb": "San Nicholas",
		},
	},
	{
		id: -2450757,
		name: {
			"en-gb": "San Narciso",
		},
	},
	{
		id: -2450711,
		name: {
			"en-gb": "San Miguel",
		},
	},
	{
		id: -2450670,
		name: {
			"en-gb": "San Miguel",
		},
	},
	{
		id: -2450655,
		name: {
			"en-gb": "San Miguel",
		},
	},
	{
		id: -2450613,
		name: {
			"en-gb": "San Mateo",
		},
	},
	{
		id: -2450586,
		name: {
			"en-gb": "San Mariano",
		},
	},
	{
		id: -2450541,
		name: {
			"en-gb": "San Luis",
		},
	},
	{
		id: -2450516,
		name: {
			"en-gb": "San Lucas",
		},
	},
	{
		id: -2450497,
		name: {
			"en-gb": "San Leonardo",
		},
	},
	{
		id: -2450488,
		name: {
			"en-gb": "San Julian Sur",
		},
	},
	{
		id: -2450431,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450418,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450392,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450390,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450370,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450363,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450339,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450336,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450327,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450316,
		name: {
			"en-gb": "San Juan",
		},
	},
	{
		id: -2450245,
		name: {
			"en-gb": "San José",
		},
	},
	{
		id: -2450235,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450184,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450178,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450156,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450151,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450126,
		name: {
			"en-gb": "San Jose de Buenavista",
		},
	},
	{
		id: -2450112,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450109,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450103,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: -2450069,
		name: {
			"en-gb": "San Joaquin",
		},
	},
	{
		id: -2450040,
		name: {
			"en-gb": "San Isidro Hacienda",
		},
	},
	{
		id: -2450027,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2450002,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449995,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449942,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449892,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449877,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449856,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449852,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449851,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: -2449837,
		name: {
			"en-gb": "Sanipon",
		},
	},
	{
		id: -2449796,
		name: {
			"en-gb": "San Gregorio",
		},
	},
	{
		id: -2449784,
		name: {
			"en-gb": "Sanglagan",
		},
	},
	{
		id: -2449770,
		name: {
			"en-gb": "Sanghay",
		},
	},
	{
		id: -2449726,
		name: {
			"en-gb": "San Gabriel",
		},
	},
	{
		id: -2449685,
		name: {
			"en-gb": "San Francisco",
		},
	},
	{
		id: -2449667,
		name: {
			"en-gb": "San Francisco",
		},
	},
	{
		id: -2449650,
		name: {
			"en-gb": "San Francisco",
		},
	},
	{
		id: -2449627,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2449621,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2449614,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2449609,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2449608,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2449586,
		name: {
			"en-gb": "San Felix",
		},
	},
	{
		id: -2449574,
		name: {
			"en-gb": "San Felipe",
		},
	},
	{
		id: -2449571,
		name: {
			"en-gb": "San Felipe",
		},
	},
	{
		id: -2449570,
		name: {
			"en-gb": "San Felipe",
		},
	},
	{
		id: -2449569,
		name: {
			"en-gb": "San Felipe",
		},
	},
	{
		id: -2449566,
		name: {
			"en-gb": "San Fabian",
		},
	},
	{
		id: -2449484,
		name: {
			"en-gb": "Sandalan",
		},
	},
	{
		id: -2449461,
		name: {
			"en-gb": "San Celestino",
		},
	},
	{
		id: -2449453,
		name: {
			"en-gb": "San Carlos",
		},
	},
	{
		id: -2449445,
		name: {
			"en-gb": "San Carlos",
		},
	},
	{
		id: -2449440,
		name: {
			"en-gb": "San Carlos",
		},
	},
	{
		id: -2449394,
		name: {
			"en-gb": "San Bartolome",
		},
	},
	{
		id: -2449384,
		name: {
			"en-gb": "San Aquilino",
		},
	},
	{
		id: -2449335,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449324,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449315,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449304,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449259,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449252,
		name: {
			"en-gb": "San Antonio",
		},
	},
	{
		id: -2449217,
		name: {
			"en-gb": "San Andres",
		},
	},
	{
		id: -2449216,
		name: {
			"en-gb": "San Andres",
		},
	},
	{
		id: -2449214,
		name: {
			"en-gb": "San Andres",
		},
	},
	{
		id: -2449162,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: -2449140,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: -2449138,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: -2449126,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: -2449124,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: -2449107,
		name: {
			"en-gb": "Sampong",
		},
	},
	{
		id: -2449086,
		name: {
			"en-gb": "Sampalukan",
		},
	},
	{
		id: -2449083,
		name: {
			"en-gb": "Sampalok",
		},
	},
	{
		id: -2449073,
		name: {
			"en-gb": "Sampaloc",
		},
	},
	{
		id: -2449071,
		name: {
			"en-gb": "Sampaloc",
		},
	},
	{
		id: -2449028,
		name: {
			"en-gb": "Samboan",
		},
	},
	{
		id: -2448984,
		name: {
			"en-gb": "Samal",
		},
	},
	{
		id: -2448916,
		name: {
			"en-gb": "Salvacion",
		},
	},
	{
		id: -2448884,
		name: {
			"en-gb": "Salugan",
		},
	},
	{
		id: -2448711,
		name: {
			"en-gb": "Salawag",
		},
	},
	{
		id: -2448635,
		name: {
			"en-gb": "Salabusob",
		},
	},
	{
		id: -2448632,
		name: {
			"en-gb": "Salaban",
		},
	},
	{
		id: -2448525,
		name: {
			"en-gb": "Sagnay",
		},
	},
	{
		id: -2448516,
		name: {
			"en-gb": "Sagcahan",
		},
	},
	{
		id: -2448511,
		name: {
			"en-gb": "Sagbayan",
		},
	},
	{
		id: -2448498,
		name: {
			"en-gb": "Sagay",
		},
	},
	{
		id: -2448463,
		name: {
			"en-gb": "Sagada",
		},
	},
	{
		id: -2448367,
		name: {
			"en-gb": "Sablayan",
		},
	},
	{
		id: -2448289,
		name: {
			"en-gb": "Sabang",
		},
	},
	{
		id: -2448287,
		name: {
			"en-gb": "Sabang",
		},
	},
	{
		id: -2448273,
		name: {
			"en-gb": "Sabang",
		},
	},
	{
		id: -2448270,
		name: {
			"en-gb": "Sabang",
		},
	},
	{
		id: -2448249,
		name: {
			"en-gb": "Saavedra",
		},
	},
	{
		id: -2448205,
		name: {
			"en-gb": "Roxas",
		},
	},
	{
		id: -2448204,
		name: {
			"en-gb": "Roxas",
		},
	},
	{
		id: -2448202,
		name: {
			"en-gb": "Roxas City",
		},
	},
	{
		id: -2448200,
		name: {
			"en-gb": "Roxas",
		},
	},
	{
		id: -2448166,
		name: {
			"en-gb": "Rosario",
		},
	},
	{
		id: -2448163,
		name: {
			"en-gb": "Rosario",
		},
	},
	{
		id: -2448121,
		name: {
			"en-gb": "Ronda",
		},
	},
	{
		id: -2448108,
		name: {
			"en-gb": "Romblon",
		},
	},
	{
		id: -2448040,
		name: {
			"en-gb": "Rizal",
		},
	},
	{
		id: -2448036,
		name: {
			"en-gb": "Rizal",
		},
	},
	{
		id: -2448034,
		name: {
			"en-gb": "Rizal",
		},
	},
	{
		id: -2448019,
		name: {
			"en-gb": "Rizal",
		},
	},
	{
		id: -2447975,
		name: {
			"en-gb": "Rizal",
		},
	},
	{
		id: -2447939,
		name: {
			"en-gb": "Rioeng",
		},
	},
	{
		id: -2447903,
		name: {
			"en-gb": "Reserva",
		},
	},
	{
		id: -2447832,
		name: {
			"en-gb": "Real",
		},
	},
	{
		id: -2447674,
		name: {
			"en-gb": "Quitangil",
		},
	},
	{
		id: -2447619,
		name: {
			"en-gb": "Quintana",
		},
	},
	{
		id: -2447599,
		name: {
			"en-gb": "Quinawitnan",
		},
	},
	{
		id: -2447592,
		name: {
			"en-gb": "Quinatihan",
		},
	},
	{
		id: -2447575,
		name: {
			"en-gb": "Quinapundan",
		},
	},
	{
		id: -2447449,
		name: {
			"en-gb": "Quezon City",
		},
	},
	{
		id: -2447440,
		name: {
			"en-gb": "Quezon",
		},
	},
	{
		id: -2447439,
		name: {
			"en-gb": "Quezon",
		},
	},
	{
		id: -2447430,
		name: {
			"en-gb": "Quezon",
		},
	},
	{
		id: -2447341,
		name: {
			"en-gb": "Puting Kahoy",
		},
	},
	{
		id: -2447330,
		name: {
			"en-gb": "Putingbalas",
		},
	},
	{
		id: -2447263,
		name: {
			"en-gb": "Purac",
		},
	},
	{
		id: -2447230,
		name: {
			"en-gb": "Punta Engaño",
		},
	},
	{
		id: -2447215,
		name: {
			"en-gb": "Punta",
		},
	},
	{
		id: -2447145,
		name: {
			"en-gb": "Pulungmaragul",
		},
	},
	{
		id: -2447133,
		name: {
			"en-gb": "Pulpugan",
		},
	},
	{
		id: -2447107,
		name: {
			"en-gb": "Pulong Cacawate",
		},
	},
	{
		id: -2447105,
		name: {
			"en-gb": "Pulong Buhangin",
		},
	},
	{
		id: -2447073,
		name: {
			"en-gb": "Pulilan",
		},
	},
	{
		id: -2447034,
		name: {
			"en-gb": "Pulangbato",
		},
	},
	{
		id: -2447032,
		name: {
			"en-gb": "Pulangbato",
		},
	},
	{
		id: -2446952,
		name: {
			"en-gb": "Puerto Princesa City",
		},
	},
	{
		id: -2446949,
		name: {
			"en-gb": "Puerto Galera",
		},
	},
	{
		id: -2446944,
		name: {
			"en-gb": "Puerto Bello",
		},
	},
	{
		id: -2446841,
		name: {
			"en-gb": "Prenza",
		},
	},
	{
		id: -2446836,
		name: {
			"en-gb": "Prado",
		},
	},
	{
		id: -2446834,
		name: {
			"en-gb": "Pozorrubio",
		},
	},
	{
		id: -2446826,
		name: {
			"en-gb": "Potrero",
		},
	},
	{
		id: -2446819,
		name: {
			"en-gb": "Pototan",
		},
	},
	{
		id: -2446782,
		name: {
			"en-gb": "Pusok",
		},
	},
	{
		id: -2446775,
		name: {
			"en-gb": "Port San Vicente",
		},
	},
	{
		id: -2446763,
		name: {
			"en-gb": "Port Barton",
		},
	},
	{
		id: -2446736,
		name: {
			"en-gb": "Poro",
		},
	},
	{
		id: -2446732,
		name: {
			"en-gb": "Camotes Islands",
		},
	},
	{
		id: -2446719,
		name: {
			"en-gb": "Porac",
		},
	},
	{
		id: -2446681,
		name: {
			"en-gb": "Pooc",
		},
	},
	{
		id: -2446680,
		name: {
			"en-gb": "Pook",
		},
	},
	{
		id: -2446667,
		name: {
			"en-gb": "Poo",
		},
	},
	{
		id: -2446663,
		name: {
			"en-gb": "Pontud",
		},
	},
	{
		id: -2446556,
		name: {
			"en-gb": "Polong",
		},
	},
	{
		id: -2446554,
		name: {
			"en-gb": "Polomolok",
		},
	},
	{
		id: -2446494,
		name: {
			"en-gb": "Polangui",
		},
	},
	{
		id: -2446435,
		name: {
			"en-gb": "Poctoy",
		},
	},
	{
		id: -2446390,
		name: {
			"en-gb": "Plaridel",
		},
	},
	{
		id: -2446374,
		name: {
			"en-gb": "Plaridel",
		},
	},
	{
		id: -2446360,
		name: {
			"en-gb": "Placer",
		},
	},
	{
		id: -2446301,
		name: {
			"en-gb": "Pitland",
		},
	},
	{
		id: -2446234,
		name: {
			"en-gb": "Pio V. Corpuz",
		},
	},
	{
		id: -2446232,
		name: {
			"en-gb": "Pio Duran",
		},
	},
	{
		id: -2446225,
		name: {
			"en-gb": "Pinuunan",
		},
	},
	{
		id: -2446219,
		name: {
			"en-gb": "Pinugay",
		},
	},
	{
		id: -2446218,
		name: {
			"en-gb": "Pintuyan",
		},
	},
	{
		id: -2446150,
		name: {
			"en-gb": "Piñgit",
		},
	},
	{
		id: -2446053,
		name: {
			"en-gb": "Pinamungahan",
		},
	},
	{
		id: -2446028,
		name: {
			"en-gb": "Pinamihagan",
		},
	},
	{
		id: -2446018,
		name: {
			"en-gb": "Pinamaratan",
		},
	},
	{
		id: -2446009,
		name: {
			"en-gb": "Pinamalayan",
		},
	},
	{
		id: -2446008,
		name: {
			"en-gb": "Pinamalayan",
		},
	},
	{
		id: -2445973,
		name: {
			"en-gb": "Pinagsanghan",
		},
	},
	{
		id: -2445848,
		name: {
			"en-gb": "Pililla",
		},
	},
	{
		id: -2445831,
		name: {
			"en-gb": "Pili",
		},
	},
	{
		id: -2445824,
		name: {
			"en-gb": "Pili",
		},
	},
	{
		id: -2445813,
		name: {
			"en-gb": "Pildira",
		},
	},
	{
		id: -2445787,
		name: {
			"en-gb": "Pilar",
		},
	},
	{
		id: -2445781,
		name: {
			"en-gb": "Pilar",
		},
	},
	{
		id: -2445778,
		name: {
			"en-gb": "Pilar",
		},
	},
	{
		id: -2445777,
		name: {
			"en-gb": "Pilar",
		},
	},
	{
		id: -2445672,
		name: {
			"en-gb": "Pico",
		},
	},
	{
		id: -2445590,
		name: {
			"en-gb": "Perlas",
		},
	},
	{
		id: -2445572,
		name: {
			"en-gb": "Pequeno",
		},
	},
	{
		id: -2445534,
		name: {
			"en-gb": "Peñablanca",
		},
	},
	{
		id: -2445512,
		name: {
			"en-gb": "Pejepe",
		},
	},
	{
		id: -2445457,
		name: {
			"en-gb": "Payompon",
		},
	},
	{
		id: -2445423,
		name: {
			"en-gb": "Payapa",
		},
	},
	{
		id: -2445422,
		name: {
			"en-gb": "Payapa",
		},
	},
	{
		id: -2445359,
		name: {
			"en-gb": "Pavia",
		},
	},
	{
		id: -2445326,
		name: {
			"en-gb": "Patungan",
		},
	},
	{
		id: -2445189,
		name: {
			"en-gb": "Patao",
		},
	},
	{
		id: -2445136,
		name: {
			"en-gb": "Pasuquin",
		},
	},
	{
		id: -2445112,
		name: {
			"en-gb": "Pasong Mannga",
		},
	},
	{
		id: -2445103,
		name: {
			"en-gb": "Pasong Bayog",
		},
	},
	{
		id: -2445040,
		name: {
			"en-gb": "Pasig",
		},
	},
	{
		id: -2445008,
		name: {
			"en-gb": "Pasay",
		},
	},
	{
		id: -2444937,
		name: {
			"en-gb": "Parian",
		},
	},
	{
		id: -2444906,
		name: {
			"en-gb": "Paratong",
		},
	},
	{
		id: -2444859,
		name: {
			"en-gb": "Parang",
		},
	},
	{
		id: -2444838,
		name: {
			"en-gb": "Parañaque",
		},
	},
	{
		id: -2444816,
		name: {
			"en-gb": "Paradahan",
		},
	},
	{
		id: -2444807,
		name: {
			"en-gb": "Paracale",
		},
	},
	{
		id: -2444792,
		name: {
			"en-gb": "Papaya",
		},
	},
	{
		id: -2444747,
		name: {
			"en-gb": "Paoay",
		},
	},
	{
		id: -2444727,
		name: {
			"en-gb": "Panungyan",
		},
	},
	{
		id: -2444723,
		name: {
			"en-gb": "Panukulan",
		},
	},
	{
		id: -2444712,
		name: {
			"en-gb": "Panubigan",
		},
	},
	{
		id: -2444706,
		name: {
			"en-gb": "Pantudlan",
		},
	},
	{
		id: -2444678,
		name: {
			"en-gb": "Pantay",
		},
	},
	{
		id: -2444620,
		name: {
			"en-gb": "Pansol",
		},
	},
	{
		id: -2444619,
		name: {
			"en-gb": "Pansol",
		},
	},
	{
		id: -2444417,
		name: {
			"en-gb": "Pangubatan",
		},
	},
	{
		id: -2444397,
		name: {
			"en-gb": "Pampang",
		},
	},
	{
		id: -2444356,
		name: {
			"en-gb": "Panglao",
		},
	},
	{
		id: -2444302,
		name: {
			"en-gb": "Pañge",
		},
	},
	{
		id: -2444276,
		name: {
			"en-gb": "Pangawilan",
		},
	},
	{
		id: -2444226,
		name: {
			"en-gb": "Pangantocan",
		},
	},
	{
		id: -2444155,
		name: {
			"en-gb": "Pandi",
		},
	},
	{
		id: -2444143,
		name: {
			"en-gb": "Pandayan",
		},
	},
	{
		id: -2444062,
		name: {
			"en-gb": "Pandan",
		},
	},
	{
		id: -2444051,
		name: {
			"en-gb": "Pandan",
		},
	},
	{
		id: -2443811,
		name: {
			"en-gb": "Panabo",
		},
	},
	{
		id: -2443783,
		name: {
			"en-gb": "Pamplona",
		},
	},
	{
		id: -2443766,
		name: {
			"en-gb": "Pampanga",
		},
	},
	{
		id: -2443598,
		name: {
			"en-gb": "Palompon",
		},
	},
	{
		id: -2443574,
		name: {
			"en-gb": "Palo",
		},
	},
	{
		id: -2443549,
		name: {
			"en-gb": "Paliwas",
		},
	},
	{
		id: -2443544,
		name: {
			"en-gb": "Paliton",
		},
	},
	{
		id: -2443535,
		name: {
			"en-gb": "Paliparan",
		},
	},
	{
		id: -2443477,
		name: {
			"en-gb": "Pali",
		},
	},
	{
		id: -2443427,
		name: {
			"en-gb": "Palauig",
		},
	},
	{
		id: -2443388,
		name: {
			"en-gb": "Palapala",
		},
	},
	{
		id: -2443381,
		name: {
			"en-gb": "Palapag",
		},
	},
	{
		id: -2443326,
		name: {
			"en-gb": "Palanas",
		},
	},
	{
		id: -2443196,
		name: {
			"en-gb": "Pajo",
		},
	},
	{
		id: -2443192,
		name: {
			"en-gb": "Pajak",
		},
	},
	{
		id: -2443133,
		name: {
			"en-gb": "Pagudpud",
		},
	},
	{
		id: -2443110,
		name: {
			"en-gb": "Pagsanjan",
		},
	},
	{
		id: -2443077,
		name: {
			"en-gb": "Pagsabangan",
		},
	},
	{
		id: -2443012,
		name: {
			"en-gb": "Pagda",
		},
	},
	{
		id: -2443001,
		name: {
			"en-gb": "Pagbilao",
		},
	},
	{
		id: -2442972,
		name: {
			"en-gb": "Pagauanen",
		},
	},
	{
		id: -2442943,
		name: {
			"en-gb": "Pagao",
		},
	},
	{
		id: -2442934,
		name: {
			"en-gb": "Pagamikan",
		},
	},
	{
		id: -2442905,
		name: {
			"en-gb": "Pagadian",
		},
	},
	{
		id: -2442896,
		name: {
			"en-gb": "Paete",
		},
	},
	{
		id: -2442804,
		name: {
			"en-gb": "Pacpacac",
		},
	},
	{
		id: -2442711,
		name: {
			"en-gb": "Ozamis",
		},
	},
	{
		id: -2442667,
		name: {
			"en-gb": "Oton",
		},
	},
	{
		id: -2442623,
		name: {
			"en-gb": "Osmena",
		},
	},
	{
		id: -2442620,
		name: {
			"en-gb": "Oslob",
		},
	},
	{
		id: -2442603,
		name: {
			"en-gb": "Oroquieta",
		},
	},
	{
		id: -2442591,
		name: {
			"en-gb": "Ormoc",
		},
	},
	{
		id: -2442585,
		name: {
			"en-gb": "Orion",
		},
	},
	{
		id: -2442516,
		name: {
			"en-gb": "Oobi",
		},
	},
	{
		id: -2442447,
		name: {
			"en-gb": "Olotayan",
		},
	},
	{
		id: -2442432,
		name: {
			"en-gb": "Olongapo",
		},
	},
	{
		id: -2442431,
		name: {
			"en-gb": "Ol-og",
		},
	},
	{
		id: -2442421,
		name: {
			"en-gb": "Olivo",
		},
	},
	{
		id: -2442402,
		name: {
			"en-gb": "Tolong",
		},
	},
	{
		id: -2442326,
		name: {
			"en-gb": "Odok",
		},
	},
	{
		id: -2442312,
		name: {
			"en-gb": "Odiongan",
		},
	},
	{
		id: -2442302,
		name: {
			"en-gb": "Odiong",
		},
	},
	{
		id: -2442286,
		name: {
			"en-gb": "Ocoy",
		},
	},
	{
		id: -2442272,
		name: {
			"en-gb": "Ocam Ocam",
		},
	},
	{
		id: -2442205,
		name: {
			"en-gb": "Nutol",
		},
	},
	{
		id: -2442176,
		name: {
			"en-gb": "Numero Tres",
		},
	},
	{
		id: -2442175,
		name: {
			"en-gb": "Numero Dos",
		},
	},
	{
		id: -2442172,
		name: {
			"en-gb": "Numancia",
		},
	},
	{
		id: -2442147,
		name: {
			"en-gb": "Nueva Valencia",
		},
	},
	{
		id: -2442088,
		name: {
			"en-gb": "North Tambo",
		},
	},
	{
		id: -2441899,
		name: {
			"en-gb": "Nicdao",
		},
	},
	{
		id: -2441892,
		name: {
			"en-gb": "Nibalio",
		},
	},
	{
		id: -2441865,
		name: {
			"en-gb": "New Washington",
		},
	},
	{
		id: -2441863,
		name: {
			"en-gb": "New Visayas",
		},
	},
	{
		id: -2441853,
		name: {
			"en-gb": "New Sagay",
		},
	},
	{
		id: -2441820,
		name: {
			"en-gb": "New Busuanga",
		},
	},
	{
		id: -2441810,
		name: {
			"en-gb": "New Bataan",
		},
	},
	{
		id: -2441804,
		name: {
			"en-gb": "New Agutaya",
		},
	},
	{
		id: -2441755,
		name: {
			"en-gb": "Nawanao",
		},
	},
	{
		id: -2441717,
		name: {
			"en-gb": "Naval",
		},
	},
	{
		id: -2441684,
		name: {
			"en-gb": "Naujan",
		},
	},
	{
		id: -2441679,
		name: {
			"en-gb": "Nauhang",
		},
	},
	{
		id: -2441565,
		name: {
			"en-gb": "Nasugbu",
		},
	},
	{
		id: -2441505,
		name: {
			"en-gb": "Narvacan",
		},
	},
	{
		id: -2441492,
		name: {
			"en-gb": "Narra",
		},
	},
	{
		id: -2441424,
		name: {
			"en-gb": "Napo",
		},
	},
	{
		id: -2441421,
		name: {
			"en-gb": "Napo",
		},
	},
	{
		id: -2441377,
		name: {
			"en-gb": "Naosoc",
		},
	},
	{
		id: -2441348,
		name: {
			"en-gb": "Nanlingan",
		},
	},
	{
		id: -2441337,
		name: {
			"en-gb": "Nangsolo",
		},
	},
	{
		id: -2441299,
		name: {
			"en-gb": "Nangalisan",
		},
	},
	{
		id: -2441159,
		name: {
			"en-gb": "Nalvo",
		},
	},
	{
		id: -2441046,
		name: {
			"en-gb": "Naic",
		},
	},
	{
		id: -2441033,
		name: {
			"en-gb": "Nahawan",
		},
	},
	{
		id: -2440997,
		name: {
			"en-gb": "Naguilian",
		},
	},
	{
		id: -2440940,
		name: {
			"en-gb": "Nagsaulay",
		},
	},
	{
		id: -2440848,
		name: {
			"en-gb": "Nagcarlan",
		},
	},
	{
		id: -2440757,
		name: {
			"en-gb": "Naga",
		},
	},
	{
		id: -2440731,
		name: {
			"en-gb": "Nacpan",
		},
	},
	{
		id: -2440699,
		name: {
			"en-gb": "Nabunturan",
		},
	},
	{
		id: -2440664,
		name: {
			"en-gb": "Nabua",
		},
	},
	{
		id: -2440608,
		name: {
			"en-gb": "Nabas",
		},
	},
	{
		id: -2440569,
		name: {
			"en-gb": "Naasag",
		},
	},
	{
		id: -2440567,
		name: {
			"en-gb": "Muzon",
		},
	},
	{
		id: -2440555,
		name: {
			"en-gb": "Mutia",
		},
	},
	{
		id: -2440519,
		name: {
			"en-gb": "Murallon",
		},
	},
	{
		id: -2440507,
		name: {
			"en-gb": "Muntinlupa",
		},
	},
	{
		id: -2440454,
		name: {
			"en-gb": "Mulao",
		},
	},
	{
		id: -2440442,
		name: {
			"en-gb": "Mujon",
		},
	},
	{
		id: -2440416,
		name: {
			"en-gb": "Muaan",
		},
	},
	{
		id: -2440377,
		name: {
			"en-gb": "Morong",
		},
	},
	{
		id: -2440376,
		name: {
			"en-gb": "Morong",
		},
	},
	{
		id: -2440361,
		name: {
			"en-gb": "Mormol",
		},
	},
	{
		id: -2440272,
		name: {
			"en-gb": "Monserrat",
		},
	},
	{
		id: -2440236,
		name: {
			"en-gb": "Mondragon",
		},
	},
	{
		id: -2440219,
		name: {
			"en-gb": "Mompeller",
		},
	},
	{
		id: -2440208,
		name: {
			"en-gb": "Molopolo",
		},
	},
	{
		id: -2440203,
		name: {
			"en-gb": "Molo",
		},
	},
	{
		id: -2440200,
		name: {
			"en-gb": "Molino",
		},
	},
	{
		id: -2440193,
		name: {
			"en-gb": "Bataan",
		},
	},
	{
		id: -2440190,
		name: {
			"en-gb": "Molave",
		},
	},
	{
		id: -2440141,
		name: {
			"en-gb": "Mocpoc Sur",
		},
	},
	{
		id: -2440137,
		name: {
			"en-gb": "Mocalbocal",
		},
	},
	{
		id: -2440124,
		name: {
			"en-gb": "Moalboal",
		},
	},
	{
		id: -2440052,
		name: {
			"en-gb": "Minuluang",
		},
	},
	{
		id: -2440044,
		name: {
			"en-gb": "Minuit",
		},
	},
	{
		id: -2440040,
		name: {
			"en-gb": "Mintal",
		},
	},
	{
		id: -2440020,
		name: {
			"en-gb": "Minnesota Hacienda",
		},
	},
	{
		id: -2440013,
		name: {
			"en-gb": "Mining",
		},
	},
	{
		id: -2440006,
		name: {
			"en-gb": "Minglanilla",
		},
	},
	{
		id: -2439989,
		name: {
			"en-gb": "Mindoro",
		},
	},
	{
		id: -2439974,
		name: {
			"en-gb": "Minatula",
		},
	},
	{
		id: -2439953,
		name: {
			"en-gb": "Minantok",
		},
	},
	{
		id: -2439943,
		name: {
			"en-gb": "Minanga",
		},
	},
	{
		id: -2439920,
		name: {
			"en-gb": "Minalin",
		},
	},
	{
		id: -2439856,
		name: {
			"en-gb": "Milagros",
		},
	},
	{
		id: -2439841,
		name: {
			"en-gb": "Migit",
		},
	},
	{
		id: -2439821,
		name: {
			"en-gb": "Midsayap",
		},
	},
	{
		id: -2439773,
		name: {
			"en-gb": "Meycauayan",
		},
	},
	{
		id: -2439770,
		name: {
			"en-gb": "Mexico",
		},
	},
	{
		id: -2439717,
		name: {
			"en-gb": "Mendez-Nuñez",
		},
	},
	{
		id: -2439710,
		name: {
			"en-gb": "Memagampon",
		},
	},
	{
		id: -2439683,
		name: {
			"en-gb": "Medina",
		},
	},
	{
		id: -2439677,
		name: {
			"en-gb": "Medellin",
		},
	},
	{
		id: -2439560,
		name: {
			"en-gb": "Maydolong",
		},
	},
	{
		id: -2439511,
		name: {
			"en-gb": "Mayaoyao",
		},
	},
	{
		id: -2439468,
		name: {
			"en-gb": "Maya",
		},
	},
	{
		id: -2439394,
		name: {
			"en-gb": "Mauban",
		},
	},
	{
		id: -2439393,
		name: {
			"en-gb": "Mauban",
		},
	},
	{
		id: -2439361,
		name: {
			"en-gb": "Matungao",
		},
	},
	{
		id: -2439303,
		name: {
			"en-gb": "Matnog",
		},
	},
	{
		id: -2439285,
		name: {
			"en-gb": "Matinkanana",
		},
	},
	{
		id: -2439268,
		name: {
			"en-gb": "Matinao",
		},
	},
	{
		id: -2439257,
		name: {
			"en-gb": "Matina",
		},
	},
	{
		id: -2439215,
		name: {
			"en-gb": "Mati",
		},
	},
	{
		id: -2439212,
		name: {
			"en-gb": "Mati",
		},
	},
	{
		id: -2439143,
		name: {
			"en-gb": "Matangtubig",
		},
	},
	{
		id: -2439072,
		name: {
			"en-gb": "Matain",
		},
	},
	{
		id: -2439067,
		name: {
			"en-gb": "Matagum",
		},
	},
	{
		id: -2439047,
		name: {
			"en-gb": "Matagbac",
		},
	},
	{
		id: -2439033,
		name: {
			"en-gb": "Matabungkay",
		},
	},
	{
		id: -2439011,
		name: {
			"en-gb": "Mataba",
		},
	},
	{
		id: -2439003,
		name: {
			"en-gb": "Mataasnakahoy",
		},
	},
	{
		id: -2438948,
		name: {
			"en-gb": "Maslog",
		},
	},
	{
		id: -2438904,
		name: {
			"en-gb": "Masinloc",
		},
	},
	{
		id: -2438888,
		name: {
			"en-gb": "Masilang",
		},
	},
	{
		id: -2438883,
		name: {
			"en-gb": "Masiga",
		},
	},
	{
		id: -2438857,
		name: {
			"en-gb": "Masbate",
		},
	},
	{
		id: -2438845,
		name: {
			"en-gb": "Masaya",
		},
	},
	{
		id: -2438838,
		name: {
			"en-gb": "Masasa",
		},
	},
	{
		id: -2438829,
		name: {
			"en-gb": "Masaplod",
		},
	},
	{
		id: -2438700,
		name: {
			"en-gb": "Mariveles",
		},
	},
	{
		id: -2438692,
		name: {
			"en-gb": "Mariroc",
		},
	},
	{
		id: -2438681,
		name: {
			"en-gb": "Maripipi",
		},
	},
	{
		id: -2438651,
		name: {
			"en-gb": "Marilao",
		},
	},
	{
		id: -2438643,
		name: {
			"en-gb": "Marikina",
		},
	},
	{
		id: -2438629,
		name: {
			"en-gb": "Marigondon",
		},
	},
	{
		id: -2438609,
		name: {
			"en-gb": "Maricaban",
		},
	},
	{
		id: -2438607,
		name: {
			"en-gb": "Maricaban",
		},
	},
	{
		id: -2438606,
		name: {
			"en-gb": "Maricaban",
		},
	},
	{
		id: -2438595,
		name: {
			"en-gb": "Maribago",
		},
	},
	{
		id: -2438574,
		name: {
			"en-gb": "Maria Aurora",
		},
	},
	{
		id: -2438569,
		name: {
			"en-gb": "Maria",
		},
	},
	{
		id: -2438506,
		name: {
			"en-gb": "Maravilla",
		},
	},
	{
		id: -2438501,
		name: {
			"en-gb": "Maratapi",
		},
	},
	{
		id: -2438451,
		name: {
			"en-gb": "Maramo",
		},
	},
	{
		id: -2438417,
		name: {
			"en-gb": "Maragondon",
		},
	},
	{
		id: -2438407,
		name: {
			"en-gb": "Maraga-a",
		},
	},
	{
		id: -2438382,
		name: {
			"en-gb": "Maraat",
		},
	},
	{
		id: -2438263,
		name: {
			"en-gb": "Mapan",
		},
	},
	{
		id: -2438055,
		name: {
			"en-gb": "Mansasa",
		},
	},
	{
		id: -2438028,
		name: {
			"en-gb": "Manongol",
		},
	},
	{
		id: -2438027,
		name: {
			"en-gb": "Manolo Fortich",
		},
	},
	{
		id: -2438013,
		name: {
			"en-gb": "Manocmanoc",
		},
	},
	{
		id: -2437985,
		name: {
			"en-gb": "Manlocahoc",
		},
	},
	{
		id: -2437945,
		name: {
			"en-gb": "Maniwaya",
		},
	},
	{
		id: -2437894,
		name: {
			"en-gb": "Manila",
		},
	},
	{
		id: -2437869,
		name: {
			"en-gb": "Manibaug-paralaya",
		},
	},
	{
		id: -2437845,
		name: {
			"en-gb": "Mangumit",
		},
	},
	{
		id: -2437842,
		name: {
			"en-gb": "Manguisoc",
		},
	},
	{
		id: -2437799,
		name: {
			"en-gb": "Mangnao",
		},
	},
	{
		id: -2437740,
		name: {
			"en-gb": "Mangatarem",
		},
	},
	{
		id: -2437734,
		name: {
			"en-gb": "Mangas",
		},
	},
	{
		id: -2437710,
		name: {
			"en-gb": "Mangangpico",
		},
	},
	{
		id: -2437689,
		name: {
			"en-gb": "Mangaldan",
		},
	},
	{
		id: -2437682,
		name: {
			"en-gb": "Manggahan",
		},
	},
	{
		id: -2437643,
		name: {
			"en-gb": "Mandurriao",
		},
	},
	{
		id: -2437612,
		name: {
			"en-gb": "Mandaue City",
		},
	},
	{
		id: -2437578,
		name: {
			"en-gb": "Mandalagan",
		},
	},
	{
		id: -2437541,
		name: {
			"en-gb": "Manbiga",
		},
	},
	{
		id: -2437462,
		name: {
			"en-gb": "Manaoag",
		},
	},
	{
		id: -2437436,
		name: {
			"en-gb": "Mananda",
		},
	},
	{
		id: -2437369,
		name: {
			"en-gb": "Manabolo",
		},
	},
	{
		id: -2437293,
		name: {
			"en-gb": "Mamburao",
		},
	},
	{
		id: -2437267,
		name: {
			"en-gb": "Mambucal",
		},
	},
	{
		id: -2437226,
		name: {
			"en-gb": "Mambangnan",
		},
	},
	{
		id: -2437207,
		name: {
			"en-gb": "Mambajao",
		},
	},
	{
		id: -2437201,
		name: {
			"en-gb": "Mambago-B",
		},
	},
	{
		id: -2437141,
		name: {
			"en-gb": "Malvar",
		},
	},
	{
		id: -2437056,
		name: {
			"en-gb": "Malpitic",
		},
	},
	{
		id: -2437035,
		name: {
			"en-gb": "Malope",
		},
	},
	{
		id: -2437012,
		name: {
			"en-gb": "Malolos",
		},
	},
	{
		id: -2436931,
		name: {
			"en-gb": "Malitlit",
		},
	},
	{
		id: -2436914,
		name: {
			"en-gb": "Malitbog",
		},
	},
	{
		id: -2436867,
		name: {
			"en-gb": "Malino",
		},
	},
	{
		id: -2436821,
		name: {
			"en-gb": "Malinao",
		},
	},
	{
		id: -2436810,
		name: {
			"en-gb": "Malinao",
		},
	},
	{
		id: -2436809,
		name: {
			"en-gb": "Malinao",
		},
	},
	{
		id: -2436787,
		name: {
			"en-gb": "Malimanga",
		},
	},
	{
		id: -2436785,
		name: {
			"en-gb": "Malilipot",
		},
	},
	{
		id: -2436757,
		name: {
			"en-gb": "Maligcong",
		},
	},
	{
		id: -2436716,
		name: {
			"en-gb": "Malibay",
		},
	},
	{
		id: -2436637,
		name: {
			"en-gb": "Malbato",
		},
	},
	{
		id: -2436630,
		name: {
			"en-gb": "Malbago",
		},
	},
	{
		id: -2436612,
		name: {
			"en-gb": "Malaybalay",
		},
	},
	{
		id: -2436593,
		name: {
			"en-gb": "Boracay",
		},
	},
	{
		id: -2436549,
		name: {
			"en-gb": "Malate",
		},
	},
	{
		id: -2436529,
		name: {
			"en-gb": "Malasin",
		},
	},
	{
		id: -2436494,
		name: {
			"en-gb": "Malapatan",
		},
	},
	{
		id: -2436481,
		name: {
			"en-gb": "Malapadnabato",
		},
	},
	{
		id: -2436414,
		name: {
			"en-gb": "Malampay",
		},
	},
	{
		id: -2436403,
		name: {
			"en-gb": "Malamig",
		},
	},
	{
		id: -2436324,
		name: {
			"en-gb": "Malahog",
		},
	},
	{
		id: -2436297,
		name: {
			"en-gb": "Malagonglong",
		},
	},
	{
		id: -2436283,
		name: {
			"en-gb": "Malagasang Primero",
		},
	},
	{
		id: -2436275,
		name: {
			"en-gb": "Malaga",
		},
	},
	{
		id: -2436246,
		name: {
			"en-gb": "Malabuyoc",
		},
	},
	{
		id: -2436242,
		name: {
			"en-gb": "Malabuñgan",
		},
	},
	{
		id: -2436238,
		name: {
			"en-gb": "Malabugas",
		},
	},
	{
		id: -2436232,
		name: {
			"en-gb": "Malabrigo",
		},
	},
	{
		id: -2436227,
		name: {
			"en-gb": "Malabonot",
		},
	},
	{
		id: -2436188,
		name: {
			"en-gb": "Malabañas",
		},
	},
	{
		id: -2436161,
		name: {
			"en-gb": "Malabag",
		},
	},
	{
		id: -2436137,
		name: {
			"en-gb": "Makilala",
		},
	},
	{
		id: -2436127,
		name: {
			"en-gb": "Makati",
		},
	},
	{
		id: -2436119,
		name: {
			"en-gb": "Makar",
		},
	},
	{
		id: -2436091,
		name: {
			"en-gb": "Majayjay",
		},
	},
	{
		id: -2436064,
		name: {
			"en-gb": "Maitim",
		},
	},
	{
		id: -2436063,
		name: {
			"en-gb": "Maitim",
		},
	},
	{
		id: -2436057,
		name: {
			"en-gb": "Maite",
		},
	},
	{
		id: -2436032,
		name: {
			"en-gb": "Mainit",
		},
	},
	{
		id: -2436023,
		name: {
			"en-gb": "Mainit",
		},
	},
	{
		id: -2436021,
		name: {
			"en-gb": "Mainit",
		},
	},
	{
		id: -2436005,
		name: {
			"en-gb": "Maimpis",
		},
	},
	{
		id: -2435973,
		name: {
			"en-gb": "Mahuyabhuyab",
		},
	},
	{
		id: -2435970,
		name: {
			"en-gb": "Mahumiling",
		},
	},
	{
		id: -2435965,
		name: {
			"en-gb": "Majon",
		},
	},
	{
		id: -2435961,
		name: {
			"en-gb": "Mahinog",
		},
	},
	{
		id: -2435935,
		name: {
			"en-gb": "Mahatao",
		},
	},
	{
		id: -2435898,
		name: {
			"en-gb": "Mahabang Pulo",
		},
	},
	{
		id: -2435871,
		name: {
			"en-gb": "Maguyam",
		},
	},
	{
		id: -2435811,
		name: {
			"en-gb": "Magting",
		},
	},
	{
		id: -2435732,
		name: {
			"en-gb": "Magopising",
		},
	},
	{
		id: -2435678,
		name: {
			"en-gb": "Maglalambay",
		},
	},
	{
		id: -2435639,
		name: {
			"en-gb": "Magdiwang",
		},
	},
	{
		id: -2435501,
		name: {
			"en-gb": "Magamomo",
		},
	},
	{
		id: -2435493,
		name: {
			"en-gb": "Magalolong",
		},
	},
	{
		id: -2435484,
		name: {
			"en-gb": "Magallanes",
		},
	},
	{
		id: -2435467,
		name: {
			"en-gb": "Magalang",
		},
	},
	{
		id: -2435454,
		name: {
			"en-gb": "Mag-ag",
		},
	},
	{
		id: -2435379,
		name: {
			"en-gb": "Maddela",
		},
	},
	{
		id: -2435346,
		name: {
			"en-gb": "Madang-ngog",
		},
	},
	{
		id: -2435281,
		name: {
			"en-gb": "Mactan",
		},
	},
	{
		id: -2435234,
		name: {
			"en-gb": "Macatunao",
		},
	},
	{
		id: -2435084,
		name: {
			"en-gb": "Macabling",
		},
	},
	{
		id: -2435062,
		name: {
			"en-gb": "Macaas",
		},
	},
	{
		id: -2435017,
		name: {
			"en-gb": "Mabubua",
		},
	},
	{
		id: -2435011,
		name: {
			"en-gb": "Mabua",
		},
	},
	{
		id: -2435002,
		name: {
			"en-gb": "Mabolo",
		},
	},
	{
		id: -2434997,
		name: {
			"en-gb": "Mablaran",
		},
	},
	{
		id: -2434989,
		name: {
			"en-gb": "Mabitac",
		},
	},
	{
		id: -2434981,
		name: {
			"en-gb": "Mabini",
		},
	},
	{
		id: -2434966,
		name: {
			"en-gb": "Mabini",
		},
	},
	{
		id: -2434920,
		name: {
			"en-gb": "Mabinay",
		},
	},
	{
		id: -2434905,
		name: {
			"en-gb": "Mabilao",
		},
	},
	{
		id: -2434897,
		name: {
			"en-gb": "Mabiga",
		},
	},
	{
		id: -2434887,
		name: {
			"en-gb": "Maybayo",
		},
	},
	{
		id: -2434862,
		name: {
			"en-gb": "Mabatang",
		},
	},
	{
		id: -2434847,
		name: {
			"en-gb": "Mabanot",
		},
	},
	{
		id: -2434846,
		name: {
			"en-gb": "Mabanog",
		},
	},
	{
		id: -2434822,
		name: {
			"en-gb": "Mabalacat",
		},
	},
	{
		id: -2434768,
		name: {
			"en-gb": "Maasin",
		},
	},
	{
		id: -2434767,
		name: {
			"en-gb": "Maasin",
		},
	},
	{
		id: -2434766,
		name: {
			"en-gb": "Maasin",
		},
	},
	{
		id: -2434764,
		name: {
			"en-gb": "Ma-asin",
		},
	},
	{
		id: -2434717,
		name: {
			"en-gb": "Ma-alat",
		},
	},
	{
		id: -2434590,
		name: {
			"en-gb": "Lusong",
		},
	},
	{
		id: -2434528,
		name: {
			"en-gb": "Lupao",
		},
	},
	{
		id: -2434449,
		name: {
			"en-gb": "Lundag",
		},
	},
	{
		id: -2434423,
		name: {
			"en-gb": "Luna",
		},
	},
	{
		id: -2434418,
		name: {
			"en-gb": "Luna",
		},
	},
	{
		id: -2434376,
		name: {
			"en-gb": "Lumil",
		},
	},
	{
		id: -2434330,
		name: {
			"en-gb": "Lumban",
		},
	},
	{
		id: -2434248,
		name: {
			"en-gb": "Luksuhin",
		},
	},
	{
		id: -2434187,
		name: {
			"en-gb": "Lugait",
		},
	},
	{
		id: -2434160,
		name: {
			"en-gb": "Lucena",
		},
	},
	{
		id: -2434155,
		name: {
			"en-gb": "Lucbuan",
		},
	},
	{
		id: -2434150,
		name: {
			"en-gb": "Lucban",
		},
	},
	{
		id: -2434140,
		name: {
			"en-gb": "Lucapon",
		},
	},
	{
		id: -2434138,
		name: {
			"en-gb": "Lucap",
		},
	},
	{
		id: -2434122,
		name: {
			"en-gb": "Lubo-ong",
		},
	},
	{
		id: -2434111,
		name: {
			"en-gb": "Lubo",
		},
	},
	{
		id: -2434074,
		name: {
			"en-gb": "Lubao",
		},
	},
	{
		id: -2434012,
		name: {
			"en-gb": "Lourdes",
		},
	},
	{
		id: -2434010,
		name: {
			"en-gb": "Lourdes",
		},
	},
	{
		id: -2433987,
		name: {
			"en-gb": "Lossoc",
		},
	},
	{
		id: -2433978,
		name: {
			"en-gb": "Los Baños",
		},
	},
	{
		id: -2433976,
		name: {
			"en-gb": "Los Baños",
		},
	},
	{
		id: -2433933,
		name: {
			"en-gb": "Loon",
		},
	},
	{
		id: -2433913,
		name: {
			"en-gb": "Look",
		},
	},
	{
		id: -2433909,
		name: {
			"en-gb": "Look",
		},
	},
	{
		id: -2433869,
		name: {
			"en-gb": "Looc",
		},
	},
	{
		id: -2433860,
		name: {
			"en-gb": "Lo-oc",
		},
	},
	{
		id: -2433853,
		name: {
			"en-gb": "Looc",
		},
	},
	{
		id: -2433805,
		name: {
			"en-gb": "Longos",
		},
	},
	{
		id: -2433801,
		name: {
			"en-gb": "Loñgos",
		},
	},
	{
		id: -2433745,
		name: {
			"en-gb": "Lomangcapan",
		},
	},
	{
		id: -2433741,
		name: {
			"en-gb": "Loma",
		},
	},
	{
		id: -2433709,
		name: {
			"en-gb": "Logon",
		},
	},
	{
		id: -2433679,
		name: {
			"en-gb": "Locon",
		},
	},
	{
		id: -2433662,
		name: {
			"en-gb": "Locaroc",
		},
	},
	{
		id: -2433651,
		name: {
			"en-gb": "Lobogan",
		},
	},
	{
		id: -2433641,
		name: {
			"en-gb": "Loboc",
		},
	},
	{
		id: -2433631,
		name: {
			"en-gb": "Lobo",
		},
	},
	{
		id: -2433615,
		name: {
			"en-gb": "Loay",
		},
	},
	{
		id: -2433606,
		name: {
			"en-gb": "Loacan",
		},
	},
	{
		id: -2433513,
		name: {
			"en-gb": "Lisub",
		},
	},
	{
		id: -2433467,
		name: {
			"en-gb": "Lipay",
		},
	},
	{
		id: -2433418,
		name: {
			"en-gb": "Lipa",
		},
	},
	{
		id: -2433320,
		name: {
			"en-gb": "Lingayen",
		},
	},
	{
		id: -2433273,
		name: {
			"en-gb": "Linawan",
		},
	},
	{
		id: -2433265,
		name: {
			"en-gb": "Linapacan",
		},
	},
	{
		id: -2433175,
		name: {
			"en-gb": "Liminangcong",
		},
	},
	{
		id: -2433145,
		name: {
			"en-gb": "Limay",
		},
	},
	{
		id: -2433129,
		name: {
			"en-gb": "Limao",
		},
	},
	{
		id: -2433113,
		name: {
			"en-gb": "Liloan",
		},
	},
	{
		id: -2433110,
		name: {
			"en-gb": "Liloan",
		},
	},
	{
		id: -2433104,
		name: {
			"en-gb": "Liliw",
		},
	},
	{
		id: -2433101,
		name: {
			"en-gb": "Lilit",
		},
	},
	{
		id: -2433084,
		name: {
			"en-gb": "Lila",
		},
	},
	{
		id: -2433032,
		name: {
			"en-gb": "Ligao",
		},
	},
	{
		id: -2433019,
		name: {
			"en-gb": "Lidlidda",
		},
	},
	{
		id: -2432980,
		name: {
			"en-gb": "Liciada",
		},
	},
	{
		id: -2432934,
		name: {
			"en-gb": "Libuak",
		},
	},
	{
		id: -2432927,
		name: {
			"en-gb": "Libtong",
		},
	},
	{
		id: -2432873,
		name: {
			"en-gb": "Libmanan",
		},
	},
	{
		id: -2432833,
		name: {
			"en-gb": "Libertad",
		},
	},
	{
		id: -2432827,
		name: {
			"en-gb": "Libertad",
		},
	},
	{
		id: -2432825,
		name: {
			"en-gb": "Libertad",
		},
	},
	{
		id: -2432820,
		name: {
			"en-gb": "Libertad",
		},
	},
	{
		id: -2432803,
		name: {
			"en-gb": "Libby",
		},
	},
	{
		id: -2432779,
		name: {
			"en-gb": "Libas",
		},
	},
	{
		id: -2432761,
		name: {
			"en-gb": "Libaong",
		},
	},
	{
		id: -2432751,
		name: {
			"en-gb": "Libagon",
		},
	},
	{
		id: -2432737,
		name: {
			"en-gb": "Lias",
		},
	},
	{
		id: -2432720,
		name: {
			"en-gb": "Lianga",
		},
	},
	{
		id: -2432714,
		name: {
			"en-gb": "Lian",
		},
	},
	{
		id: -2432700,
		name: {
			"en-gb": "Leyte",
		},
	},
	{
		id: -2432638,
		name: {
			"en-gb": "Lemery",
		},
	},
	{
		id: -2432611,
		name: {
			"en-gb": "Legazpi",
		},
	},
	{
		id: -2432610,
		name: {
			"en-gb": "Legaspi",
		},
	},
	{
		id: -2432577,
		name: {
			"en-gb": "Lazi",
		},
	},
	{
		id: -2432524,
		name: {
			"en-gb": "Laya",
		},
	},
	{
		id: -2432500,
		name: {
			"en-gb": "Lawi",
		},
	},
	{
		id: -2432482,
		name: {
			"en-gb": "Lawa-an",
		},
	},
	{
		id: -2432452,
		name: {
			"en-gb": "Laurel",
		},
	},
	{
		id: -2432439,
		name: {
			"en-gb": "La Union",
		},
	},
	{
		id: -2432373,
		name: {
			"en-gb": "La Trinidad",
		},
	},
	{
		id: -2432322,
		name: {
			"en-gb": "Las Pinas",
		},
	},
	{
		id: -2432310,
		name: {
			"en-gb": "Lasip Chico",
		},
	},
	{
		id: -2432272,
		name: {
			"en-gb": "Larena",
		},
	},
	{
		id: -2432228,
		name: {
			"en-gb": "Lapu-Lapu",
		},
	},
	{
		id: -2432214,
		name: {
			"en-gb": "Lapolapo",
		},
	},
	{
		id: -2432171,
		name: {
			"en-gb": "La Paz",
		},
	},
	{
		id: -2432167,
		name: {
			"en-gb": "La Paz",
		},
	},
	{
		id: -2432137,
		name: {
			"en-gb": "Lapasan",
		},
	},
	{
		id: -2432091,
		name: {
			"en-gb": "Laoag",
		},
	},
	{
		id: -2432079,
		name: {
			"en-gb": "Lanuza",
		},
	},
	{
		id: -2432028,
		name: {
			"en-gb": "Lanot",
		},
	},
	{
		id: -2431933,
		name: {
			"en-gb": "Langi-langiban",
		},
	},
	{
		id: -2431856,
		name: {
			"en-gb": "Landayan",
		},
	},
	{
		id: -2431827,
		name: {
			"en-gb": "Lanas",
		},
	},
	{
		id: -2431814,
		name: {
			"en-gb": "Lanao",
		},
	},
	{
		id: -2431800,
		name: {
			"en-gb": "Lanang",
		},
	},
	{
		id: -2431787,
		name: {
			"en-gb": "Lana",
		},
	},
	{
		id: -2431744,
		name: {
			"en-gb": "Lamonal",
		},
	},
	{
		id: -2431688,
		name: {
			"en-gb": "Lambug",
		},
	},
	{
		id: -2431686,
		name: {
			"en-gb": "Lamboon",
		},
	},
	{
		id: -2431579,
		name: {
			"en-gb": "Lalauigan",
		},
	},
	{
		id: -2431570,
		name: {
			"en-gb": "Lalao",
		},
	},
	{
		id: -2431549,
		name: {
			"en-gb": "Lalaan Segundo",
		},
	},
	{
		id: -2431548,
		name: {
			"en-gb": "Lalaan Primero",
		},
	},
	{
		id: -2431546,
		name: {
			"en-gb": "Lala",
		},
	},
	{
		id: -2431512,
		name: {
			"en-gb": "Laiya",
		},
	},
	{
		id: -2431504,
		name: {
			"en-gb": "Laiban",
		},
	},
	{
		id: -2431501,
		name: {
			"en-gb": "Lahug",
		},
	},
	{
		id: -2431495,
		name: {
			"en-gb": "Lahit",
		},
	},
	{
		id: -2431474,
		name: {
			"en-gb": "Lagundi",
		},
	},
	{
		id: -2431461,
		name: {
			"en-gb": "Laguna",
		},
	},
	{
		id: -2431418,
		name: {
			"en-gb": "Lagtang",
		},
	},
	{
		id: -2431393,
		name: {
			"en-gb": "Lago",
		},
	},
	{
		id: -2431357,
		name: {
			"en-gb": "Lagawe",
		},
	},
	{
		id: -2431341,
		name: {
			"en-gb": "Lagao III",
		},
	},
	{
		id: -2431338,
		name: {
			"en-gb": "Lagao",
		},
	},
	{
		id: -2431309,
		name: {
			"en-gb": "La Esperanza",
		},
	},
	{
		id: -2431261,
		name: {
			"en-gb": "La Carlota",
		},
	},
	{
		id: -2431221,
		name: {
			"en-gb": "Labrador",
		},
	},
	{
		id: -2431219,
		name: {
			"en-gb": "Labrador",
		},
	},
	{
		id: -2431157,
		name: {
			"en-gb": "Labayo",
		},
	},
	{
		id: -2431151,
		name: {
			"en-gb": "Labason",
		},
	},
	{
		id: -2431130,
		name: {
			"en-gb": "Labangon",
		},
	},
	{
		id: -2431129,
		name: {
			"en-gb": "Labangon",
		},
	},
	{
		id: -2431114,
		name: {
			"en-gb": "Labangal",
		},
	},
	{
		id: -2431093,
		name: {
			"en-gb": "Kuyambay",
		},
	},
	{
		id: -2431088,
		name: {
			"en-gb": "Kutkot",
		},
	},
	{
		id: -2431034,
		name: {
			"en-gb": "Kulisig",
		},
	},
	{
		id: -2430997,
		name: {
			"en-gb": "Kulajao",
		},
	},
	{
		id: -2430961,
		name: {
			"en-gb": "Koronadal",
		},
	},
	{
		id: -2430958,
		name: {
			"en-gb": "Coro",
		},
	},
	{
		id: -2430955,
		name: {
			"en-gb": "Kopiat",
		},
	},
	{
		id: -2430945,
		name: {
			"en-gb": "Komdong",
		},
	},
	{
		id: -2430858,
		name: {
			"en-gb": "Kisang",
		},
	},
	{
		id: -2430790,
		name: {
			"en-gb": "Kinatilan",
		},
	},
	{
		id: -2430765,
		name: {
			"en-gb": "Kinalupang",
		},
	},
	{
		id: -2430751,
		name: {
			"en-gb": "Kinalaglagan",
		},
	},
	{
		id: -2430738,
		name: {
			"en-gb": "Kinabutan",
		},
	},
	{
		id: -2430736,
		name: {
			"en-gb": "Kinablañgan",
		},
	},
	{
		id: -2430729,
		name: {
			"en-gb": "Kinabag-an",
		},
	},
	{
		id: -2430655,
		name: {
			"en-gb": "Kidapawan",
		},
	},
	{
		id: -2430623,
		name: {
			"en-gb": "Kiboar",
		},
	},
	{
		id: -2430606,
		name: {
			"en-gb": "Kibangay",
		},
	},
	{
		id: -2430535,
		name: {
			"en-gb": "Kay Ticulio",
		},
	},
	{
		id: -2430530,
		name: {
			"en-gb": "Kay Riapay",
		},
	},
	{
		id: -2430517,
		name: {
			"en-gb": "Kaykiwit",
		},
	},
	{
		id: -2430501,
		name: {
			"en-gb": "Kaybagal",
		},
	},
	{
		id: -2430483,
		name: {
			"en-gb": "Kayagan",
		},
	},
	{
		id: -2430474,
		name: {
			"en-gb": "Kawit",
		},
	},
	{
		id: -2430439,
		name: {
			"en-gb": "Kauswagan",
		},
	},
	{
		id: -2430420,
		name: {
			"en-gb": "Katungal",
		},
	},
	{
		id: -2430417,
		name: {
			"en-gb": "Catohugan",
		},
	},
	{
		id: -2430400,
		name: {
			"en-gb": "Katipunan",
		},
	},
	{
		id: -2430375,
		name: {
			"en-gb": "Catibac",
		},
	},
	{
		id: -2430321,
		name: {
			"en-gb": "Kasibu",
		},
	},
	{
		id: -2430285,
		name: {
			"en-gb": "Karasanan",
		},
	},
	{
		id: -2430274,
		name: {
			"en-gb": "Kaputian",
		},
	},
	{
		id: -2430213,
		name: {
			"en-gb": "San Fernando",
		},
	},
	{
		id: -2430147,
		name: {
			"en-gb": "Kansaloay",
		},
	},
	{
		id: -2429944,
		name: {
			"en-gb": "Kamansi",
		},
	},
	{
		id: -2429901,
		name: {
			"en-gb": "Kalumanga",
		},
	},
	{
		id: -2429893,
		name: {
			"en-gb": "Calubcob",
		},
	},
	{
		id: -2429880,
		name: {
			"en-gb": "Calumboyan",
		},
	},
	{
		id: -2429841,
		name: {
			"en-gb": "Kalibo",
		},
	},
	{
		id: -2429818,
		name: {
			"en-gb": "Kalawisan",
		},
	},
	{
		id: -2429572,
		name: {
			"en-gb": "Kabolo-an",
		},
	},
	{
		id: -2429539,
		name: {
			"en-gb": "Kabayan",
		},
	},
	{
		id: -2429503,
		name: {
			"en-gb": "Kabankalan",
		},
	},
	{
		id: -2429490,
		name: {
			"en-gb": "Kabalwa",
		},
	},
	{
		id: -2429456,
		name: {
			"en-gb": "Kababae",
		},
	},
	{
		id: -2429399,
		name: {
			"en-gb": "Jubasan",
		},
	},
	{
		id: -2429362,
		name: {
			"en-gb": "Jose Abad Santos",
		},
	},
	{
		id: -2429358,
		name: {
			"en-gb": "Joroan",
		},
	},
	{
		id: -2429354,
		name: {
			"en-gb": "Jordan",
		},
	},
	{
		id: -2429277,
		name: {
			"en-gb": "Jimalalud",
		},
	},
	{
		id: -2429233,
		name: {
			"en-gb": "Jayugan",
		},
	},
	{
		id: -2429217,
		name: {
			"en-gb": "Javalera",
		},
	},
	{
		id: -2429193,
		name: {
			"en-gb": "Jao Island",
		},
	},
	{
		id: -2429115,
		name: {
			"en-gb": "Jalang",
		},
	},
	{
		id: -2429112,
		name: {
			"en-gb": "Jalandoni",
		},
	},
	{
		id: -2429108,
		name: {
			"en-gb": "Jalajala",
		},
	},
	{
		id: -2429087,
		name: {
			"en-gb": "Jagna",
		},
	},
	{
		id: -2429080,
		name: {
			"en-gb": "Jagakhakin",
		},
	},
	{
		id: -2429070,
		name: {
			"en-gb": "Jaclupan",
		},
	},
	{
		id: -2429040,
		name: {
			"en-gb": "Ivisan",
		},
	},
	{
		id: -2429037,
		name: {
			"en-gb": "Ivana",
		},
	},
	{
		id: -2429024,
		name: {
			"en-gb": "Itogon",
		},
	},
	{
		id: -2429006,
		name: {
			"en-gb": "Itaytay",
		},
	},
	{
		id: -2428941,
		name: {
			"en-gb": "Isabel",
		},
	},
	{
		id: -2428936,
		name: {
			"en-gb": "Iruhin",
		},
	},
	{
		id: -2428933,
		name: {
			"en-gb": "Irosin",
		},
	},
	{
		id: -2428920,
		name: {
			"en-gb": "Iriga",
		},
	},
	{
		id: -2428905,
		name: {
			"en-gb": "Irahuan",
		},
	},
	{
		id: -2428882,
		name: {
			"en-gb": "Ipo",
		},
	},
	{
		id: -2428870,
		name: {
			"en-gb": "Ipil",
		},
	},
	{
		id: -2428863,
		name: {
			"en-gb": "Ipil",
		},
	},
	{
		id: -2428861,
		name: {
			"en-gb": "Ipil",
		},
	},
	{
		id: -2428851,
		name: {
			"en-gb": "Ipil",
		},
	},
	{
		id: -2428826,
		name: {
			"en-gb": "Inuayan",
		},
	},
	{
		id: -2428801,
		name: {
			"en-gb": "Inosloban",
		},
	},
	{
		id: -2428797,
		name: {
			"en-gb": "Inopacan",
		},
	},
	{
		id: -2428717,
		name: {
			"en-gb": "Infanta",
		},
	},
	{
		id: -2428692,
		name: {
			"en-gb": "Indang",
		},
	},
	{
		id: -2428685,
		name: {
			"en-gb": "Indahag",
		},
	},
	{
		id: -2428658,
		name: {
			"en-gb": "Inayagan",
		},
	},
	{
		id: -2428636,
		name: {
			"en-gb": "Inapulangan",
		},
	},
	{
		id: -2428618,
		name: {
			"en-gb": "Inandeng",
		},
	},
	{
		id: -2428609,
		name: {
			"en-gb": "Inamotan",
		},
	},
	{
		id: -2428548,
		name: {
			"en-gb": "Imus",
		},
	},
	{
		id: -2428456,
		name: {
			"en-gb": "Iloilo City",
		},
	},
	{
		id: -2428448,
		name: {
			"en-gb": "Ilog Patulo",
		},
	},
	{
		id: -2428447,
		name: {
			"en-gb": "Ilogmalino",
		},
	},
	{
		id: -2428376,
		name: {
			"en-gb": "Iligan",
		},
	},
	{
		id: -2428358,
		name: {
			"en-gb": "Ilayang Dupay",
		},
	},
	{
		id: -2428355,
		name: {
			"en-gb": "Ilayang Bukal",
		},
	},
	{
		id: -2428314,
		name: {
			"en-gb": "Ilagan",
		},
	},
	{
		id: -2428301,
		name: {
			"en-gb": "Ik-ik",
		},
	},
	{
		id: -2428204,
		name: {
			"en-gb": "Igcauayan",
		},
	},
	{
		id: -2428109,
		name: {
			"en-gb": "Ichon",
		},
	},
	{
		id: -2428064,
		name: {
			"en-gb": "Ibarra",
		},
	},
	{
		id: -2428053,
		name: {
			"en-gb": "Ibajay",
		},
	},
	{
		id: -2428029,
		name: {
			"en-gb": "Ibaba",
		},
	},
	{
		id: -2428026,
		name: {
			"en-gb": "Ibaan",
		},
	},
	{
		id: -2428020,
		name: {
			"en-gb": "Iba",
		},
	},
	{
		id: -2428019,
		name: {
			"en-gb": "Iba",
		},
	},
	{
		id: -2427981,
		name: {
			"en-gb": "Humayhumay",
		},
	},
	{
		id: -2427972,
		name: {
			"en-gb": "Hulugan",
		},
	},
	{
		id: -2427860,
		name: {
			"en-gb": "Hinunangan",
		},
	},
	{
		id: -2427844,
		name: {
			"en-gb": "Hinoba-an",
		},
	},
	{
		id: -2427835,
		name: {
			"en-gb": "Hinigaran",
		},
	},
	{
		id: -2427825,
		name: {
			"en-gb": "Hingin",
		},
	},
	{
		id: -2427811,
		name: {
			"en-gb": "Hindang",
		},
	},
	{
		id: -2427801,
		name: {
			"en-gb": "Hinatuan",
		},
	},
	{
		id: -2427759,
		name: {
			"en-gb": "Himensulan",
		},
	},
	{
		id: -2427752,
		name: {
			"en-gb": "Gimaylan",
		},
	},
	{
		id: -2427750,
		name: {
			"en-gb": "Himay-añgan",
		},
	},
	{
		id: -2427714,
		name: {
			"en-gb": "Hilongos",
		},
	},
	{
		id: -2427692,
		name: {
			"en-gb": "Hijo",
		},
	},
	{
		id: -2427627,
		name: {
			"en-gb": "Hermosa",
		},
	},
	{
		id: -2427547,
		name: {
			"en-gb": "Hamtic",
		},
	},
	{
		id: -2427532,
		name: {
			"en-gb": "Hamilo",
		},
	},
	{
		id: -2427500,
		name: {
			"en-gb": "Halayhay",
		},
	},
	{
		id: -2427493,
		name: {
			"en-gb": "Halang",
		},
	},
	{
		id: -2427491,
		name: {
			"en-gb": "Halang",
		},
	},
	{
		id: -2427484,
		name: {
			"en-gb": "Halabang Talaytay",
		},
	},
	{
		id: -2427458,
		name: {
			"en-gb": "Hagdan",
		},
	},
	{
		id: -2427404,
		name: {
			"en-gb": "Guyong",
		},
	},
	{
		id: -2427389,
		name: {
			"en-gb": "Gutivan",
		},
	},
	{
		id: -2427341,
		name: {
			"en-gb": "Gun-ob",
		},
	},
	{
		id: -2427301,
		name: {
			"en-gb": "Gumamela",
		},
	},
	{
		id: -2427286,
		name: {
			"en-gb": "Gulod",
		},
	},
	{
		id: -2427270,
		name: {
			"en-gb": "Gulam",
		},
	},
	{
		id: -2427263,
		name: {
			"en-gb": "Guizo",
		},
	},
	{
		id: -2427254,
		name: {
			"en-gb": "Guiwanon",
		},
	},
	{
		id: -2427253,
		name: {
			"en-gb": "Guiwang",
		},
	},
	{
		id: -2427246,
		name: {
			"en-gb": "Guiuan",
		},
	},
	{
		id: -2427233,
		name: {
			"en-gb": "Guisokan",
		},
	},
	{
		id: -2427181,
		name: {
			"en-gb": "Guinting",
		},
	},
	{
		id: -2427175,
		name: {
			"en-gb": "Guinticgan",
		},
	},
	{
		id: -2427156,
		name: {
			"en-gb": "Guinsuan",
		},
	},
	{
		id: -2427154,
		name: {
			"en-gb": "Guinisiliban",
		},
	},
	{
		id: -2427125,
		name: {
			"en-gb": "Guinobatan",
		},
	},
	{
		id: -2427073,
		name: {
			"en-gb": "Guindulman",
		},
	},
	{
		id: -2427062,
		name: {
			"en-gb": "Guindapunan",
		},
	},
	{
		id: -2427027,
		name: {
			"en-gb": "Guinauayan",
		},
	},
	{
		id: -2426965,
		name: {
			"en-gb": "Guimbal",
		},
	},
	{
		id: -2426961,
		name: {
			"en-gb": "Guimba",
		},
	},
	{
		id: -2426929,
		name: {
			"en-gb": "Guihulngan",
		},
	},
	{
		id: -2426918,
		name: {
			"en-gb": "Guiguinto",
		},
	},
	{
		id: -2426916,
		name: {
			"en-gb": "Guiguilonen",
		},
	},
	{
		id: -2426848,
		name: {
			"en-gb": "Gubat",
		},
	},
	{
		id: -2426821,
		name: {
			"en-gb": "Guagua",
		},
	},
	{
		id: -2426819,
		name: {
			"en-gb": "Guadalupe Viejo",
		},
	},
	{
		id: -2426818,
		name: {
			"en-gb": "Guadalupe Station",
		},
	},
	{
		id: -2426807,
		name: {
			"en-gb": "Guadalupe",
		},
	},
	{
		id: -2426768,
		name: {
			"en-gb": "Great Bakkungan",
		},
	},
	{
		id: -2426757,
		name: {
			"en-gb": "Granada",
		},
	},
	{
		id: -2426633,
		name: {
			"en-gb": "Gloria",
		},
	},
	{
		id: -2426627,
		name: {
			"en-gb": "Glan",
		},
	},
	{
		id: -2426614,
		name: {
			"en-gb": "Gitagun",
		},
	},
	{
		id: -2426571,
		name: {
			"en-gb": "Gingoog",
		},
	},
	{
		id: -2426557,
		name: {
			"en-gb": "Gindi",
		},
	},
	{
		id: -2426537,
		name: {
			"en-gb": "Ginagoman",
		},
	},
	{
		id: -2426460,
		name: {
			"en-gb": "Gibon",
		},
	},
	{
		id: -2426431,
		name: {
			"en-gb": "General Trias",
		},
	},
	{
		id: -2426427,
		name: {
			"en-gb": "General Tinio",
		},
	},
	{
		id: -2426423,
		name: {
			"en-gb": "General Santos",
		},
	},
	{
		id: -2426399,
		name: {
			"en-gb": "General Luna",
		},
	},
	{
		id: -2426392,
		name: {
			"en-gb": "General Emilio Aguinaldo",
		},
	},
	{
		id: -2426388,
		name: {
			"en-gb": "General Climaco",
		},
	},
	{
		id: -2426318,
		name: {
			"en-gb": "Gate",
		},
	},
	{
		id: -2426291,
		name: {
			"en-gb": "Gasan",
		},
	},
	{
		id: -2426260,
		name: {
			"en-gb": "Garcia Hernandez",
		},
	},
	{
		id: -2426215,
		name: {
			"en-gb": "Gao-oa",
		},
	},
	{
		id: -2426096,
		name: {
			"en-gb": "Galicias",
		},
	},
	{
		id: -2426057,
		name: {
			"en-gb": "Gairan",
		},
	},
	{
		id: -2425973,
		name: {
			"en-gb": "Gaboc",
		},
	},
	{
		id: -2425969,
		name: {
			"en-gb": "Gabi",
		},
	},
	{
		id: -2425960,
		name: {
			"en-gb": "Gabayan",
		},
	},
	{
		id: -2425929,
		name: {
			"en-gb": "Ga-ang",
		},
	},
	{
		id: -2425883,
		name: {
			"en-gb": "Fuerte",
		},
	},
	{
		id: -2425880,
		name: {
			"en-gb": "Fuente",
		},
	},
	{
		id: -2425859,
		name: {
			"en-gb": "Fort Stotsenburg",
		},
	},
	{
		id: -2425851,
		name: {
			"en-gb": "Fort Bonifacio",
		},
	},
	{
		id: -2425848,
		name: {
			"en-gb": "Forestry",
		},
	},
	{
		id: -2425839,
		name: {
			"en-gb": "Floridablanca",
		},
	},
	{
		id: -2425796,
		name: {
			"en-gb": "Ferrol",
		},
	},
	{
		id: -2425758,
		name: {
			"en-gb": "Fagbobo",
		},
	},
	{
		id: -2425702,
		name: {
			"en-gb": "Estancia",
		},
	},
	{
		id: -2425664,
		name: {
			"en-gb": "Esperanza",
		},
	},
	{
		id: -2425663,
		name: {
			"en-gb": "Esperanza",
		},
	},
	{
		id: -2425631,
		name: {
			"en-gb": "Escuala",
		},
	},
	{
		id: -2425584,
		name: {
			"en-gb": "Enrique Villanueva",
		},
	},
	{
		id: -2425580,
		name: {
			"en-gb": "Enrique B. Magalona",
		},
	},
	{
		id: -2425533,
		name: {
			"en-gb": "Embarcadero",
		},
	},
	{
		id: -2425520,
		name: {
			"en-gb": "El Nido",
		},
	},
	{
		id: -2425475,
		name: {
			"en-gb": "Echague",
		},
	},
	{
		id: -2425435,
		name: {
			"en-gb": "Duyong",
		},
	},
	{
		id: -2425344,
		name: {
			"en-gb": "Dunga",
		},
	},
	{
		id: -2425295,
		name: {
			"en-gb": "Dumarao",
		},
	},
	{
		id: -2425288,
		name: {
			"en-gb": "Dumaran",
		},
	},
	{
		id: -2425272,
		name: {
			"en-gb": "Dumanjug",
		},
	},
	{
		id: -2425249,
		name: {
			"en-gb": "Dumalalig",
		},
	},
	{
		id: -2425232,
		name: {
			"en-gb": "Dumaguete",
		},
	},
	{
		id: -2425208,
		name: {
			"en-gb": "Dulongabong",
		},
	},
	{
		id: -2425200,
		name: {
			"en-gb": "Duljo",
		},
	},
	{
		id: -2425194,
		name: {
			"en-gb": "Duli",
		},
	},
	{
		id: -2425177,
		name: {
			"en-gb": "Dulangan",
		},
	},
	{
		id: -2425167,
		name: {
			"en-gb": "Dulag",
		},
	},
	{
		id: -2425150,
		name: {
			"en-gb": "Duhat",
		},
	},
	{
		id: -2425034,
		name: {
			"en-gb": "Doot",
		},
	},
	{
		id: -2425019,
		name: {
			"en-gb": "Donsol",
		},
	},
	{
		id: -2424967,
		name: {
			"en-gb": "Domlog",
		},
	},
	{
		id: -2424947,
		name: {
			"en-gb": "Domampot",
		},
	},
	{
		id: -2424929,
		name: {
			"en-gb": "Dolores",
		},
	},
	{
		id: -2424928,
		name: {
			"en-gb": "Dolores",
		},
	},
	{
		id: -2424925,
		name: {
			"en-gb": "Dolores",
		},
	},
	{
		id: -2424923,
		name: {
			"en-gb": "Dolores",
		},
	},
	{
		id: -2424863,
		name: {
			"en-gb": "Djora",
		},
	},
	{
		id: -2424810,
		name: {
			"en-gb": "Ditali",
		},
	},
	{
		id: -2424759,
		name: {
			"en-gb": "Dipulao",
		},
	},
	{
		id: -2424753,
		name: {
			"en-gb": "Dipolog",
		},
	},
	{
		id: -2424745,
		name: {
			"en-gb": "Dipintin",
		},
	},
	{
		id: -2424726,
		name: {
			"en-gb": "Dipaculao",
		},
	},
	{
		id: -2424687,
		name: {
			"en-gb": "Dingin",
		},
	},
	{
		id: -2424682,
		name: {
			"en-gb": "Dingalan",
		},
	},
	{
		id: -2424659,
		name: {
			"en-gb": "Dinalupihan",
		},
	},
	{
		id: -2424635,
		name: {
			"en-gb": "Dinagkita",
		},
	},
	{
		id: -2424624,
		name: {
			"en-gb": "Dinadiwan",
		},
	},
	{
		id: -2424611,
		name: {
			"en-gb": "Dimiao",
		},
	},
	{
		id: -2424537,
		name: {
			"en-gb": "Dilasag",
		},
	},
	{
		id: -2424526,
		name: {
			"en-gb": "Dilao",
		},
	},
	{
		id: -2424468,
		name: {
			"en-gb": "Digos",
		},
	},
	{
		id: -2424367,
		name: {
			"en-gb": "Dibacvaquen",
		},
	},
	{
		id: -2424268,
		name: {
			"en-gb": "Demabuno",
		},
	},
	{
		id: -2424263,
		name: {
			"en-gb": "Del Rosario",
		},
	},
	{
		id: -2424262,
		name: {
			"en-gb": "Del Rosario",
		},
	},
	{
		id: -2424250,
		name: {
			"en-gb": "Del Pilar",
		},
	},
	{
		id: -2424207,
		name: {
			"en-gb": "Del Carmen",
		},
	},
	{
		id: -2424198,
		name: {
			"en-gb": "De la Paz",
		},
	},
	{
		id: -2424192,
		name: {
			"en-gb": "De la Paz",
		},
	},
	{
		id: -2424167,
		name: {
			"en-gb": "Decalachao",
		},
	},
	{
		id: -2424161,
		name: {
			"en-gb": "Debutunan",
		},
	},
	{
		id: -2424110,
		name: {
			"en-gb": "Dayap",
		},
	},
	{
		id: -2424107,
		name: {
			"en-gb": "Dayap",
		},
	},
	{
		id: -2424087,
		name: {
			"en-gb": "Dawis",
		},
	},
	{
		id: -2424066,
		name: {
			"en-gb": "Davao City",
		},
	},
	{
		id: -2424048,
		name: {
			"en-gb": "Dauis",
		},
	},
	{
		id: -2424045,
		name: {
			"en-gb": "Dauin",
		},
	},
	{
		id: -2424040,
		name: {
			"en-gb": "Dau",
		},
	},
	{
		id: -2424037,
		name: {
			"en-gb": "Datu Tungkaling",
		},
	},
	{
		id: -2423984,
		name: {
			"en-gb": "Dasmariñas",
		},
	},
	{
		id: -2423977,
		name: {
			"en-gb": "Dasag",
		},
	},
	{
		id: -2423960,
		name: {
			"en-gb": "Daro",
		},
	},
	{
		id: -2423946,
		name: {
			"en-gb": "Dardara",
		},
	},
	{
		id: -2423906,
		name: {
			"en-gb": "Daraga",
		},
	},
	{
		id: -2423905,
		name: {
			"en-gb": "Daraga",
		},
	},
	{
		id: -2423872,
		name: {
			"en-gb": "Dapitan",
		},
	},
	{
		id: -2423871,
		name: {
			"en-gb": "Dapitan",
		},
	},
	{
		id: -2423836,
		name: {
			"en-gb": "Dapdap",
		},
	},
	{
		id: -2423796,
		name: {
			"en-gb": "Dapa",
		},
	},
	{
		id: -2423774,
		name: {
			"en-gb": "Dao",
		},
	},
	{
		id: -2423770,
		name: {
			"en-gb": "Dao",
		},
	},
	{
		id: -2423721,
		name: {
			"en-gb": "Dangui",
		},
	},
	{
		id: -2423679,
		name: {
			"en-gb": "Danet",
		},
	},
	{
		id: -2423657,
		name: {
			"en-gb": "Danauan",
		},
	},
	{
		id: -2423609,
		name: {
			"en-gb": "Danao City",
		},
	},
	{
		id: -2423606,
		name: {
			"en-gb": "Danao",
		},
	},
	{
		id: -2423601,
		name: {
			"en-gb": "Danao",
		},
	},
	{
		id: -2423572,
		name: {
			"en-gb": "Dampol",
		},
	},
	{
		id: -2423556,
		name: {
			"en-gb": "Dampalan",
		},
	},
	{
		id: -2423517,
		name: {
			"en-gb": "Damasanan",
		},
	},
	{
		id: -2423485,
		name: {
			"en-gb": "Dalumpinas Oeste",
		},
	},
	{
		id: -2423391,
		name: {
			"en-gb": "Daliao",
		},
	},
	{
		id: -2423356,
		name: {
			"en-gb": "Dalaya",
		},
	},
	{
		id: -2423323,
		name: {
			"en-gb": "Dalahikak",
		},
	},
	{
		id: -2423307,
		name: {
			"en-gb": "Dalahican",
		},
	},
	{
		id: -2423302,
		name: {
			"en-gb": "Dalaguete",
		},
	},
	{
		id: -2423232,
		name: {
			"en-gb": "Dahikan",
		},
	},
	{
		id: -2423210,
		name: {
			"en-gb": "Dagupan",
		},
	},
	{
		id: -2423158,
		name: {
			"en-gb": "Dagatan",
		},
	},
	{
		id: -2423155,
		name: {
			"en-gb": "Dagatan",
		},
	},
	{
		id: -2423121,
		name: {
			"en-gb": "Daet",
		},
	},
	{
		id: -2423026,
		name: {
			"en-gb": "Daanglungsod",
		},
	},
	{
		id: -2423018,
		name: {
			"en-gb": "Daanbantayan",
		},
	},
	{
		id: -2422976,
		name: {
			"en-gb": "Cutad",
		},
	},
	{
		id: -2422960,
		name: {
			"en-gb": "Currimao",
		},
	},
	{
		id: -2422945,
		name: {
			"en-gb": "Cupang",
		},
	},
	{
		id: -2422917,
		name: {
			"en-gb": "Cumalisquis",
		},
	},
	{
		id: -2422878,
		name: {
			"en-gb": "Culion",
		},
	},
	{
		id: -2422868,
		name: {
			"en-gb": "Culiculi",
		},
	},
	{
		id: -2422784,
		name: {
			"en-gb": "Cuenca",
		},
	},
	{
		id: -2422741,
		name: {
			"en-gb": "Cubao",
		},
	},
	{
		id: -2422709,
		name: {
			"en-gb": "Cruz",
		},
	},
	{
		id: -2422639,
		name: {
			"en-gb": "Cotcot",
		},
	},
	{
		id: -2422630,
		name: {
			"en-gb": "Cotabato",
		},
	},
	{
		id: -2422567,
		name: {
			"en-gb": "Coron",
		},
	},
	{
		id: -2422547,
		name: {
			"en-gb": "Cordon",
		},
	},
	{
		id: -2422543,
		name: {
			"en-gb": "Cordova",
		},
	},
	{
		id: -2422492,
		name: {
			"en-gb": "Consuelo",
		},
	},
	{
		id: -2422477,
		name: {
			"en-gb": "Consolacion",
		},
	},
	{
		id: -2422406,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422401,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422396,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422390,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422389,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422385,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: -2422349,
		name: {
			"en-gb": "Compostela",
		},
	},
	{
		id: -2422347,
		name: {
			"en-gb": "Compostela",
		},
	},
	{
		id: -2422344,
		name: {
			"en-gb": "Compol",
		},
	},
	{
		id: -2422313,
		name: {
			"en-gb": "Comandante Carmona",
		},
	},
	{
		id: -2422282,
		name: {
			"en-gb": "Colonia Parcela Number One",
		},
	},
	{
		id: -2422274,
		name: {
			"en-gb": "Colongcolong",
		},
	},
	{
		id: -2422271,
		name: {
			"en-gb": "Colongcocon",
		},
	},
	{
		id: -2422268,
		name: {
			"en-gb": "Colon",
		},
	},
	{
		id: -2422258,
		name: {
			"en-gb": "Calo",
		},
	},
	{
		id: -2422233,
		name: {
			"en-gb": "Colaylayan",
		},
	},
	{
		id: -2422142,
		name: {
			"en-gb": "Cogon",
		},
	},
	{
		id: -2422135,
		name: {
			"en-gb": "Cogon",
		},
	},
	{
		id: -2422133,
		name: {
			"en-gb": "Cogon",
		},
	},
	{
		id: -2422042,
		name: {
			"en-gb": "Claver",
		},
	},
	{
		id: -2422035,
		name: {
			"en-gb": "Clarin",
		},
	},
	{
		id: -2422034,
		name: {
			"en-gb": "Clarin",
		},
	},
	{
		id: -2422029,
		name: {
			"en-gb": "Cituinan",
		},
	},
	{
		id: -2422008,
		name: {
			"en-gb": "Cilibin",
		},
	},
	{
		id: -2421966,
		name: {
			"en-gb": "Cheey",
		},
	},
	{
		id: -2421915,
		name: {
			"en-gb": "Central",
		},
	},
	{
		id: -2421900,
		name: {
			"en-gb": "Cemento",
		},
	},
	{
		id: -2421883,
		name: {
			"en-gb": "Cebu City",
		},
	},
	{
		id: -2421846,
		name: {
			"en-gb": "Caylungan",
		},
	},
	{
		id: -2421845,
		name: {
			"en-gb": "Caylaway",
		},
	},
	{
		id: -2421844,
		name: {
			"en-gb": "Caylaway",
		},
	},
	{
		id: -2421841,
		name: {
			"en-gb": "Cayerson",
		},
	},
	{
		id: -2421752,
		name: {
			"en-gb": "Cavite",
		},
	},
	{
		id: -2421744,
		name: {
			"en-gb": "Cavinti",
		},
	},
	{
		id: -2421664,
		name: {
			"en-gb": "Cauayan",
		},
	},
	{
		id: -2421653,
		name: {
			"en-gb": "Cauayan",
		},
	},
	{
		id: -2421617,
		name: {
			"en-gb": "Catulayan",
		},
	},
	{
		id: -2421549,
		name: {
			"en-gb": "Catmon",
		},
	},
	{
		id: -2421542,
		name: {
			"en-gb": "Catmon",
		},
	},
	{
		id: -2421505,
		name: {
			"en-gb": "Caticlan",
		},
	},
	{
		id: -2421480,
		name: {
			"en-gb": "Catbalogan",
		},
	},
	{
		id: -2421465,
		name: {
			"en-gb": "Catarman",
		},
	},
	{
		id: -2421464,
		name: {
			"en-gb": "Catarman",
		},
	},
	{
		id: -2421461,
		name: {
			"en-gb": "Catarman",
		},
	},
	{
		id: -2421460,
		name: {
			"en-gb": "Catarman",
		},
	},
	{
		id: -2421446,
		name: {
			"en-gb": "Catangnan",
		},
	},
	{
		id: -2421435,
		name: {
			"en-gb": "Catandaan",
		},
	},
	{
		id: -2421431,
		name: {
			"en-gb": "Catanauan",
		},
	},
	{
		id: -2421381,
		name: {
			"en-gb": "Catagnan",
		},
	},
	{
		id: -2421364,
		name: {
			"en-gb": "Catadman",
		},
	},
	{
		id: -2421311,
		name: {
			"en-gb": "Castillejos",
		},
	},
	{
		id: -2421286,
		name: {
			"en-gb": "Casisang",
		},
	},
	{
		id: -2421236,
		name: {
			"en-gb": "Casiguran",
		},
	},
	{
		id: -2421235,
		name: {
			"en-gb": "Casiguran",
		},
	},
	{
		id: -2421219,
		name: {
			"en-gb": "Casian",
		},
	},
	{
		id: -2421213,
		name: {
			"en-gb": "Casboran",
		},
	},
	{
		id: -2421212,
		name: {
			"en-gb": "Casbo",
		},
	},
	{
		id: -2421174,
		name: {
			"en-gb": "Casambalangan",
		},
	},
	{
		id: -2421156,
		name: {
			"en-gb": "Carusipan",
		},
	},
	{
		id: -2421132,
		name: {
			"en-gb": "Carriedo",
		},
	},
	{
		id: -2421131,
		name: {
			"en-gb": "Carreta",
		},
	},
	{
		id: -2421115,
		name: {
			"en-gb": "Carpenito",
		},
	},
	{
		id: -2421085,
		name: {
			"en-gb": "Carnaza",
		},
	},
	{
		id: -2421080,
		name: {
			"en-gb": "Carmona",
		},
	},
	{
		id: -2421067,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421063,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421058,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421054,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421052,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421051,
		name: {
			"en-gb": "Carmen",
		},
	},
	{
		id: -2421024,
		name: {
			"en-gb": "Carles",
		},
	},
	{
		id: -2420998,
		name: {
			"en-gb": "Cari Mayor",
		},
	},
	{
		id: -2420993,
		name: {
			"en-gb": "Carigara",
		},
	},
	{
		id: -2420969,
		name: {
			"en-gb": "Caridad",
		},
	},
	{
		id: -2420960,
		name: {
			"en-gb": "Cardona",
		},
	},
	{
		id: -2420950,
		name: {
			"en-gb": "Carcar",
		},
	},
	{
		id: -2420898,
		name: {
			"en-gb": "Carangan",
		},
	},
	{
		id: -2420878,
		name: {
			"en-gb": "Caramoan",
		},
	},
	{
		id: -2420792,
		name: {
			"en-gb": "Capul",
		},
	},
	{
		id: -2420677,
		name: {
			"en-gb": "Capaya",
		},
	},
	{
		id: -2420666,
		name: {
			"en-gb": "Capasan",
		},
	},
	{
		id: -2420661,
		name: {
			"en-gb": "Caparispisan",
		},
	},
	{
		id: -2420647,
		name: {
			"en-gb": "Capantolan",
		},
	},
	{
		id: -2420643,
		name: {
			"en-gb": "Capangpañyan",
		},
	},
	{
		id: -2420635,
		name: {
			"en-gb": "Capangdan",
		},
	},
	{
		id: -2420624,
		name: {
			"en-gb": "Capalonga",
		},
	},
	{
		id: -2420595,
		name: {
			"en-gb": "Caore",
		},
	},
	{
		id: -2420591,
		name: {
			"en-gb": "Caong",
		},
	},
	{
		id: -2420582,
		name: {
			"en-gb": "Caoayan",
		},
	},
	{
		id: -2420569,
		name: {
			"en-gb": "Canupao",
		},
	},
	{
		id: -2420520,
		name: {
			"en-gb": "Cantilan",
		},
	},
	{
		id: -2420494,
		name: {
			"en-gb": "Cantamoay",
		},
	},
	{
		id: -2420468,
		name: {
			"en-gb": "Cansojong",
		},
	},
	{
		id: -2420444,
		name: {
			"en-gb": "Cansayang",
		},
	},
	{
		id: -2420385,
		name: {
			"en-gb": "Canmaya",
		},
	},
	{
		id: -2420356,
		name: {
			"en-gb": "Canlubang",
		},
	},
	{
		id: -2420323,
		name: {
			"en-gb": "Canlalay",
		},
	},
	{
		id: -2420307,
		name: {
			"en-gb": "Canjalon",
		},
	},
	{
		id: -2420210,
		name: {
			"en-gb": "Cangmunag",
		},
	},
	{
		id: -2420205,
		name: {
			"en-gb": "Cangmalalag",
		},
	},
	{
		id: -2420186,
		name: {
			"en-gb": "Cangbaliguia",
		},
	},
	{
		id: -2420182,
		name: {
			"en-gb": "Cangatuyom",
		},
	},
	{
		id: -2420162,
		name: {
			"en-gb": "Canelar",
		},
	},
	{
		id: -2420151,
		name: {
			"en-gb": "Candulawan",
		},
	},
	{
		id: -2420147,
		name: {
			"en-gb": "Canduao Tanguhay",
		},
	},
	{
		id: -2420133,
		name: {
			"en-gb": "Candon",
		},
	},
	{
		id: -2420122,
		name: {
			"en-gb": "Candijay",
		},
	},
	{
		id: -2420112,
		name: {
			"en-gb": "Candelaria",
		},
	},
	{
		id: -2420110,
		name: {
			"en-gb": "Candelaria",
		},
	},
	{
		id: -2420085,
		name: {
			"en-gb": "Candaoay",
		},
	},
	{
		id: -2420058,
		name: {
			"en-gb": "Candabong",
		},
	},
	{
		id: -2420057,
		name: {
			"en-gb": "Candabong",
		},
	},
	{
		id: -2420054,
		name: {
			"en-gb": "Candaba",
		},
	},
	{
		id: -2420017,
		name: {
			"en-gb": "Canbugtang",
		},
	},
	{
		id: -2419945,
		name: {
			"en-gb": "Canaoay",
		},
	},
	{
		id: -2419930,
		name: {
			"en-gb": "Cañang",
		},
	},
	{
		id: -2419919,
		name: {
			"en-gb": "Canaman",
		},
	},
	{
		id: -2419886,
		name: {
			"en-gb": "Canagahan",
		},
	},
	{
		id: -2419856,
		name: {
			"en-gb": "Camuning",
		},
	},
	{
		id: -2419843,
		name: {
			"en-gb": "Camp Wilhelm",
		},
	},
	{
		id: -2419831,
		name: {
			"en-gb": "Camp Seven",
		},
	},
	{
		id: -2419802,
		name: {
			"en-gb": "Campo Cuatro-Seis and Ta-ok",
		},
	},
	{
		id: -2419799,
		name: {
			"en-gb": "Campo",
		},
	},
	{
		id: -2419787,
		name: {
			"en-gb": "Camp John Hay",
		},
	},
	{
		id: -2419774,
		name: {
			"en-gb": "Camp Four",
		},
	},
	{
		id: -2419769,
		name: {
			"en-gb": "Camp Dtley",
		},
	},
	{
		id: -2419736,
		name: {
			"en-gb": "Campalanas",
		},
	},
	{
		id: -2419722,
		name: {
			"en-gb": "Camorong",
		},
	},
	{
		id: -2419714,
		name: {
			"en-gb": "Camisan",
		},
	},
	{
		id: -2419699,
		name: {
			"en-gb": "Camiling",
		},
	},
	{
		id: -2419692,
		name: {
			"en-gb": "Camiing",
		},
	},
	{
		id: -2419682,
		name: {
			"en-gb": "Camias",
		},
	},
	{
		id: -2419667,
		name: {
			"en-gb": "Cambulo",
		},
	},
	{
		id: -2419633,
		name: {
			"en-gb": "Cambihang",
		},
	},
	{
		id: -2419609,
		name: {
			"en-gb": "Cambaro",
		},
	},
	{
		id: -2419456,
		name: {
			"en-gb": "Camaman",
		},
	},
	{
		id: -2419452,
		name: {
			"en-gb": "Camaliñgao",
		},
	},
	{
		id: -2419445,
		name: {
			"en-gb": "Camalig",
		},
	},
	{
		id: -2419440,
		name: {
			"en-gb": "Camalaniugan",
		},
	},
	{
		id: -2419412,
		name: {
			"en-gb": "Camaba-an",
		},
	},
	{
		id: -2419388,
		name: {
			"en-gb": "Caluya",
		},
	},
	{
		id: -2419385,
		name: {
			"en-gb": "Caluwayan",
		},
	},
	{
		id: -2419349,
		name: {
			"en-gb": "Calunasan",
		},
	},
	{
		id: -2419344,
		name: {
			"en-gb": "Calumpit",
		},
	},
	{
		id: -2419271,
		name: {
			"en-gb": "Calubian",
		},
	},
	{
		id: -2419090,
		name: {
			"en-gb": "Calingcuan",
		},
	},
	{
		id: -2419078,
		name: {
			"en-gb": "Calincamasan",
		},
	},
	{
		id: -2419075,
		name: {
			"en-gb": "Calinan",
		},
	},
	{
		id: -2419044,
		name: {
			"en-gb": "Calidñgan",
		},
	},
	{
		id: -2419036,
		name: {
			"en-gb": "Caliclic",
		},
	},
	{
		id: -2418971,
		name: {
			"en-gb": "Calbayog",
		},
	},
	{
		id: -2418960,
		name: {
			"en-gb": "Calayugan Norte",
		},
	},
	{
		id: -2418953,
		name: {
			"en-gb": "Calayo",
		},
	},
	{
		id: -2418911,
		name: {
			"en-gb": "Calauit",
		},
	},
	{
		id: -2418892,
		name: {
			"en-gb": "Calatrava",
		},
	},
	{
		id: -2418891,
		name: {
			"en-gb": "Calatrava",
		},
	},
	{
		id: -2418874,
		name: {
			"en-gb": "Calatagan",
		},
	},
	{
		id: -2418867,
		name: {
			"en-gb": "Calasuche",
		},
	},
	{
		id: -2418865,
		name: {
			"en-gb": "Calasiao",
		},
	},
	{
		id: -2418831,
		name: {
			"en-gb": "Calape",
		},
	},
	{
		id: -2418812,
		name: {
			"en-gb": "Calapan",
		},
	},
	{
		id: -2418808,
		name: {
			"en-gb": "Calapacuan",
		},
	},
	{
		id: -2418796,
		name: {
			"en-gb": "Calao",
		},
	},
	{
		id: -2418751,
		name: {
			"en-gb": "Calañgain",
		},
	},
	{
		id: -2418708,
		name: {
			"en-gb": "Calamisan",
		},
	},
	{
		id: -2418698,
		name: {
			"en-gb": "Calambua",
		},
	},
	{
		id: -2418690,
		name: {
			"en-gb": "Calamba",
		},
	},
	{
		id: -2418687,
		name: {
			"en-gb": "Calamba",
		},
	},
	{
		id: -2418623,
		name: {
			"en-gb": "Calacapan",
		},
	},
	{
		id: -2418619,
		name: {
			"en-gb": "Calaca",
		},
	},
	{
		id: -2418592,
		name: {
			"en-gb": "Calabayan",
		},
	},
	{
		id: -2418558,
		name: {
			"en-gb": "Calaanan",
		},
	},
	{
		id: -2418556,
		name: {
			"en-gb": "Cala-an",
		},
	},
	{
		id: -2418552,
		name: {
			"en-gb": "Cajugutan",
		},
	},
	{
		id: -2418546,
		name: {
			"en-gb": "Cajidiocan",
		},
	},
	{
		id: -2418529,
		name: {
			"en-gb": "Cainta",
		},
	},
	{
		id: -2418524,
		name: {
			"en-gb": "Caingin",
		},
	},
	{
		id: -2418411,
		name: {
			"en-gb": "Cagraray",
		},
	},
	{
		id: -2418304,
		name: {
			"en-gb": "Cagayuan",
		},
	},
	{
		id: -2418289,
		name: {
			"en-gb": "Cagayan de Oro",
		},
	},
	{
		id: -2418201,
		name: {
			"en-gb": "Cadiz Viejo",
		},
	},
	{
		id: -2418143,
		name: {
			"en-gb": "Cadaclan",
		},
	},
	{
		id: -2418127,
		name: {
			"en-gb": "Cacnipa Island",
		},
	},
	{
		id: -2418126,
		name: {
			"en-gb": "Caceres",
		},
	},
	{
		id: -2418086,
		name: {
			"en-gb": "Cabuyao",
		},
	},
	{
		id: -2418085,
		name: {
			"en-gb": "Cabuyao",
		},
	},
	{
		id: -2417955,
		name: {
			"en-gb": "Cabugao Norte",
		},
	},
	{
		id: -2417943,
		name: {
			"en-gb": "Cabugao",
		},
	},
	{
		id: -2417905,
		name: {
			"en-gb": "Cabug",
		},
	},
	{
		id: -2417801,
		name: {
			"en-gb": "Cabitbitnongan",
		},
	},
	{
		id: -2417753,
		name: {
			"en-gb": "Cabilang Baybay",
		},
	},
	{
		id: -2417644,
		name: {
			"en-gb": "Cabatuan",
		},
	},
	{
		id: -2417600,
		name: {
			"en-gb": "Cabaruan",
		},
	},
	{
		id: -2417587,
		name: {
			"en-gb": "Cabarroguis",
		},
	},
	{
		id: -2417578,
		name: {
			"en-gb": "Cabaroan",
		},
	},
	{
		id: -2417577,
		name: {
			"en-gb": "Cabaroan",
		},
	},
	{
		id: -2417505,
		name: {
			"en-gb": "Cabanglotan",
		},
	},
	{
		id: -2417490,
		name: {
			"en-gb": "Cabangaran",
		},
	},
	{
		id: -2417485,
		name: {
			"en-gb": "Cabangan",
		},
	},
	{
		id: -2417480,
		name: {
			"en-gb": "Cabangahan",
		},
	},
	{
		id: -2417456,
		name: {
			"en-gb": "Cabanatuan",
		},
	},
	{
		id: -2417420,
		name: {
			"en-gb": "Cabalic",
		},
	},
	{
		id: -2417407,
		name: {
			"en-gb": "Cabalawan",
		},
	},
	{
		id: -2417396,
		name: {
			"en-gb": "Cabalantian",
		},
	},
	{
		id: -2417329,
		name: {
			"en-gb": "Cabadbaran",
		},
	},
	{
		id: -2417318,
		name: {
			"en-gb": "Cabacongan",
		},
	},
	{
		id: -2417313,
		name: {
			"en-gb": "Cabacnitan",
		},
	},
	{
		id: -2417293,
		name: {
			"en-gb": "Caba",
		},
	},
	{
		id: -2417194,
		name: {
			"en-gb": "Buug",
		},
	},
	{
		id: -2417173,
		name: {
			"en-gb": "Butuan",
		},
	},
	{
		id: -2417096,
		name: {
			"en-gb": "Busuanga",
		},
	},
	{
		id: -2417094,
		name: {
			"en-gb": "Busuang",
		},
	},
	{
		id: -2417092,
		name: {
			"en-gb": "Bustos",
		},
	},
	{
		id: -2417029,
		name: {
			"en-gb": "Busay",
		},
	},
	{
		id: -2416994,
		name: {
			"en-gb": "Buruanga",
		},
	},
	{
		id: -2416912,
		name: {
			"en-gb": "Burgos",
		},
	},
	{
		id: -2416905,
		name: {
			"en-gb": "Burgos",
		},
	},
	{
		id: -2416904,
		name: {
			"en-gb": "Burgos",
		},
	},
	{
		id: -2416884,
		name: {
			"en-gb": "Burayoc",
		},
	},
	{
		id: -2416883,
		name: {
			"en-gb": "Burayoc",
		},
	},
	{
		id: -2416852,
		name: {
			"en-gb": "Burabud",
		},
	},
	{
		id: -2416765,
		name: {
			"en-gb": "Bunguyon",
		},
	},
	{
		id: -2416673,
		name: {
			"en-gb": "Bunga",
		},
	},
	{
		id: -2416609,
		name: {
			"en-gb": "Bunacan",
		},
	},
	{
		id: -2416595,
		name: {
			"en-gb": "Bulwa",
		},
	},
	{
		id: -2416588,
		name: {
			"en-gb": "Bulusan",
		},
	},
	{
		id: -2416555,
		name: {
			"en-gb": "Buluang",
		},
	},
	{
		id: -2416532,
		name: {
			"en-gb": "Bulsa",
		},
	},
	{
		id: -2416492,
		name: {
			"en-gb": "Buliran",
		},
	},
	{
		id: -2416475,
		name: {
			"en-gb": "Bulihan",
		},
	},
	{
		id: -2416474,
		name: {
			"en-gb": "Bulihan",
		},
	},
	{
		id: -2416419,
		name: {
			"en-gb": "Bulatukan",
		},
	},
	{
		id: -2416414,
		name: {
			"en-gb": "Bulata",
		},
	},
	{
		id: -2416382,
		name: {
			"en-gb": "Bulangon",
		},
	},
	{
		id: -2416378,
		name: {
			"en-gb": "Bulang",
		},
	},
	{
		id: -2416370,
		name: {
			"en-gb": "Bulan",
		},
	},
	{
		id: -2416353,
		name: {
			"en-gb": "Bulalakao",
		},
	},
	{
		id: -2416342,
		name: {
			"en-gb": "Bulalacao",
		},
	},
	{
		id: -2416335,
		name: {
			"en-gb": "Bulala",
		},
	},
	{
		id: -2416332,
		name: {
			"en-gb": "Bulala",
		},
	},
	{
		id: -2416296,
		name: {
			"en-gb": "Bulacao",
		},
	},
	{
		id: -2416290,
		name: {
			"en-gb": "Bulacan",
		},
	},
	{
		id: -2416259,
		name: {
			"en-gb": "Bukol",
		},
	},
	{
		id: -2416249,
		name: {
			"en-gb": "Bukidnon",
		},
	},
	{
		id: -2416243,
		name: {
			"en-gb": "Bukal Ilaya",
		},
	},
	{
		id: -2416237,
		name: {
			"en-gb": "Bukal",
		},
	},
	{
		id: -2416233,
		name: {
			"en-gb": "Bukal",
		},
	},
	{
		id: -2416224,
		name: {
			"en-gb": "Bukal",
		},
	},
	{
		id: -2416199,
		name: {
			"en-gb": "Buhisan",
		},
	},
	{
		id: -2416189,
		name: {
			"en-gb": "Buhi",
		},
	},
	{
		id: -2416171,
		name: {
			"en-gb": "Buhañgin",
		},
	},
	{
		id: -2416170,
		name: {
			"en-gb": "Buhañgin",
		},
	},
	{
		id: -2416164,
		name: {
			"en-gb": "Buhangin",
		},
	},
	{
		id: -2416163,
		name: {
			"en-gb": "Buhangin",
		},
	},
	{
		id: -2416099,
		name: {
			"en-gb": "Bugol",
		},
	},
	{
		id: -2416014,
		name: {
			"en-gb": "Bugallon",
		},
	},
	{
		id: -2416004,
		name: {
			"en-gb": "Bugaan",
		},
	},
	{
		id: -2415962,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415954,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415938,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415930,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415925,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415888,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415866,
		name: {
			"en-gb": "Buenavista",
		},
	},
	{
		id: -2415849,
		name: {
			"en-gb": "Bued",
		},
	},
	{
		id: -2415840,
		name: {
			"en-gb": "Buduk",
		},
	},
	{
		id: -2415798,
		name: {
			"en-gb": "Buco",
		},
	},
	{
		id: -2415768,
		name: {
			"en-gb": "Bucari",
		},
	},
	{
		id: -2415755,
		name: {
			"en-gb": "Zapang",
		},
	},
	{
		id: -2415710,
		name: {
			"en-gb": "Bubug",
		},
	},
	{
		id: -2415697,
		name: {
			"en-gb": "Bubos",
		},
	},
	{
		id: -2415610,
		name: {
			"en-gb": "Buagsong",
		},
	},
	{
		id: -2415580,
		name: {
			"en-gb": "Brooke's Point",
		},
	},
	{
		id: -2415574,
		name: {
			"en-gb": "Bretana",
		},
	},
	{
		id: -2415553,
		name: {
			"en-gb": "Boyog",
		},
	},
	{
		id: -2415551,
		name: {
			"en-gb": "Boyo",
		},
	},
	{
		id: -2415521,
		name: {
			"en-gb": "Botolan",
		},
	},
	{
		id: -2415477,
		name: {
			"en-gb": "Bosongon",
		},
	},
	{
		id: -2415470,
		name: {
			"en-gb": "Bosoboso",
		},
	},
	{
		id: -2415458,
		name: {
			"en-gb": "Borono",
		},
	},
	{
		id: -2415450,
		name: {
			"en-gb": "Borongan",
		},
	},
	{
		id: -2415436,
		name: {
			"en-gb": "Borocay",
		},
	},
	{
		id: -2415404,
		name: {
			"en-gb": "Borac",
		},
	},
	{
		id: -2415391,
		name: {
			"en-gb": "Booy",
		},
	},
	{
		id: -2415359,
		name: {
			"en-gb": "Bontoc",
		},
	},
	{
		id: -2415342,
		name: {
			"en-gb": "Bonot",
		},
	},
	{
		id: -2415311,
		name: {
			"en-gb": "Boni",
		},
	},
	{
		id: -2415235,
		name: {
			"en-gb": "Bongabon",
		},
	},
	{
		id: -2415217,
		name: {
			"en-gb": "Bonfal Proper",
		},
	},
	{
		id: -2415201,
		name: {
			"en-gb": "Boncol",
		},
	},
	{
		id: -2415190,
		name: {
			"en-gb": "Bonbonon",
		},
	},
	{
		id: -2415178,
		name: {
			"en-gb": "Bonbon",
		},
	},
	{
		id: -2415174,
		name: {
			"en-gb": "Bonbon",
		},
	},
	{
		id: -2415114,
		name: {
			"en-gb": "Bolosan",
		},
	},
	{
		id: -2415110,
		name: {
			"en-gb": "Bolos",
		},
	},
	{
		id: -2415101,
		name: {
			"en-gb": "Bolong",
		},
	},
	{
		id: -2415079,
		name: {
			"en-gb": "Bolod",
		},
	},
	{
		id: -2415076,
		name: {
			"en-gb": "Bolocboloc",
		},
	},
	{
		id: -2415071,
		name: {
			"en-gb": "Bolobolo",
		},
	},
	{
		id: -2415062,
		name: {
			"en-gb": "Bolo",
		},
	},
	{
		id: -2415041,
		name: {
			"en-gb": "Boljoon",
		},
	},
	{
		id: -2415021,
		name: {
			"en-gb": "Bolinao",
		},
	},
	{
		id: -2415020,
		name: {
			"en-gb": "Bolinao",
		},
	},
	{
		id: -2415008,
		name: {
			"en-gb": "Bolicao",
		},
	},
	{
		id: -2414986,
		name: {
			"en-gb": "Bolboc",
		},
	},
	{
		id: -2414955,
		name: {
			"en-gb": "Bokbok",
		},
	},
	{
		id: -2414902,
		name: {
			"en-gb": "Bogo",
		},
	},
	{
		id: -2414848,
		name: {
			"en-gb": "Bocaue",
		},
	},
	{
		id: -2414774,
		name: {
			"en-gb": "Boayahon",
		},
	},
	{
		id: -2414766,
		name: {
			"en-gb": "Boal",
		},
	},
	{
		id: -2414764,
		name: {
			"en-gb": "Boagkoan",
		},
	},
	{
		id: -2414760,
		name: {
			"en-gb": "Boac",
		},
	},
	{
		id: -2414569,
		name: {
			"en-gb": "Bislig",
		},
	},
	{
		id: -2414545,
		name: {
			"en-gb": "Birong",
		},
	},
	{
		id: -2414477,
		name: {
			"en-gb": "Binuclutan",
		},
	},
	{
		id: -2414474,
		name: {
			"en-gb": "Binubusan",
		},
	},
	{
		id: -2414422,
		name: {
			"en-gb": "Binorocbasocan",
		},
	},
	{
		id: -2414420,
		name: {
			"en-gb": "Binoor",
		},
	},
	{
		id: -2414413,
		name: {
			"en-gb": "Binoni",
		},
	},
	{
		id: -2414380,
		name: {
			"en-gb": "Binmaley",
		},
	},
	{
		id: -2414362,
		name: {
			"en-gb": "Biningan",
		},
	},
	{
		id: -2414325,
		name: {
			"en-gb": "Bingawan",
		},
	},
	{
		id: -2414315,
		name: {
			"en-gb": "Bingag",
		},
	},
	{
		id: -2414244,
		name: {
			"en-gb": "Biñang Primero",
		},
	},
	{
		id: -2414241,
		name: {
			"en-gb": "Binangonan",
		},
	},
	{
		id: -2414219,
		name: {
			"en-gb": "Biñan",
		},
	},
	{
		id: -2414218,
		name: {
			"en-gb": "Binãn",
		},
	},
	{
		id: -2414207,
		name: {
			"en-gb": "Binalonan",
		},
	},
	{
		id: -2414100,
		name: {
			"en-gb": "Biluso",
		},
	},
	{
		id: -2414079,
		name: {
			"en-gb": "Bil-isan",
		},
	},
	{
		id: -2414039,
		name: {
			"en-gb": "Bilar",
		},
	},
	{
		id: -2414013,
		name: {
			"en-gb": "Biking",
		},
	},
	{
		id: -2413937,
		name: {
			"en-gb": "Bigaa",
		},
	},
	{
		id: -2413936,
		name: {
			"en-gb": "Bigaa",
		},
	},
	{
		id: -2413933,
		name: {
			"en-gb": "Bigaa",
		},
	},
	{
		id: -2413926,
		name: {
			"en-gb": "Biga",
		},
	},
	{
		id: -2413906,
		name: {
			"en-gb": "Bicutan",
		},
	},
	{
		id: -2413805,
		name: {
			"en-gb": "Betaug",
		},
	},
	{
		id: -2413743,
		name: {
			"en-gb": "Bengcag",
		},
	},
	{
		id: -2413683,
		name: {
			"en-gb": "Becques",
		},
	},
	{
		id: -2413666,
		name: {
			"en-gb": "Bayyating",
		},
	},
	{
		id: -2413630,
		name: {
			"en-gb": "Bayubay Sur",
		},
	},
	{
		id: -2413601,
		name: {
			"en-gb": "Bayon",
		},
	},
	{
		id: -2413600,
		name: {
			"en-gb": "Bayombong",
		},
	},
	{
		id: -2413529,
		name: {
			"en-gb": "Baybay",
		},
	},
	{
		id: -2413524,
		name: {
			"en-gb": "Bayawan",
		},
	},
	{
		id: -2413440,
		name: {
			"en-gb": "Bayabasan",
		},
	},
	{
		id: -2413422,
		name: {
			"en-gb": "Bayabas",
		},
	},
	{
		id: -2413409,
		name: {
			"en-gb": "Bay",
		},
	},
	{
		id: -2413397,
		name: {
			"en-gb": "Bawa",
		},
	},
	{
		id: -2413386,
		name: {
			"en-gb": "Bautista",
		},
	},
	{
		id: -2413362,
		name: {
			"en-gb": "Baugo",
		},
	},
	{
		id: -2413344,
		name: {
			"en-gb": "Bauang",
		},
	},
	{
		id: -2413336,
		name: {
			"en-gb": "Bauan",
		},
	},
	{
		id: -2413260,
		name: {
			"en-gb": "Batuan",
		},
	},
	{
		id: -2413092,
		name: {
			"en-gb": "Bateng",
		},
	},
	{
		id: -2413040,
		name: {
			"en-gb": "Batangas City",
		},
	},
	{
		id: -2413008,
		name: {
			"en-gb": "Batan",
		},
	},
	{
		id: -2413004,
		name: {
			"en-gb": "Batalbolol",
		},
	},
	{
		id: -2412981,
		name: {
			"en-gb": "Batac",
		},
	},
	{
		id: -2412952,
		name: {
			"en-gb": "Bassat",
		},
	},
	{
		id: -2412923,
		name: {
			"en-gb": "Basilisa",
		},
	},
	{
		id: -2412878,
		name: {
			"en-gb": "Basdiot",
		},
	},
	{
		id: -2412877,
		name: {
			"en-gb": "Basdio",
		},
	},
	{
		id: -2412875,
		name: {
			"en-gb": "Basdacu",
		},
	},
	{
		id: -2412870,
		name: {
			"en-gb": "Basco",
		},
	},
	{
		id: -2412866,
		name: {
			"en-gb": "Bascaran",
		},
	},
	{
		id: -2412853,
		name: {
			"en-gb": "Basay",
		},
	},
	{
		id: -2412851,
		name: {
			"en-gb": "Basaon",
		},
	},
	{
		id: -2412837,
		name: {
			"en-gb": "Basak",
		},
	},
	{
		id: -2412834,
		name: {
			"en-gb": "Basak",
		},
	},
	{
		id: -2412831,
		name: {
			"en-gb": "Basak",
		},
	},
	{
		id: -2412762,
		name: {
			"en-gb": "Barualite",
		},
	},
	{
		id: -2412760,
		name: {
			"en-gb": "Port Barton",
		},
	},
	{
		id: -2412741,
		name: {
			"en-gb": "Barraca",
		},
	},
	{
		id: -2412738,
		name: {
			"en-gb": "Barraca",
		},
	},
	{
		id: -2412729,
		name: {
			"en-gb": "Barotuan",
		},
	},
	{
		id: -2412723,
		name: {
			"en-gb": "Barotac Nuevo",
		},
	},
	{
		id: -2412680,
		name: {
			"en-gb": "Bariw",
		},
	},
	{
		id: -2412655,
		name: {
			"en-gb": "Baringin",
		},
	},
	{
		id: -2412552,
		name: {
			"en-gb": "Baras",
		},
	},
	{
		id: -2412551,
		name: {
			"en-gb": "Baras",
		},
	},
	{
		id: -2412541,
		name: {
			"en-gb": "Baras",
		},
	},
	{
		id: -2412529,
		name: {
			"en-gb": "Baraoas",
		},
	},
	{
		id: -2412512,
		name: {
			"en-gb": "Baranghauon",
		},
	},
	{
		id: -2412501,
		name: {
			"en-gb": "Barandal",
		},
	},
	{
		id: -2412364,
		name: {
			"en-gb": "Bantug",
		},
	},
	{
		id: -2412361,
		name: {
			"en-gb": "Bantud Hacienda",
		},
	},
	{
		id: -2412356,
		name: {
			"en-gb": "Bantonan",
		},
	},
	{
		id: -2412347,
		name: {
			"en-gb": "Bantolinao",
		},
	},
	{
		id: -2412324,
		name: {
			"en-gb": "Bantinguil",
		},
	},
	{
		id: -2412308,
		name: {
			"en-gb": "Bantigui",
		},
	},
	{
		id: -2412272,
		name: {
			"en-gb": "Bantayan Island",
		},
	},
	{
		id: -2412263,
		name: {
			"en-gb": "Bantay",
		},
	},
	{
		id: -2412254,
		name: {
			"en-gb": "Bantaoay",
		},
	},
	{
		id: -2412241,
		name: {
			"en-gb": "Bansud",
		},
	},
	{
		id: -2412182,
		name: {
			"en-gb": "Banlot",
		},
	},
	{
		id: -2412179,
		name: {
			"en-gb": "Banlik",
		},
	},
	{
		id: -2412133,
		name: {
			"en-gb": "Banilad",
		},
	},
	{
		id: -2412132,
		name: {
			"en-gb": "Banilad",
		},
	},
	{
		id: -2412116,
		name: {
			"en-gb": "Bani",
		},
	},
	{
		id: -2412107,
		name: {
			"en-gb": "Banhigan",
		},
	},
	{
		id: -2412097,
		name: {
			"en-gb": "Bangui",
		},
	},
	{
		id: -2412093,
		name: {
			"en-gb": "Bangued",
		},
	},
	{
		id: -2412027,
		name: {
			"en-gb": "Bangcusay",
		},
	},
	{
		id: -2412009,
		name: {
			"en-gb": "Bangcal",
		},
	},
	{
		id: -2411980,
		name: {
			"en-gb": "Bangar",
		},
	},
	{
		id: -2411968,
		name: {
			"en-gb": "Bañgantaliñga",
		},
	},
	{
		id: -2411924,
		name: {
			"en-gb": "Banga-an",
		},
	},
	{
		id: -2411911,
		name: {
			"en-gb": "Banga",
		},
	},
	{
		id: -2411878,
		name: {
			"en-gb": "Bancuan",
		},
	},
	{
		id: -2411858,
		name: {
			"en-gb": "Bancasan",
		},
	},
	{
		id: -2411854,
		name: {
			"en-gb": "Bancaobancao",
		},
	},
	{
		id: -2411839,
		name: {
			"en-gb": "Bancal",
		},
	},
	{
		id: -2411836,
		name: {
			"en-gb": "Bancal",
		},
	},
	{
		id: -2411833,
		name: {
			"en-gb": "Bancal",
		},
	},
	{
		id: -2411832,
		name: {
			"en-gb": "Bankal",
		},
	},
	{
		id: -2411828,
		name: {
			"en-gb": "Bancal",
		},
	},
	{
		id: -2411799,
		name: {
			"en-gb": "Banban",
		},
	},
	{
		id: -2411788,
		name: {
			"en-gb": "Banaybayan",
		},
	},
	{
		id: -2411775,
		name: {
			"en-gb": "Banaue",
		},
	},
	{
		id: -2411728,
		name: {
			"en-gb": "Banao",
		},
	},
	{
		id: -2411727,
		name: {
			"en-gb": "Banao",
		},
	},
	{
		id: -2411700,
		name: {
			"en-gb": "Banago",
		},
	},
	{
		id: -2411690,
		name: {
			"en-gb": "Banag",
		},
	},
	{
		id: -2411659,
		name: {
			"en-gb": "Banaba",
		},
	},
	{
		id: -2411650,
		name: {
			"en-gb": "Banaag",
		},
	},
	{
		id: -2411635,
		name: {
			"en-gb": "Bambang",
		},
	},
	{
		id: -2411562,
		name: {
			"en-gb": "Balulang",
		},
	},
	{
		id: -2411549,
		name: {
			"en-gb": "Balugonan",
		},
	},
	{
		id: -2411534,
		name: {
			"en-gb": "Balugang",
		},
	},
	{
		id: -2411487,
		name: {
			"en-gb": "Balubad",
		},
	},
	{
		id: -2411373,
		name: {
			"en-gb": "Balocbaloc",
		},
	},
	{
		id: -2411305,
		name: {
			"en-gb": "Baliuag",
		},
	},
	{
		id: -2411246,
		name: {
			"en-gb": "Balio",
		},
	},
	{
		id: -2411244,
		name: {
			"en-gb": "Balintiouac",
		},
	},
	{
		id: -2411232,
		name: {
			"en-gb": "Balintagac",
		},
	},
	{
		id: -2411217,
		name: {
			"en-gb": "Balingoan",
		},
	},
	{
		id: -2411208,
		name: {
			"en-gb": "Balingasay",
		},
	},
	{
		id: -2411201,
		name: {
			"en-gb": "Balingasag",
		},
	},
	{
		id: -2411194,
		name: {
			"en-gb": "Balindog",
		},
	},
	{
		id: -2411182,
		name: {
			"en-gb": "Balinaod",
		},
	},
	{
		id: -2411165,
		name: {
			"en-gb": "Balilihan",
		},
	},
	{
		id: -2411109,
		name: {
			"en-gb": "Balibaguhan",
		},
	},
	{
		id: -2411102,
		name: {
			"en-gb": "Balibago",
		},
	},
	{
		id: -2411099,
		name: {
			"en-gb": "Balibago",
		},
	},
	{
		id: -2411095,
		name: {
			"en-gb": "Balibago",
		},
	},
	{
		id: -2411077,
		name: {
			"en-gb": "Balhaan",
		},
	},
	{
		id: -2411058,
		name: {
			"en-gb": "Balete",
		},
	},
	{
		id: -2411048,
		name: {
			"en-gb": "Balete",
		},
	},
	{
		id: -2411034,
		name: {
			"en-gb": "Baler",
		},
	},
	{
		id: -2410988,
		name: {
			"en-gb": "Balbagon",
		},
	},
	{
		id: -2410985,
		name: {
			"en-gb": "Balayong",
		},
	},
	{
		id: -2410979,
		name: {
			"en-gb": "Balayon",
		},
	},
	{
		id: -2410962,
		name: {
			"en-gb": "Balayan",
		},
	},
	{
		id: -2410930,
		name: {
			"en-gb": "Balatocon",
		},
	},
	{
		id: -2410916,
		name: {
			"en-gb": "Balatero",
		},
	},
	{
		id: -2410887,
		name: {
			"en-gb": "Balasan",
		},
	},
	{
		id: -2410839,
		name: {
			"en-gb": "Balante",
		},
	},
	{
		id: -2410774,
		name: {
			"en-gb": "Balanga",
		},
	},
	{
		id: -2410750,
		name: {
			"en-gb": "Balamban",
		},
	},
	{
		id: -2410729,
		name: {
			"en-gb": "Balais",
		},
	},
	{
		id: -2410725,
		name: {
			"en-gb": "Balahaan",
		},
	},
	{
		id: -2410649,
		name: {
			"en-gb": "Balabagon",
		},
	},
	{
		id: -2410647,
		name: {
			"en-gb": "Balabago",
		},
	},
	{
		id: -2410636,
		name: {
			"en-gb": "Balabag",
		},
	},
	{
		id: -2410632,
		name: {
			"en-gb": "Balabag",
		},
	},
	{
		id: -2410627,
		name: {
			"en-gb": "Balabag",
		},
	},
	{
		id: -2410614,
		name: {
			"en-gb": "Bala-as",
		},
	},
	{
		id: -2410594,
		name: {
			"en-gb": "Baksan",
		},
	},
	{
		id: -2410578,
		name: {
			"en-gb": "Bakjawan",
		},
	},
	{
		id: -2410555,
		name: {
			"en-gb": "Bacayan",
		},
	},
	{
		id: -2410521,
		name: {
			"en-gb": "Bais",
		},
	},
	{
		id: -2410475,
		name: {
			"en-gb": "Bahi",
		},
	},
	{
		id: -2410467,
		name: {
			"en-gb": "Bahaytoro",
		},
	},
	{
		id: -2410401,
		name: {
			"en-gb": "Bagumbayan",
		},
	},
	{
		id: -2410361,
		name: {
			"en-gb": "Baguio",
		},
	},
	{
		id: -2410355,
		name: {
			"en-gb": "Baguinge",
		},
	},
	{
		id: -2410325,
		name: {
			"en-gb": "Bagua",
		},
	},
	{
		id: -2410249,
		name: {
			"en-gb": "Bagong Bayan",
		},
	},
	{
		id: -2410245,
		name: {
			"en-gb": "Bagongbayan",
		},
	},
	{
		id: -2410244,
		name: {
			"en-gb": "Bagongbayan",
		},
	},
	{
		id: -2410221,
		name: {
			"en-gb": "Bagolig",
		},
	},
	{
		id: -2410193,
		name: {
			"en-gb": "Bago",
		},
	},
	{
		id: -2410127,
		name: {
			"en-gb": "Bagasawe",
		},
	},
	{
		id: -2410105,
		name: {
			"en-gb": "Baganga",
		},
	},
	{
		id: -2410088,
		name: {
			"en-gb": "Bagalnga",
		},
	},
	{
		id: -2410073,
		name: {
			"en-gb": "Bagalañgit",
		},
	},
	{
		id: -2410072,
		name: {
			"en-gb": "Bagalangit",
		},
	},
	{
		id: -2409974,
		name: {
			"en-gb": "Bagac",
		},
	},
	{
		id: -2409962,
		name: {
			"en-gb": "Bagabag",
		},
	},
	{
		id: -2409927,
		name: {
			"en-gb": "Badoc",
		},
	},
	{
		id: -2409872,
		name: {
			"en-gb": "Badian",
		},
	},
	{
		id: -2409855,
		name: {
			"en-gb": "Badas",
		},
	},
	{
		id: -2409838,
		name: {
			"en-gb": "Bacyawan",
		},
	},
	{
		id: -2409826,
		name: {
			"en-gb": "Bacungan",
		},
	},
	{
		id: -2409757,
		name: {
			"en-gb": "Bacoor",
		},
	},
	{
		id: -2409732,
		name: {
			"en-gb": "Bacong",
		},
	},
	{
		id: -2409731,
		name: {
			"en-gb": "Bacong",
		},
	},
	{
		id: -2409724,
		name: {
			"en-gb": "Bacolor",
		},
	},
	{
		id: -2409707,
		name: {
			"en-gb": "Bacolod",
		},
	},
	{
		id: -2409706,
		name: {
			"en-gb": "Bacolod",
		},
	},
	{
		id: -2409687,
		name: {
			"en-gb": "Bacnotan",
		},
	},
	{
		id: -2409682,
		name: {
			"en-gb": "Bacnit",
		},
	},
	{
		id: -2409677,
		name: {
			"en-gb": "Baclayon",
		},
	},
	{
		id: -2409668,
		name: {
			"en-gb": "Baclaran",
		},
	},
	{
		id: -2409647,
		name: {
			"en-gb": "Baccuit",
		},
	},
	{
		id: -2409603,
		name: {
			"en-gb": "Bacani",
		},
	},
	{
		id: -2409590,
		name: {
			"en-gb": "Bacal",
		},
	},
	{
		id: -2409578,
		name: {
			"en-gb": "Bacacay",
		},
	},
	{
		id: -2409553,
		name: {
			"en-gb": "Babuy",
		},
	},
	{
		id: -2409494,
		name: {
			"en-gb": "Babak",
		},
	},
	{
		id: -2409486,
		name: {
			"en-gb": "Babag",
		},
	},
	{
		id: -2409467,
		name: {
			"en-gb": "Baas",
		},
	},
	{
		id: -2409457,
		name: {
			"en-gb": "Ba-an",
		},
	},
	{
		id: -2409450,
		name: {
			"en-gb": "Azpitia",
		},
	},
	{
		id: -2409449,
		name: {
			"en-gb": "Azagra",
		},
	},
	{
		id: -2409441,
		name: {
			"en-gb": "Ayusan Norte",
		},
	},
	{
		id: -2409439,
		name: {
			"en-gb": "Ayuquitan Viejo",
		},
	},
	{
		id: -2409335,
		name: {
			"en-gb": "Aumbay",
		},
	},
	{
		id: -2409289,
		name: {
			"en-gb": "Atimonan",
		},
	},
	{
		id: -2409263,
		name: {
			"en-gb": "Atabay",
		},
	},
	{
		id: -2409260,
		name: {
			"en-gb": "Atabay",
		},
	},
	{
		id: -2409244,
		name: {
			"en-gb": "Asturias",
		},
	},
	{
		id: -2409205,
		name: {
			"en-gb": "Asingan",
		},
	},
	{
		id: -2409199,
		name: {
			"en-gb": "Asin",
		},
	},
	{
		id: -2409174,
		name: {
			"en-gb": "Asgad",
		},
	},
	{
		id: -2409140,
		name: {
			"en-gb": "Arrabal",
		},
	},
	{
		id: -2409137,
		name: {
			"en-gb": "Arpili",
		},
	},
	{
		id: -2409132,
		name: {
			"en-gb": "Aroroy",
		},
	},
	{
		id: -2409128,
		name: {
			"en-gb": "Aropong",
		},
	},
	{
		id: -2409119,
		name: {
			"en-gb": "Arnedo",
		},
	},
	{
		id: -2409113,
		name: {
			"en-gb": "Aritao",
		},
	},
	{
		id: -2409104,
		name: {
			"en-gb": "Aringay",
		},
	},
	{
		id: -2409081,
		name: {
			"en-gb": "Argao",
		},
	},
	{
		id: -2409050,
		name: {
			"en-gb": "Arayat",
		},
	},
	{
		id: -2409038,
		name: {
			"en-gb": "Ar-aro-o",
		},
	},
	{
		id: -2409003,
		name: {
			"en-gb": "Araceli",
		},
	},
	{
		id: -2408985,
		name: {
			"en-gb": "Apurahuan",
		},
	},
	{
		id: -2408928,
		name: {
			"en-gb": "Aplaya",
		},
	},
	{
		id: -2408927,
		name: {
			"en-gb": "Aplaya",
		},
	},
	{
		id: -2408861,
		name: {
			"en-gb": "Apalit",
		},
	},
	{
		id: -2408854,
		name: {
			"en-gb": "Apaleng",
		},
	},
	{
		id: -2408816,
		name: {
			"en-gb": "Anunas",
		},
	},
	{
		id: -2408807,
		name: {
			"en-gb": "Anuling",
		},
	},
	{
		id: -2408773,
		name: {
			"en-gb": "Antipolo",
		},
	},
	{
		id: -2408728,
		name: {
			"en-gb": "Antadao",
		},
	},
	{
		id: -2408717,
		name: {
			"en-gb": "Anos",
		},
	},
	{
		id: -2408685,
		name: {
			"en-gb": "Anomang Mayor",
		},
	},
	{
		id: -2408650,
		name: {
			"en-gb": "Anito",
		},
	},
	{
		id: -2408611,
		name: {
			"en-gb": "Anilao",
		},
	},
	{
		id: -2408581,
		name: {
			"en-gb": "Anibong",
		},
	},
	{
		id: -2408558,
		name: {
			"en-gb": "Angono",
		},
	},
	{
		id: -2408551,
		name: {
			"en-gb": "Angit",
		},
	},
	{
		id: -2408533,
		name: {
			"en-gb": "Angeles",
		},
	},
	{
		id: -2408523,
		name: {
			"en-gb": "Angatan",
		},
	},
	{
		id: -2408522,
		name: {
			"en-gb": "Angat",
		},
	},
	{
		id: -2408494,
		name: {
			"en-gb": "Anepahan",
		},
	},
	{
		id: -2408451,
		name: {
			"en-gb": "Anda",
		},
	},
	{
		id: -2408450,
		name: {
			"en-gb": "Anda",
		},
	},
	{
		id: -2408392,
		name: {
			"en-gb": "Anao",
		},
	},
	{
		id: -2408384,
		name: {
			"en-gb": "Anan-nam",
		},
	},
	{
		id: -2408352,
		name: {
			"en-gb": "Anahaw",
		},
	},
	{
		id: -2408340,
		name: {
			"en-gb": "Anabu Segundo",
		},
	},
	{
		id: -2408339,
		name: {
			"en-gb": "Anabu Primero",
		},
	},
	{
		id: -2408333,
		name: {
			"en-gb": "Anaba",
		},
	},
	{
		id: -2408291,
		name: {
			"en-gb": "Ampid",
		},
	},
	{
		id: -2408267,
		name: {
			"en-gb": "Amoroy",
		},
	},
	{
		id: -2408254,
		name: {
			"en-gb": "Amonoy",
		},
	},
	{
		id: -2408192,
		name: {
			"en-gb": "Ambulong",
		},
	},
	{
		id: -2408056,
		name: {
			"en-gb": "Amadeo",
		},
	},
	{
		id: -2408014,
		name: {
			"en-gb": "Alubijid",
		},
	},
	{
		id: -2407952,
		name: {
			"en-gb": "Almeria",
		},
	},
	{
		id: -2407947,
		name: {
			"en-gb": "Almanza",
		},
	},
	{
		id: -2407926,
		name: {
			"en-gb": "Allen",
		},
	},
	{
		id: -2407922,
		name: {
			"en-gb": "Allauan",
		},
	},
	{
		id: -2407912,
		name: {
			"en-gb": "Al-langigan",
		},
	},
	{
		id: -2407907,
		name: {
			"en-gb": "Allacapan",
		},
	},
	{
		id: -2407883,
		name: {
			"en-gb": "Alitagtag",
		},
	},
	{
		id: -2407824,
		name: {
			"en-gb": "Alimodian",
		},
	},
	{
		id: -2407809,
		name: {
			"en-gb": "Alimañgo",
		},
	},
	{
		id: -2407808,
		name: {
			"en-gb": "Alimañgo",
		},
	},
	{
		id: -2407795,
		name: {
			"en-gb": "Alijogan",
		},
	},
	{
		id: -2407778,
		name: {
			"en-gb": "Alicia",
		},
	},
	{
		id: -2407753,
		name: {
			"en-gb": "Alibangbang",
		},
	},
	{
		id: -2407737,
		name: {
			"en-gb": "Aliaga",
		},
	},
	{
		id: -2407728,
		name: {
			"en-gb": "Alfonso",
		},
	},
	{
		id: -2407698,
		name: {
			"en-gb": "Alegria",
		},
	},
	{
		id: -2407694,
		name: {
			"en-gb": "Alegria",
		},
	},
	{
		id: -2407678,
		name: {
			"en-gb": "Alcoy",
		},
	},
	{
		id: -2407672,
		name: {
			"en-gb": "Alcantara",
		},
	},
	{
		id: -2407670,
		name: {
			"en-gb": "Alcantara",
		},
	},
	{
		id: -2407665,
		name: {
			"en-gb": "Alcala",
		},
	},
	{
		id: -2407660,
		name: {
			"en-gb": "Alburquerque",
		},
	},
	{
		id: -2407656,
		name: {
			"en-gb": "Albuera",
		},
	},
	{
		id: -2407609,
		name: {
			"en-gb": "Alapang",
		},
	},
	{
		id: -2407594,
		name: {
			"en-gb": "Alañgilan",
		},
	},
	{
		id: -2407576,
		name: {
			"en-gb": "Alaminos",
		},
	},
	{
		id: -2407517,
		name: {
			"en-gb": "Alabel",
		},
	},
	{
		id: -2407509,
		name: {
			"en-gb": "Alabang",
		},
	},
	{
		id: -2407442,
		name: {
			"en-gb": "Agusan Pequeño",
		},
	},
	{
		id: -2407437,
		name: {
			"en-gb": "Agus",
		},
	},
	{
		id: -2407409,
		name: {
			"en-gb": "Aguining",
		},
	},
	{
		id: -2407318,
		name: {
			"en-gb": "Agpudlos",
		},
	},
	{
		id: -2407311,
		name: {
			"en-gb": "Agpanabat",
		},
	},
	{
		id: -2407297,
		name: {
			"en-gb": "Agoo",
		},
	},
	{
		id: -2407296,
		name: {
			"en-gb": "Agoo",
		},
	},
	{
		id: -2407275,
		name: {
			"en-gb": "Agojo",
		},
	},
	{
		id: -2407266,
		name: {
			"en-gb": "Agoho",
		},
	},
	{
		id: -2407250,
		name: {
			"en-gb": "Agno",
		},
	},
	{
		id: -2407242,
		name: {
			"en-gb": "Agnaya",
		},
	},
	{
		id: -2407241,
		name: {
			"en-gb": "Agnay",
		},
	},
	{
		id: -2407190,
		name: {
			"en-gb": "Aghao",
		},
	},
	{
		id: -2407181,
		name: {
			"en-gb": "Aggay",
		},
	},
	{
		id: -2407177,
		name: {
			"en-gb": "Aggao",
		},
	},
	{
		id: -2407047,
		name: {
			"en-gb": "Aga",
		},
	},
	{
		id: -2407022,
		name: {
			"en-gb": "Adlawon",
		},
	},
	{
		id: -2406898,
		name: {
			"en-gb": "Abucay",
		},
	},
	{
		id: -2406885,
		name: {
			"en-gb": "Abu",
		},
	},
	{
		id: -2406874,
		name: {
			"en-gb": "Abra de Ilog",
		},
	},
	{
		id: -2406867,
		name: {
			"en-gb": "Aborlan",
		},
	},
	{
		id: -2406773,
		name: {
			"en-gb": "Abango",
		},
	},
	{
		id: -2406722,
		name: {
			"en-gb": "Abaca",
		},
	},
	{
		id: 80285,
		name: {
			"en-gb": "J Panganihan",
		},
	},
	{
		id: 80383,
		name: {
			"en-gb": "Sundugan Point",
		},
	},
	{
		id: 419439,
		name: {
			"en-gb": "Tugatog",
		},
	},
	{
		id: 419443,
		name: {
			"en-gb": "Pantoc",
		},
	},
	{
		id: 419446,
		name: {
			"en-gb": "Tubigan",
		},
	},
	{
		id: 419447,
		name: {
			"en-gb": "Sapang Alat",
		},
	},
	{
		id: 421097,
		name: {
			"en-gb": "Poblacion",
		},
	},
	{
		id: 421114,
		name: {
			"en-gb": "Dulong Bayan",
		},
	},
	{
		id: 421172,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: 421174,
		name: {
			"en-gb": "Geronimo",
		},
	},
	{
		id: 421178,
		name: {
			"en-gb": "Amitty Ville",
		},
	},
	{
		id: 421203,
		name: {
			"en-gb": "Labahan",
		},
	},
	{
		id: 421212,
		name: {
			"en-gb": "Buntong",
		},
	},
	{
		id: 422101,
		name: {
			"en-gb": "De La Paz",
		},
	},
	{
		id: 422103,
		name: {
			"en-gb": "Cupang",
		},
	},
	{
		id: 422104,
		name: {
			"en-gb": "Mangahan",
		},
	},
	{
		id: 422105,
		name: {
			"en-gb": "Malapandan",
		},
	},
	{
		id: 422108,
		name: {
			"en-gb": "San Isidro",
		},
	},
	{
		id: 422111,
		name: {
			"en-gb": "Cogeo Village",
		},
	},
	{
		id: 422112,
		name: {
			"en-gb": "San Augustin",
		},
	},
	{
		id: 422119,
		name: {
			"en-gb": "San Andres",
		},
	},
	{
		id: 422120,
		name: {
			"en-gb": "San An",
		},
	},
	{
		id: 422122,
		name: {
			"en-gb": "Kalayaan",
		},
	},
	{
		id: 422129,
		name: {
			"en-gb": "San Roque",
		},
	},
	{
		id: 422130,
		name: {
			"en-gb": "San Jose",
		},
	},
	{
		id: 8021259,
		name: {
			"en-gb": "Mapiga",
		},
	},
	{
		id: 8021329,
		name: {
			"en-gb": "Quitanpuil",
		},
	},
	{
		id: 8021353,
		name: {
			"en-gb": "Tacon",
		},
	},
	{
		id: 8021354,
		name: {
			"en-gb": "Cuayan",
		},
	},
	{
		id: 9093353,
		name: {
			"en-gb": "Tampilisan",
		},
	},
	{
		id: 9093864,
		name: {
			"en-gb": "Kulasi",
		},
	},
	{
		id: 9105475,
		name: {
			"en-gb": "Taporok",
		},
	},
	{
		id: 9105587,
		name: {
			"en-gb": "Macasing",
		},
	},
	{
		id: 9108149,
		name: {
			"en-gb": "Andop",
		},
	},
	{
		id: 9108244,
		name: {
			"en-gb": "Alegria",
		},
	},
	{
		id: 9108245,
		name: {
			"en-gb": "Basbas",
		},
	},
	{
		id: 9108259,
		name: {
			"en-gb": "San Agustin",
		},
	},
	{
		id: 9108270,
		name: {
			"en-gb": "Licup",
		},
	},
	{
		id: 9108279,
		name: {
			"en-gb": "Camudmud",
		},
	},
	{
		id: 9108321,
		name: {
			"en-gb": "Kalunasan",
		},
	},
	{
		id: 9108421,
		name: {
			"en-gb": "Cabaguio",
		},
	},
	{
		id: 9110134,
		name: {
			"en-gb": "Vild Fuerte",
		},
	},
	{
		id: 9110311,
		name: {
			"en-gb": "Mapia",
		},
	},
	{
		id: 9110949,
		name: {
			"en-gb": "Bug-ong",
		},
	},
	{
		id: 9111155,
		name: {
			"en-gb": "Alga",
		},
	},
	{
		id: 900048585,
		name: {
			"en-gb": "Dimakia",
		},
	},
	{
		id: 900048630,
		name: {
			"en-gb": "Malapascua Island",
		},
	},
	{
		id: 900048813,
		name: {
			"en-gb": "Apulit Island",
		},
	},
	{
		id: 900048875,
		name: {
			"en-gb": "Clark",
		},
	},
	{
		id: 900050512,
		name: {
			"en-gb": "Talikud",
		},
	},
	{
		id: 900050723,
		name: {
			"en-gb": "Punta Fuego",
		},
	},
	{
		id: 900051656,
		name: {
			"en-gb": "Aklan",
		},
	},
	{
		id: 900051818,
		name: {
			"en-gb": "Sumilon Island",
		},
	},
	{
		id: 900052491,
		name: {
			"en-gb": "Guimaras",
		},
	},
	{
		id: 900052599,
		name: {
			"en-gb": "Pamilacan",
		},
	},
	{
		id: 900053244,
		name: {
			"en-gb": "Arena Island",
		},
	},
	{
		id: 900053675,
		name: {
			"en-gb": "Biliran",
		},
	},
	{
		id: 900055902,
		name: {
			"en-gb": "Sibulan",
		},
	},
	{
		id: 900056214,
		name: {
			"en-gb": "Olango Island",
		},
	},
	{
		id: 900056311,
		name: {
			"en-gb": "Amacan View Villas",
		},
	},
	{
		id: 900056535,
		name: {
			"en-gb": "Sarrat",
		},
	},
	{
		id: 900057265,
		name: {
			"en-gb": "Marabut",
		},
	},
	{
		id: 900057446,
		name: {
			"en-gb": "Orani",
		},
	},
	{
		id: 900057447,
		name: {
			"en-gb": "Santa Rosa",
		},
	},
	{
		id: 900057771,
		name: {
			"en-gb": "Gaas",
		},
	},
	{
		id: 900057862,
		name: {
			"en-gb": "Rodriguez",
		},
	},
	{
		id: 900058165,
		name: {
			"en-gb": "Concepcion",
		},
	},
	{
		id: 900058475,
		name: {
			"en-gb": "Bulakan",
		},
	},
	{
		id: 900058814,
		name: {
			"en-gb": "Pila",
		},
	},
	{
		id: 900059356,
		name: {
			"en-gb": "Cauayan City",
		},
	},
	{
		id: 900059469,
		name: {
			"en-gb": "Barbaza",
		},
	},
	{
		id: 900059563,
		name: {
			"en-gb": "Murcia",
		},
	},
	{
		id: 900059767,
		name: {
			"en-gb": "Zambales",
		},
	},
	{
		id: 900060025,
		name: {
			"en-gb": "Palayan City",
		},
	},
	{
		id: 900060223,
		name: {
			"en-gb": "Langogan",
		},
	},
	{
		id: 900060668,
		name: {
			"en-gb": "New Cabalan",
		},
	},
	{
		id: 900060815,
		name: {
			"en-gb": "Bayugan City",
		},
	},
	{
		id: 900060894,
		name: {
			"en-gb": "Dipudo",
		},
	},
	{
		id: 900061524,
		name: {
			"en-gb": "Sofronio Española",
		},
	},
	{
		id: 900062021,
		name: {
			"en-gb": "san juan la union",
		},
	},
	{
		id: 900062776,
		name: {
			"en-gb": "Lapu Lapu City",
		},
	},
]

export async function GET(request: Request, params: any) {
	// const { country } = params.params
	// const allCities = await apiCall("/common/locations/cities", { country: country })
	// return NextResponse.json(allCities)

	return NextResponse.json(tempPhCities)
}
