import React from "react";

const Navbar = ({ totalCounter }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="/">
				Navbar <span className="badge badge-pill badge-primary">{totalCounter}</span>
			</a>
		</nav>
	)
};

export default Navbar;