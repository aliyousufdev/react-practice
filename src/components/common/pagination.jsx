import React from "react";

const Pagination = (props) => {
	const perPage = props.perPage || 4;
	if (props.counts < perPage) return null;

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				<li className="page-item"><a className="page-link" href="/">1</a></li>
				<li className="page-item"><a className="page-link" href="/">2</a></li>
				<li className="page-item"><a className="page-link" href="/">3</a></li>
			</ul>
		</nav>
	)
};

export default Pagination;