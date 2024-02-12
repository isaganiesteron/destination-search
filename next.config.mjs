/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/destination-search",
	output: "export",
	images: {
		domains: ["booking.com", "q-xx.bstatic.com"],
	},
}

export default nextConfig
