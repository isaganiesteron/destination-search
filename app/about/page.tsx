const Page = () => {
  return (
    <main>
      <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
        <h1 className="text-xl font-bold">v1.0.4 (current)</h1>
        <ul>
          <li>
            Change to unoptimized images since we always reach the 1000 limit of optimized images
            from vercel.
          </li>
          <li>
            Added a spinner signifying loading while app is searching for hotels in google maps api.
          </li>
          <li>
            Bug fixed: When doing a new search the old google hotel search status will still show.
          </li>
          <li>
            Improved the matching of hotel names when the app is trying to find Google hotels using
            booking.com autosuggest API.
          </li>
          <li>
            Bug fixed: When user is searching for a neighborhood/district with Google Maps Api, the
            city will be attached to the neighborhood so that it will be more accurate.
          </li>
        </ul>
        <h1 className="text-xl font-bold">v1.0.3</h1>
        <ul>
          <li>User can filter hotels by source (booking, google, common)</li>
          <li>Users can show all results instead of top 10 and show/hide flats</li>
          <li>
            Multiple Prices by month feature can now be toggled on/off in settings. It is off be
            default.
          </li>
          <li>
            Facilities are now minimized if they are too long and will be shown a button to user if
            they would like expand.
          </li>
          <li>Google hotels and Booking.com hotels are now combined in the search resuls.</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
