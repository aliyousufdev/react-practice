import React from "react";
import {map} from "ramda";
import PropTypes from 'prop-types';


const GenreFilter = props => {
	const {genres, selectedGenre, filterHandler} = props;
	return (
		<ul className="list-group">
			<li style={{cursor: 'pointer'}}
				 onClick={() => filterHandler('all')}
				 className={selectedGenre === 'all' ? 'list-group-item active' : 'list-group-item'}
			>
				All Genres
			</li>
			{
				map(
					genre => (
						<li style={{cursor: 'pointer'}} key={genre._id}
							 onClick={() => filterHandler(genre.name)}
							 className={selectedGenre === genre.name ? 'list-group-item active' : 'list-group-item'}
						>
							{genre.name}
						</li>
					),
					genres
				)
			}
		</ul>
	)
};

GenreFilter.propTypes = {
	genres: PropTypes.array.isRequired,
	selectedGenre: PropTypes.string.isRequired,
	filterHandler: PropTypes.func.isRequired
};

export default GenreFilter;