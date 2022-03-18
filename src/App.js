import React from "react";
import { Switch, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Join} />
			<Route path="/chat" component={Chat} />
		</Switch>
	);
};

export default App;
