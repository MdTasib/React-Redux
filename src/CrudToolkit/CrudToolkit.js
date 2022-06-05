import React from "react";
import { Provider } from "react-redux";
import Index from "./routes";
import store from "./app/store";

const CrudToolkit = () => {
	return (
		<Provider store={store}>
			<Index />
		</Provider>
	);
};

export default CrudToolkit;
