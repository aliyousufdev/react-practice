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

	deleteHandler = (id) => {
		const counters = filter(c => c.id !== id, prop('counters', this.state));
		this.setState({ counters })
	};

	render() {
		const counters = prop('counters', this.state);
		return (
			<div>
				{
					map(c => <Counter onDelete={this.deleteHandler} key={c.id} {...c} />, counters)
				}
			</div>
		);
	}
}

export default Counters;