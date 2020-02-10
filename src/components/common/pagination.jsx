import React from "react";
import PropTypes from 'prop-types';
import {map, range} from "ramda";

const Pagination = ({ itemCounts, perPage, currentPage, onPageChange}) => {
	const totalPage = Math.ceil(itemCounts / perPage);
	if (totalPage === 1) return null;
	const pages = range(1, totalPage+1);

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				{map(page => (
					<li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
						<a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
					</li>
				), pages)}
			</ul>
		</nav>
	)
};

Pagination.defaultProps = {
	perPage: 8
};

Pagination.propTypes = {
	itemCounts: PropTypes.number.isRequired,
	perPage: PropTypes.number,
	onPageChange: PropTypes.func
};

export default Pagination;