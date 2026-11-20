// term: what the user types
// media: what 'topic' the user selected (i.e. 'movies', 'tv shows', 'podcasts', etc...)

// function to interact with the iTunes API
async function searchController(req, res) { // req -> HTTP request from React; res -> send the response to React

    try {
	const term = req.query.term;
	const media = req.query.media;


////////////////////////////////////// Send the request to iTunes //////////////////////////////////////


	// ensure a term is sent by the user
	if (!term) {
	    return res.status(400).json({
		error: "Search term is required"
	    });
	}

	// converting the 'term' to a format that can be sent along a URL 
	// 'media' doesn't need this, as I've manually created the mediaType variable, there are no unexpected characters
	const encodedTerm = encodeURIComponent(term);

	// create the URL
	const url = `https://itunes.apple.com/search?term=${encodedTerm}&media=${media}&limit=20`;

	// actually send the url to iTunes (i.e. the GET request)
	const response = await fetch(url);

	// send error if response failed
	if (!response.ok) {
	    throw new Error("API request failed");
	}


////////////////////////////////////// Receive the response from iTunes//////////////////////////////////////


	// convert the API response (which is in JSON) to a JavaScript object
	const data = await response.json();
	
	// used to check for bugs in the terminal
	console.log(data.results[0]);
	console.log("URL:", url);
	console.log("Result count:", data.resultCount);
	console.log("Results:", data.results);

	// format the data correctly, including requirements
	const results = data.results.map((item) => ({
	    id: item.trackId || item.collectionId,
	    title: item.trackName || item.collectionName,
	    creator: item.artistName,
	    artwork: item.artworkUrl100,
	    releaseDate: item.releaseDate,
	}));


////////////////////////////////////// Send the response to React //////////////////////////////////////


	// now it's formatted correctly, I can send the response to React
	return res.status(200).json(results);


////////////////////////////////////// Catch any errors //////////////////////////////////////

    } catch (error) {
	console.error(error);

        return res.status(500).json({
            error: "Unable to retrieve search results"
        });

    }
}

module.exports = searchController;
