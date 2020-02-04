import React, {Component, Fragment} from "react";
import Counters from "./components/counters";
import {filter, map, prop} from "ramda";
import Navbar from "./components/navbar";

class App extends Component {

	state = {
		counters: [
			{id: 1, value: 3},
			{id: 2, value: 3},
			{id: 3, value: 0},
			{id: 4, value: 0},
			{id: 5, value: 0},
		]
	};

	incrementHandler = id => {
		const counters = map(counter => {
			if (counter.id === id) {
				counter.value++;
			}
			return counter;
		}, this.state.counters);

		this.setState({ counters })
	};

	deleteHandler = (id) => {
		const counters = filter(c => c.id !== id, prop('counters', this.state));
		this.setState({ counters })
	};

	resetHandler = () => {
		const counters = map(counter => {
			counter.value = 0;
			return counter
		}, this.state.counters);

		this.setState({ counters })
	}

	render() {
		return (
			<Fragment>
				<Navbar />
				<div role="main" className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.resetHandler}
						onDelete={this.deleteHandler}
						onIncrement={this.incrementHandler}
					/>
				</div>
			</Fragment>
		);
	}
}

export default App;