import React from "react";
import Counter from "./counter";
import {filter, map, prop} from "ramda";

class Counters extends React.Component {

	render() {
		const counters = prop('counters', this.props);
		return (
			<div>
				{this.resetButton()}
				{
					map(c => <Counter onIncrement={this.props.onIncrement} onDelete={this.props.onDelete}
											key={c.id} {...c} />, counters)
				}
			</div>
		);
	}

	resetButton = () => (
		<div className="m-2">
			<button onClick={this.props.onReset} className="btn btn-danger btn-sm">
				Reset All
			</button>
		</div>
	);
}

export default Counters;