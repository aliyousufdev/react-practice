import React from "react";
import Counter from "./counter";
import {filter, map, prop} from "ramda";

class Counters extends React.Component {

	state = {
		counters: [
			{id: 1, value: 3},
			{id: 2, value: 3},
			{id: 3, value: 0},
			{id: 4, value: 0},
			{id: 5, value: 0},
		]
	};

	render() {
		const counters = prop('counters', this.state);
		return (
			<div>
				{this.resetButton()}
				{
					map(c => <Counter onIncrement={this.incrementHandler} onDelete={this.deleteHandler} key={c.id} {...c} />, counters)
				}
			</div>
		);
	}

	resetButton = () => (
		<div className="m-2">
			<button onClick={this.resetHandler} className="btn btn-danger btn-sm">
				Reset All
			</button>
		</div>
	);

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
}

export default Counters;