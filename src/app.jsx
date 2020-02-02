import React from "react";
import Movies from "./components/movies";

class App extends React.Component {
	render() {
		return (
			<div role="main" className="container">
				<Movies />
			</div>
		);
	}
}

export default App;