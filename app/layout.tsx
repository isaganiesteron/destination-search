import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Destination Search",
	description: "Miss Tourist Destination search with Booking.com api",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	)
}
