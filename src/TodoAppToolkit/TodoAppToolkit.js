import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import PostView from "./features/posts/PostView";

const TodoAppToolkit = () => {
	return (
		<Provider store={store}>
			<h2>Simple Todo App Redux Toolkit</h2>
			<PostView />
		</Provider>
	);
};

export default TodoAppToolkit;
