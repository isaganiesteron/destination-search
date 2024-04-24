# Booking.com Hotel Finder

Booking.com Hotel Finder is an app designed to simplify the process of finding accommodations for your travel needs. Utilizing the Booking.com API, users can easily search for accommodations in their desired destination and customize their search based on various criteria.

## Version

Notes on the updates for each version can be found in the /about page.

## Features

- **Auto-suggest City Search**: Users can type in a destination, and the app will provide a dropdown of cities that match the input, making it easy to select the desired location.

- **Date Filtering**: Users can filter their search based on specific dates or choose from predefined options such as Day, Weekend, Week, or Month. Additionally, users can select a specific month for their travel.

- **Price Tier Filtering**: Accommodation search results can be filtered based on three price tiers: Budget, Midrange, and Luxury.

- **Settings Menu**: Users can further refine their search criteria through the settings menu, where they can set parameters such as Minimum Review Score, Price Tier, Hotel Types, and Hotel Facilities.

- **Accommodation Listings**: Accommodations matching the search criteria are listed out, including details such as Name, Star Rating, Number of Reviews, Districts, Facilities, Prices, and a link to the accommodation on Booking.com. Each listing also includes a picture of the accommodation.

- **Feature in Development**: A feature using the OpenAI API allows users to "Regenerate Description" for accommodations, although this feature is still under development.

## Technologies Used

- **Next.js**: The app is built using Next.js, providing server-side rendering and a great development experience.

- **Typescript**: Typescript is used for static typing and enhanced code quality.

- **Tailwind CSS**: Tailwind CSS is used for styling, allowing for rapid development and customization.

- **Next-Auth**: Next-Auth library is used for authentication, with Google as the authentication provider.

## Requirements

To use the app, you'll need API keys from Booking.com and OpenAI.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for API keys.
4. Run the development server using `npm run dev`.

## Contributing

Contributions are welcome! If you have any suggestions or want to contribute to the development of Booking.com Hotel Finder, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
