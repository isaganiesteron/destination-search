const Page = () => {
  return (
    <main>
      <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
        <h1 className="text-xl font-bold">v1.1.1 (current)</h1>
        <ul>
          <li>Included a signout button, allowing users to change google accounts</li>
          <li>
            Bug Fixed: Clicking on Load Preset button will without a preset loaded will load
            previous preset.
          </li>
          <li>Bug Fixed: After creating new preset it will not be selected in the dropdown</li>
          <li>Bug Fixed: Preset name textbox should be reset after saving</li>
        </ul>
        <h1 className="text-xl font-bold">v1.1.0</h1>
        <ul>
          <li>Save, Edit, Delete and Load Presets are now available</li>
        </ul>
        <h1 className="text-xl font-bold">v1.0.6</h1>
        <ul>
          <li>
            Using Nearby Search Google Map endpoint instead of the Text Search endpoint for improved
            accuracy using the radius parameter
          </li>
          <li>Added Google Search Radius setting for the new Google Map Search endpoint</li>
          <li>
            Improved Hotel and Flat Logs: User can now understand how many accommodations is being
            filtered out.
          </li>
          <li>
            Disabled &quot;Search Google Maps&quot; button if not neighbord/district is selected
          </li>
          <li>Will show minimized description by default</li>
          <li>
            Using non sandbox server for booking.com api. https://demandapi-sandbox.booking.com/3.1/
            to https://demandapi-sandbox.booking.com/3.1/
          </li>
        </ul>
        <h1 className="text-xl font-bold">v1.0.5</h1>
        <ul>
          <li>Settings are now divided into 2 sections: Fetch Settings and Display Settings.</li>
          <li>
            Fetch Settings are settings that require the user to click &quot;Save Fetch
            Settings&quot; and will refetch accommodations.
          </li>
          <li>
            Display Settings are settings that dont require a refetch of accommodations and will
            instantly update the existing search results.
          </li>
        </ul>
        <h1 className="text-xl font-bold">v1.0.4 </h1>
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
