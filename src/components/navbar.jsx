import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Navbar <span className="badge badge-pill badge-primary">{this.props.totalCounter}</span>
				</a>
			</nav>
		);
	}
}

export default Navbar;