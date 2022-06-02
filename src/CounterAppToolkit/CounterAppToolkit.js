import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import CounterView from "./features/counter/CounterView";

const CounterAppToolkit = () => {
	return (
		<Provider store={store}>
			<h2>Counter app Redux Toolkit</h2>
			<CounterView />
		</Provider>
	);
};

export default CounterAppToolkit;
