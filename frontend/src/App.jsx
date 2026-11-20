import { useState } from "react";

// page imports
import { SearchInput } from "./components/SearchInput";
import { SearchResults } from "./components/SearchResults";
import { Favourites } from "./components/Favourites";

import './App.css';

function App() {
    const [results, setResults] = useState([]);       // store results from API
    const [hasSearched, setHasSearched] = useState(false); // track if user has searched or not
    const [favourites, setFavourites] = useState([]); // store favourited search results
    
    return (
	<main>
	    <h1 className="py-3">iTunes Search App</h1>

	    <SearchInput setResults={setResults} setHasSearched={setHasSearched}/>

	    <SearchResults results={results} hasSearched={hasSearched} setFavourites={setFavourites}/>

	    <Favourites favourites={favourites} setFavourites={setFavourites}/>
	</main>
    );
}

export default App;
