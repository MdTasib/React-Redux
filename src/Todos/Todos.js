import React from "react";
import { Provider } from "react-redux";
import AllTodo from "./components/AllTodo";
import store from "./services/store/store";

const Todos = () => {
	return (
		<Provider store={store}>
			<h2>Redux Todos</h2>
			<AllTodo />
		</Provider>
	);
};

export default Todos;
