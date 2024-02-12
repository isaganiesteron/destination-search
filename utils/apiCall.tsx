const apiCall = async (endpoint: string, fetchBody: object) => {
	let allData: any[] = []
	let morePagesAvailable = true
	let currentPage = 0

	const token = `Bearer ${process.env.API_KEY}`
	let page = ""

	while (morePagesAvailable) {
		currentPage++
		console.log("Fetching page " + currentPage)
		const response = await fetch(`https://demandapi-sandbox.booking.com/3.1${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			body: JSON.stringify(page === "" ? fetchBody : { page }),
		})

		if (response.status === 200) {
			try {
				const res = await response.json()
				if (res.data) {
					allData.push(...res.data)
				} else if (res.errors) {
					console.log("**ERROR1")
					console.log(res)
					morePagesAvailable = false
					page = ""
				}

				if (res.next_page) {
					page = res.next_page
				} else {
					morePagesAvailable = false
					page = ""
				}
			} catch (err) {
				console.log("**ERROR2")
				console.log(err)
				morePagesAvailable = false
				page = ""
			}

			// pause for 1 second before next request
			console.log("pause 1 second before request")
			await new Promise((resolve) => setTimeout(resolve, 1000))
			// if (currentPage % 5 === 0) {
			// 	// pause an extra 5 seconds every 5 requests
			// 	console.log("***pause AN EXTRA 3 seconds before request")
			// 	await new Promise((resolve) => setTimeout(resolve, 3000))
			// }
		} else {
			console.log(`Status ${response.status}`)
			console.log(response)
			morePagesAvailable = false
			page = ""
		}
	}

	console.log("**************************************")
	console.log(`Done fetching ${allData.length} items.`)
	console.log("**************************************")
	console.log()

	return allData
}

export default apiCall
