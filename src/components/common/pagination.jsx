import React from "react";
import PropTypes from 'prop-types';
import { times } from "ramda";

const Pagination = ({ itemCounts, perPage, onPageChange}) => {
	if (itemCounts < perPage) return null;

	const totalPage = Math.ceil(itemCounts / perPage);
	const items = times(item, totalPage);

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				{items}
			</ul>
		</nav>
	)
};

const item = idx => (
	<li key={idx} className="page-item">
		<a className="page-link" href="/">{idx+1}</a>
	</li>
);

Pagination.defaultProps = {
	perPage: 8
};

Pagination.propTypes = {
	itemCounts: PropTypes.number.isRequired,
	perPage: PropTypes.number,
	onPageChange: PropTypes.func
};

export default Pagination;