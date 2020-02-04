import React, {Component, Fragment} from "react";
import Counters from "./components/counters";

class App extends Component {
	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-light bg-light">
					<a className="navbar-brand" href="/">Navbar</a>
				</nav>
				<div role="main" className="container">
					<Counters />
				</div>
			</Fragment>
		);
	}
}

export default App;