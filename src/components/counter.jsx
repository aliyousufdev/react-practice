import React, {Component} from "react";

class Counter extends Component {

	render() {
		return (
			<div>
				{this.counterValue()}
				{this.incrementButton()}
				{this.decrementButton()}
			</div>
		);
	}

	counterValue = () => (
		<span
			style={{minWidth: 50}}
			className={this.getBadgeClasses()}
		>
			{this.formatCount()}
		</span>
	);

	incrementButton = () => (
		<button
			onClick={() => this.props.onIncrement(this.props.id)}
			className="btn btn-secondary btn-sm"
		>
			Increment
		</button>
	);

	decrementButton = () => (
		<button
			onClick={() => this.props.onDelete(this.props.id)}
			className="btn btn-danger btn-sm m-2"
		>
			Delete
		</button>
	);

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const {value} = this.props;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;