import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./services/stote/store";

const CounterApp = () => {
	return (
		<Provider store={store}>
			<h2>Counter App</h2>
			<Counter />
		</Provider>
	);
};

export default CounterApp;
