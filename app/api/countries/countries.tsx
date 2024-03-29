const countries = [
	{ id: "ad", name: { "en-gb": "Andorra" } },
	{ id: "ae", name: { "en-gb": "United Arab Emirates" } },
	{ id: "af", name: { "en-gb": "Afghanistan" } },
	{ id: "ag", name: { "en-gb": "Antigua & Barbuda" } },
	{ id: "ai", name: { "en-gb": "Anguilla" } },
	{ id: "al", name: { "en-gb": "Albania" } },
	{ id: "am", name: { "en-gb": "Armenia" } },
	{ id: "ao", name: { "en-gb": "Angola" } },
	{ id: "aq", name: { "en-gb": "Antarctica" } },
	{ id: "ar", name: { "en-gb": "Argentina" } },
	{ id: "as", name: { "en-gb": "American Samoa" } },
	{ id: "at", name: { "en-gb": "Austria" } },
	{ id: "au", name: { "en-gb": "Australia" } },
	{ id: "aw", name: { "en-gb": "Aruba" } },
	{ id: "az", name: { "en-gb": "Azerbaijan" } },
	{ id: "ba", name: { "en-gb": "Bosnia and Herzegovina" } },
	{ id: "bb", name: { "en-gb": "Barbados" } },
	{ id: "bd", name: { "en-gb": "Bangladesh" } },
	{ id: "be", name: { "en-gb": "Belgium" } },
	{ id: "bf", name: { "en-gb": "Burkina Faso" } },
	{ id: "bg", name: { "en-gb": "Bulgaria" } },
	{ id: "bh", name: { "en-gb": "Bahrain" } },
	{ id: "bi", name: { "en-gb": "Burundi" } },
	{ id: "bj", name: { "en-gb": "Benin" } },
	{ id: "bl", name: { "en-gb": "Saint Barthelemy" } },
	{ id: "bm", name: { "en-gb": "Bermuda" } },
	{ id: "bn", name: { "en-gb": "Brunei Darussalam" } },
	{ id: "bo", name: { "en-gb": "Bolivia" } },
	{ id: "bq", name: { "en-gb": "Bonaire St Eustatius and Saba" } },
	{ id: "br", name: { "en-gb": "Brazil" } },
	{ id: "bs", name: { "en-gb": "Bahamas" } },
	{ id: "bt", name: { "en-gb": "Bhutan" } },
	{ id: "bv", name: { "en-gb": "Bouvet Island" } },
	{ id: "bw", name: { "en-gb": "Botswana" } },
	{ id: "bz", name: { "en-gb": "Belize" } },
	{ id: "ca", name: { "en-gb": "Canada" } },
	{ id: "cc", name: { "en-gb": "Cocos (K) I." } },
	{ id: "cd", name: { "en-gb": "Democratic Republic of Congo" } },
	{ id: "cf", name: { "en-gb": "Central Africa Republic" } },
	{ id: "cg", name: { "en-gb": "Congo" } },
	{ id: "ch", name: { "en-gb": "Switzerland" } },
	{ id: "ci", name: { "en-gb": "Côte d'Ivoire" } },
	{ id: "ck", name: { "en-gb": "Cook Islands" } },
	{ id: "cl", name: { "en-gb": "Chile" } },
	{ id: "cm", name: { "en-gb": "Cameroon" } },
	{ id: "cn", name: { "en-gb": "China" } },
	{ id: "co", name: { "en-gb": "Colombia" } },
	{ id: "cr", name: { "en-gb": "Costa Rica" } },
	{ id: "cu", name: { "en-gb": "Cuba" } },
	{ id: "cv", name: { "en-gb": "Cape Verde" } },
	{ id: "cw", name: { "en-gb": "Curaçao" } },
	{ id: "cx", name: { "en-gb": "Christmas Island" } },
	{ id: "cy", name: { "en-gb": "Cyprus" } },
	{ id: "cz", name: { "en-gb": "Czech Republic" } },
	{ id: "de", name: { "en-gb": "Germany" } },
	{ id: "dj", name: { "en-gb": "Djibouti" } },
	{ id: "dk", name: { "en-gb": "Denmark" } },
	{ id: "dm", name: { "en-gb": "Dominica" } },
	{ id: "do", name: { "en-gb": "Dominican Republic" } },
	{ id: "dz", name: { "en-gb": "Algeria" } },
	{ id: "ec", name: { "en-gb": "Ecuador" } },
	{ id: "ee", name: { "en-gb": "Estonia" } },
	{ id: "eg", name: { "en-gb": "Egypt" } },
	{ id: "er", name: { "en-gb": "Eritrea" } },
	{ id: "es", name: { "en-gb": "Spain" } },
	{ id: "et", name: { "en-gb": "Ethiopia" } },
	{ id: "fi", name: { "en-gb": "Finland" } },
	{ id: "fj", name: { "en-gb": "Fiji" } },
	{ id: "fk", name: { "en-gb": "Falkland Islands (Malvinas)" } },
	{ id: "fm", name: { "en-gb": "Micronesia" } },
	{ id: "fo", name: { "en-gb": "Faroe Islands" } },
	{ id: "fr", name: { "en-gb": "France" } },
	{ id: "ga", name: { "en-gb": "Gabon" } },
	{ id: "gb", name: { "en-gb": "United Kingdom" } },
	{ id: "gd", name: { "en-gb": "Grenada" } },
	{ id: "ge", name: { "en-gb": "Georgia" } },
	{ id: "gf", name: { "en-gb": "French Guiana" } },
	{ id: "gg", name: { "en-gb": "Guernsey" } },
	{ id: "gh", name: { "en-gb": "Ghana" } },
	{ id: "gi", name: { "en-gb": "Gibraltar" } },
	{ id: "gl", name: { "en-gb": "Greenland" } },
	{ id: "gm", name: { "en-gb": "Gambia" } },
	{ id: "gn", name: { "en-gb": "Guinea" } },
	{ id: "gp", name: { "en-gb": "Guadeloupe" } },
	{ id: "gq", name: { "en-gb": "Equatorial Guinea" } },
	{ id: "gr", name: { "en-gb": "Greece" } },
	{ id: "gs", name: { "en-gb": "South Georgia and the South Sandwich Islands" } },
	{ id: "gt", name: { "en-gb": "Guatemala" } },
	{ id: "gu", name: { "en-gb": "Guam" } },
	{ id: "gw", name: { "en-gb": "Guinea-Bissau" } },
	{ id: "gy", name: { "en-gb": "Guyana" } },
	{ id: "hk", name: { "en-gb": "Hong Kong" } },
	{ id: "hm", name: { "en-gb": "Heard and McDonald Islands" } },
	{ id: "hn", name: { "en-gb": "Honduras" } },
	{ id: "hr", name: { "en-gb": "Croatia" } },
	{ id: "ht", name: { "en-gb": "Haiti" } },
	{ id: "hu", name: { "en-gb": "Hungary" } },
	{ id: "id", name: { "en-gb": "Indonesia" } },
	{ id: "ie", name: { "en-gb": "Ireland" } },
	{ id: "il", name: { "en-gb": "Israel" } },
	{ id: "im", name: { "en-gb": "Isle of Man" } },
	{ id: "in", name: { "en-gb": "India" } },
	{ id: "io", name: { "en-gb": "British Indian Ocean Territory" } },
	{ id: "iq", name: { "en-gb": "Iraq" } },
	{ id: "ir", name: { "en-gb": "Iran" } },
	{ id: "is", name: { "en-gb": "Iceland" } },
	{ id: "it", name: { "en-gb": "Italy" } },
	{ id: "je", name: { "en-gb": "Jersey" } },
	{ id: "jm", name: { "en-gb": "Jamaica" } },
	{ id: "jo", name: { "en-gb": "Jordan" } },
	{ id: "jp", name: { "en-gb": "Japan" } },
	{ id: "ke", name: { "en-gb": "Kenya" } },
	{ id: "kg", name: { "en-gb": "Kyrgyzstan" } },
	{ id: "kh", name: { "en-gb": "Cambodia" } },
	{ id: "ki", name: { "en-gb": "Kiribati" } },
	{ id: "km", name: { "en-gb": "Comoros" } },
	{ id: "kn", name: { "en-gb": "Saint Kitts and Nevis" } },
	{ id: "kp", name: { "en-gb": "North Korea" } },
	{ id: "kr", name: { "en-gb": "South Korea" } },
	{ id: "kw", name: { "en-gb": "Kuwait" } },
	{ id: "ky", name: { "en-gb": "Cayman Islands" } },
	{ id: "kz", name: { "en-gb": "Kazakhstan" } },
	{ id: "la", name: { "en-gb": "Laos" } },
	{ id: "lb", name: { "en-gb": "Lebanon" } },
	{ id: "lc", name: { "en-gb": "Saint Lucia" } },
	{ id: "li", name: { "en-gb": "Liechtenstein" } },
	{ id: "lk", name: { "en-gb": "Sri Lanka" } },
	{ id: "lr", name: { "en-gb": "Liberia" } },
	{ id: "ls", name: { "en-gb": "Lesotho" } },
	{ id: "lt", name: { "en-gb": "Lithuania" } },
	{ id: "lu", name: { "en-gb": "Luxembourg" } },
	{ id: "lv", name: { "en-gb": "Latvia" } },
	{ id: "ly", name: { "en-gb": "Libya" } },
	{ id: "ma", name: { "en-gb": "Morocco" } },
	{ id: "mc", name: { "en-gb": "Monaco" } },
	{ id: "md", name: { "en-gb": "Moldova" } },
	{ id: "me", name: { "en-gb": "Montenegro" } },
	{ id: "mf", name: { "en-gb": "Saint Martin" } },
	{ id: "mg", name: { "en-gb": "Madagascar" } },
	{ id: "mh", name: { "en-gb": "Marshall Islands" } },
	{ id: "mk", name: { "en-gb": "North Macedonia" } },
	{ id: "ml", name: { "en-gb": "Mali" } },
	{ id: "mm", name: { "en-gb": "Myanmar" } },
	{ id: "mn", name: { "en-gb": "Mongolia" } },
	{ id: "mo", name: { "en-gb": "Macao" } },
	{ id: "mp", name: { "en-gb": "Northern Mariana Islands" } },
	{ id: "mq", name: { "en-gb": "Martinique" } },
	{ id: "mr", name: { "en-gb": "Mauritania" } },
	{ id: "ms", name: { "en-gb": "Montserrat" } },
	{ id: "mt", name: { "en-gb": "Malta" } },
	{ id: "mu", name: { "en-gb": "Mauritius" } },
	{ id: "mv", name: { "en-gb": "Maldives" } },
	{ id: "mw", name: { "en-gb": "Malawi" } },
	{ id: "mx", name: { "en-gb": "Mexico" } },
	{ id: "my", name: { "en-gb": "Malaysia" } },
	{ id: "mz", name: { "en-gb": "Mozambique" } },
	{ id: "na", name: { "en-gb": "Namibia" } },
	{ id: "nc", name: { "en-gb": "New Caledonia" } },
	{ id: "ne", name: { "en-gb": "Niger" } },
	{ id: "nf", name: { "en-gb": "Norfolk Island" } },
	{ id: "ng", name: { "en-gb": "Nigeria" } },
	{ id: "ni", name: { "en-gb": "Nicaragua" } },
	{ id: "nl", name: { "en-gb": "Netherlands" } },
	{ id: "no", name: { "en-gb": "Norway" } },
	{ id: "np", name: { "en-gb": "Nepal" } },
	{ id: "nr", name: { "en-gb": "Nauru" } },
	{ id: "nu", name: { "en-gb": "Niue" } },
	{ id: "nz", name: { "en-gb": "New Zealand" } },
	{ id: "om", name: { "en-gb": "Oman" } },
	{ id: "pa", name: { "en-gb": "Panama" } },
	{ id: "pe", name: { "en-gb": "Peru" } },
	{ id: "pf", name: { "en-gb": "French Polynesia" } },
	{ id: "pg", name: { "en-gb": "Papua New Guinea" } },
	{ id: "ph", name: { "en-gb": "Philippines" } },
	{ id: "pk", name: { "en-gb": "Pakistan" } },
	{ id: "pl", name: { "en-gb": "Poland" } },
	{ id: "pm", name: { "en-gb": "St Pierre and Miquelon" } },
	{ id: "pn", name: { "en-gb": "Pitcairn" } },
	{ id: "pr", name: { "en-gb": "Puerto Rico" } },
	{ id: "ps", name: { "en-gb": "Palestinian Territory" } },
	{ id: "pt", name: { "en-gb": "Portugal" } },
	{ id: "pw", name: { "en-gb": "Palau" } },
	{ id: "py", name: { "en-gb": "Paraguay" } },
	{ id: "qa", name: { "en-gb": "Qatar" } },
	{ id: "re", name: { "en-gb": "Reunion" } },
	{ id: "ro", name: { "en-gb": "Romania" } },
	{ id: "rs", name: { "en-gb": "Serbia" } },
	{ id: "rw", name: { "en-gb": "Rwanda" } },
	{ id: "sa", name: { "en-gb": "Saudi Arabia" } },
	{ id: "sb", name: { "en-gb": "Solomon Islands" } },
	{ id: "sc", name: { "en-gb": "Seychelles" } },
	{ id: "sd", name: { "en-gb": "Sudan" } },
	{ id: "se", name: { "en-gb": "Sweden" } },
	{ id: "sg", name: { "en-gb": "Singapore" } },
	{ id: "sh", name: { "en-gb": "St Helena" } },
	{ id: "si", name: { "en-gb": "Slovenia" } },
	{ id: "sj", name: { "en-gb": "Svalbard & Jan Mayen" } },
	{ id: "sk", name: { "en-gb": "Slovakia" } },
	{ id: "sl", name: { "en-gb": "Sierra Leone" } },
	{ id: "sm", name: { "en-gb": "San Marino" } },
	{ id: "sn", name: { "en-gb": "Senegal" } },
	{ id: "so", name: { "en-gb": "Somalia" } },
	{ id: "sr", name: { "en-gb": "Suriname" } },
	{ id: "ss", name: { "en-gb": "South Sudan" } },
	{ id: "st", name: { "en-gb": "São Tomé and Príncipe" } },
	{ id: "sv", name: { "en-gb": "El Salvador" } },
	{ id: "sx", name: { "en-gb": "Sint Maarten" } },
	{ id: "sy", name: { "en-gb": "Syria" } },
	{ id: "sz", name: { "en-gb": "Eswatini" } },
	{ id: "tc", name: { "en-gb": "Turks & Caicos Islands" } },
	{ id: "td", name: { "en-gb": "Chad" } },
	{ id: "tf", name: { "en-gb": "French Southern Territories" } },
	{ id: "tg", name: { "en-gb": "Togo" } },
	{ id: "th", name: { "en-gb": "Thailand" } },
	{ id: "tj", name: { "en-gb": "Tajikistan" } },
	{ id: "tk", name: { "en-gb": "Tokelau" } },
	{ id: "tl", name: { "en-gb": "East Timor" } },
	{ id: "tm", name: { "en-gb": "Turkmenistan" } },
	{ id: "tn", name: { "en-gb": "Tunisia" } },
	{ id: "to", name: { "en-gb": "Tonga" } },
	{ id: "tr", name: { "en-gb": "Turkey" } },
	{ id: "tt", name: { "en-gb": "Trinidad and Tobago" } },
	{ id: "tv", name: { "en-gb": "Tuvalu" } },
	{ id: "tw", name: { "en-gb": "Taiwan" } },
	{ id: "tz", name: { "en-gb": "Tanzania" } },
	{ id: "ua", name: { "en-gb": "Ukraine" } },
	{ id: "ug", name: { "en-gb": "Uganda" } },
	{ id: "um", name: { "en-gb": "United States Minor Outlying Islands" } },
	{ id: "us", name: { "en-gb": "United States" } },
	{ id: "uy", name: { "en-gb": "Uruguay" } },
	{ id: "uz", name: { "en-gb": "Uzbekistan" } },
	{ id: "va", name: { "en-gb": "Vatican City" } },
	{ id: "vc", name: { "en-gb": "Saint Vincent & Grenadines" } },
	{ id: "ve", name: { "en-gb": "Venezuela" } },
	{ id: "vg", name: { "en-gb": "UK Virgin Islands" } },
	{ id: "vi", name: { "en-gb": "US Virgin Islands" } },
	{ id: "vn", name: { "en-gb": "Vietnam" } },
	{ id: "vu", name: { "en-gb": "Vanuatu" } },
	{ id: "wf", name: { "en-gb": "Wallis and Futuna" } },
	{ id: "ws", name: { "en-gb": "Samoa" } },
	{ id: "xk", name: { "en-gb": "Kosovo" } },
	{ id: "xy", name: { "en-gb": "Northern Cyprus" } },
	{ id: "ye", name: { "en-gb": "Yemen" } },
	{ id: "yt", name: { "en-gb": "Mayotte" } },
	{ id: "za", name: { "en-gb": "South Africa" } },
	{ id: "zm", name: { "en-gb": "Zambia" } },
	{ id: "zw", name: { "en-gb": "Zimbabwe" } },
]

export default countries
