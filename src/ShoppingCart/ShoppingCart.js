import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Products from "./components/Products/Products";
import { Provider } from "react-redux";
import store from "./redux/store";

const ShoppingCart = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Products />} />
					<Route exact path='/cart' component={<Cart />} />
					<Route exact path='/product/:id' component={<SingleItem />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default ShoppingCart;
