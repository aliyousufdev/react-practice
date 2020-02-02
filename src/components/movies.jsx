import React from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {

	state = {
		movies: []
	};

	componentDidMount() {
		this.setState({ movies: getMovies()})
	}

	render() {
		return (
			<div>
				{this.moviesCount()}
				<hr/>
				{this.movieTable()}
			</div>
		);
	}

	movieTable = () => {
		if (this.state.movies.length > 0) {
			return (
				<div className="table-responsive">
					<table className="table table-bordered">
						<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th/>
						</tr>
						</thead>

						<tbody>{this.state.movies.map(this.movieTableRow)}</tbody>
					</table>
				</div>
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
					<button
						className="btn btn-danger btn-sm"
						onClick={() => this.deleteMovieHandler(movie._id)}
					>
						Delete
					</button>
				</td>
			</tr>
		)
	};

	deleteMovieHandler = id => {
		let movies = this.state.movies.filter(movie => movie._id !== id);
		this.setState({ movies });
		console.log('Deleted movie id ', id)
	};

	moviesCount = () => {
		if (this.state.movies.length === 0) return <p>There are no movies in the database</p>
		return <p>There are {this.state.movies.length} movies in the database</p>
	}
}

export default Movies;