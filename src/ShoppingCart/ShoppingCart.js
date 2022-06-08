import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Products from "./components/Products/Products";
import store from "./redux/store";
import { Provider } from "react-redux";

const ShoppingCart = ({ current }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/product/:id' element={<SingleItem />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default ShoppingCart;
