import React, {Component} from "react";
import 'font-awesome/css/font-awesome.css'

class Counter extends Component {

	render() {
		return (
			<div className="row">
				<div className="col-1">
					{this.counterValue()}
				</div>

				<div className="col">
					{this.incrementButton()}
					{this.decrementButton()}
					{this.deleteButton()}
				</div>
			</div>
		);
	}

	counterValue = () => (
		<span
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
			<i className="fa fa-plus"/>
		</button>
	);

	decrementButton = () => (
		<button
			onClick={() => this.props.onDecrement(this.props.id)}
			disabled={this.props.value === 0}
			className="btn btn-secondary btn-sm m-2"
		>
			<i className="fa fa-minus"/>
		</button>
	);

	deleteButton = () => (
		<button
			onClick={() => this.props.onDelete(this.props.id)}
			className="btn btn-danger btn-sm"
		>
			<i className="fa fa-trash"/>
		</button>
	);

	getBadgeClasses() {
		let classes = "badge mt-2 badge-";
		classes += this.props.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const {value} = this.props;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;