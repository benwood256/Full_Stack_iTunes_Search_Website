export function Card({ title, children }) {
    return (
	<article className="card custom-card">
	    {title && <h2 className="card-title">{title}</h2>}

	    <div className="card-content">
		{children}
	    </div>
	</article>
    );
}
