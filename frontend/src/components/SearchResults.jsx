import { Card } from "./Card";

export function SearchResults({ results, hasSearched, setFavourites }) {

    // when star button is clicked next to a result, it moves that result to the 'favourites' tab
    function addFavourite(result) {
	setFavourites((currentFavourites) => {
	    const alreadyFavourite = currentFavourites.some(
		(favourite) => favourite.id === result.id
	    );

	    // prevent users adding the same entry multiple times
	    if (alreadyFavourite) {
		return currentFavourites;
	    }

	    return [...currentFavourites, result];
	});
    }

    return (
	<div className="container">
	    <div className="row mb-4">
		<div className="col-md-12">

		    <Card title="Search Results">
			
			{/* Display the 'results' from the api (if there are none, display a message indicating this) */}
			{!hasSearched ? (
			    <div>
				<hr></hr>
				<h5>You have not searched yet</h5>
			    </div>

			) : results.length === 0 ? (

			    <div className="no-results">
				<hr></hr>
				<h5>No results found! Try searching again</h5>
			    </div>
			) : (
			    <>
				<div className="result-header">
				    <h5><em>Number</em></h5>
				    <h5><em>Artwork</em></h5>
				    <h5><em>Creator</em></h5>
				    <h5><em>Title</em></h5>
				    <h5><em>Release Date</em></h5>
				    <h5><em>Favourite</em></h5>
				</div>

				    {results.map((result, index) => (
					<div
					    key={index}
					    className="result-item"
					>
					    <p>{index + 1}</p>
					    <img
						src={result.artwork}
						alt={result.title}
					    />
					    <p>{result.creator}</p>
					    <p>{result.title}</p>
					    <div>{new Date(result.releaseDate).toLocaleDateString()}</div>
					    <button
						type="button"
						className="favourite-btn"
						onClick={() => addFavourite(result)}
					    >☆</button>
					</div>
				    ))}
			    </>
			)}

		    </Card>

		</div>
	    </div>
	</div>
		    
    )
}
