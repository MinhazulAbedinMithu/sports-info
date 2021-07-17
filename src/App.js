import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";
import Header from "./components/Header";
import CardDetails from "./components/CardDetails";

function App() {
	return (
		<div className="container mx-auto px-4">
			<Router>
				<Header />
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/team/:teamId" component={CardDetails} />
					<Route exact path="/" component={Home} />
					<Route path="*" component={NoMatch} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
