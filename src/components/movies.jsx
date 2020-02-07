import React, {Fragment} from "react";
import {getMovies} from "../services/fakeMovieService";
import {isEmpty, map, prop, filter, path} from "ramda";
import Like from "./common/Like";
import Pagination from "./common/pagination";

class Movies extends React.Component {

	state = {
		movies: []
	};

	componentDidMount() {
		const movies = getMovies().map(m => {
			m.liked = false;
			return m;
		});
		this.setState({movies})
	}

	render() {
		return (
			<div>
				{this.noMoviesMessage()}
				{this.movieTable()}
				<Pagination counts={1}/>
			</div>
		);
	}

	movieTable = () => {
		if (!this.isMovieListEmpty()) {
			return (
				<Fragment>
					<p>Showing {this.movieCounts()} movies in the database</p>
					<div className="table-responsive">
						<table className="table">
							<thead>
							<tr>
								<th>Title</th>
								<th>Genre</th>
								<th>Stock</th>
								<th>Rate</th>
								<th/>
								<th/>
							</tr>
							</thead>
							<tbody>
							{
								map(this.movieTableRow, prop('movies', this.state))
							}
							</tbody>
						</table>
					</div>
				</Fragment>
			)
		}
	};

	movieTableRow = movie => {
		return (
			<tr key={movie._id}>
				<td>{movie.title}</td>
				<td>{movie.genre.name}</td>
				<td>{movie.numberInStock}</td>
				<td>{movie.dailyRentalRate}</td>
				<td>
					<Like liked={movie.liked} onClick={() => this.likeHandler(movie)} />
				</td>
				<td>
					<button
						className="btn btn-danger btn-sm"
						onClick={() => this.deleteMovieHandler(movie._id)}
					>
						<i className="fa fa-trash-o"/> Delete
					</button>
				</td>
			</tr>
		)
	};

	likeHandler = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = {...movie, liked: !movie.liked};
		this.setState({movies});
	};

	deleteMovieHandler = id => {
		let movies = filter(movie => movie._id !== id, prop('movies', this.state));
		this.setState({movies});
		console.log('Deleted movie id ', id)
	};

	noMoviesMessage = () => {
		if (this.isMovieListEmpty()) return <p>There are no movies in the database</p>
	};

	isMovieListEmpty = () => {
		return isEmpty(prop('movies', this.state));
	};

	movieCounts = () => {
		return path(['movies', 'length'], this.state);
	}
}

export default Movies;