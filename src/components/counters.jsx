import React from "react";
import Counter from "./counter";
import {map} from "ramda";

class Counters extends React.Component {

	render() {
		return (
			<div>
				{this.resetButton()}
				{this.countersList()}
			</div>
		);
	}

	countersList = () => {
		const {counters, onIncrement, onDelete, onDecrement} = this.props;
		return map(c => <Counter onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}
										 key={c.id} {...c} />, counters)
	};

	resetButton = () => (
		<div className="m-2">
			<button onClick={this.props.onReset} className="btn btn-danger btn-sm">
				Reset All
			</button>
		</div>
	);
}

export default Counters;