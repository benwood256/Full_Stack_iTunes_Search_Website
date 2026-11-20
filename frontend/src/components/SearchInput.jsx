import { useState } from "react";
import axios from "axios";                         // send HTTP requests to the backend

import { Card } from "./Card";

export function SearchInput({ setResults, setHasSearched }) {
    const [searchTerm, setSearchTerm] = useState("");  // store current search term types in the input box
    const [mediaType, setMediaType] = useState("all"); // select the type of media from the buttons ('all' is standard)
	
    // function to handle what happens when the 'submit' button is clicked (i.e. speak to API)
    async function handleSearch(event) {
	event.preventDefault();                        // allow me to handling rendering the page 

	// clear current searched results
	setResults([]);

	const token = import.meta.env.VITE_API_TOKEN;  // pass token so frontend can send requests

	const response = await axios.get("http://localhost:8080/api/search", {
	    // included in the URL sent
	    params: {
		term: searchTerm,
		media: mediaType,
	    },

	    // token required to receive a response
	    headers: {
		Authorization: `Bearer ${token}`
	    }
	});

	// update the array 'results' with results from the iTunes store
	setResults(response.data);

	// someone has searched -> to allow changing of display message after a search was carried out
	setHasSearched(true);

	// for debugging as needed
	console.log(response.data);

	// clear input after search
	setSearchTerm("");
    }
    
    return (
	<div className="container">
	    <div className="row mb-4">
		<div className="col-md-6 mx-auto">

		    <Card>

			<form onSubmit={handleSearch}>
			    {/* Select the type of media you want */}
			    <div className="media-options">
				{/* If selected, mediaType changes & in CSS styling changes so its clear to the user */}
				<button
				    type="button"
				    className={`media-btn ${mediaType === "all" ? "active" : ""}`}
				    onClick={() => setMediaType("all")}
				>
				    All
				</button>

				<button
				    type="button"
				    className={`media-btn ${mediaType === "movie" ? "active" : ""}`}
				    onClick={() => setMediaType("movie")}
				>
				    Movies
				</button>

				<button
				    type="button"
				    className={`media-btn ${mediaType === "tvShow" ? "active" : ""}`}
				    onClick={() => setMediaType("tvShow")}
				>
				    TV-Shows
				</button>

				<button
				    type="button"
				    className={`media-btn ${mediaType === "podcast" ? "active" : ""}`}
				    onClick={() => setMediaType("podcast")}
				>
				    Podcasts
				</button>

				{/* Additional options -> if not selected will display 'More...' */}
				<select
				    className="form-select media-select"
				    value={
					["music", "audiobook", "shortFilm", "software", "ebook"]
					    .includes(mediaType)
					    ? mediaType
					    : ""
				    }
				    onChange={(event) => setMediaType(event.target.value)}
				>
				    <option value="" disabled>More...</option>
				    <option value="music">Music</option>
				    <option value="audiobook">Audiobooks</option>
				    <option value="shortFilm">Short Films</option>
				    <option value="software">Software</option>
				    <option value="ebook">Ebooks</option>
				</select>

			    </div>

			    {/* The input box & the buttons to clear search or submit search */}
			    <div className="search-control">
				<div className="input-container">
				    <input
					required
					type="text"
					className="form-control"
					placeholder="Search here"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				    />
				    {/* deletes current input (invisible if not input present */}
				    {searchTerm === "" ? null : (
					<button
					    type="button"
					    className="btn-close clear-search"
					    onClick={() => setSearchTerm("")}
					></button>)
				    }
				</div>

				{/* button that submits form */}
				<button
				    type="submit"
				    className="search-btn"
				>
				    Search
				</button>
		            </div>
		        </form>	

	            </Card>

		</div>
            </div>
	</div>
    )
}
