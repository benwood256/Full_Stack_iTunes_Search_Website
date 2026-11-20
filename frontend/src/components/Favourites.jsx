import { Card } from "./Card";

export function Favourites({ favourites, setFavourites }) {

    // this function will remove a favourite if the 'x' button is clicked
    function removeFavourite(id) {
	setFavourites((currentFavourites) =>
	    currentFavourites.filter(
		(favourite) => favourite.id !== id
	    )
	);
    }

    return (
	<div className="container">
	    <div className="row mb-4">
		<div className="col-md-12">

		    <Card title="Favourites">
			<hr></hr>

			{/* Display the 'favourites' (if there are none, display a message indicating this) */}
			{favourites.length === 0 ? (
			    <div>
				<h5>You have not favourited any items yet</h5>
			    </div>

			) : (
			    <>
				<div className="favourite-header">
				    <h5><em>Number</em></h5>
				    <h5><em>Artwork</em></h5>
				    <h5><em>Creator</em></h5>
				    <h5><em>Title</em></h5>
				    <h5><em>Release Date</em></h5>
				    <h5><em>Remove</em></h5>
				</div>

				{favourites.map((favourite, index) => (
				    <div
					key={index}
					className="favourite-item"
				    >
					<p>{index + 1}</p>
					<img
					    src={favourite.artwork}
					    alt={favourite.title}
					/>
					<p>{favourite.creator}</p>
					<p>{favourite.title}</p>
					<div>
					    {new Date(favourite.releaseDate).toLocaleDateString()}
					</div>

					{/* Button to remove a favourite */}
					<button
					    type="button"
					    className="btn-close remove-btn"
					    onClick={() => removeFavourite(favourite.id)}
					></button>
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
