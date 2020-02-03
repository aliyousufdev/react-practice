import React from "react";
import Counter from "./counter";
import {map, prop} from "ramda";

class Counters extends React.Component {

	state = {
		counters: [
			{id: 1, value: 0},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
			{id: 5, value: 0},
		]
	};

	render() {
		const counters = prop('counters', this.state);
		return (
			<div>
				{
					map(c => <Counter key={c.id} />, counters)
				}
			</div>
		);
	}
}

export default Counters;