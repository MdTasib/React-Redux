import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import store from "./redux/store";

const Ecommerce = () => {
	return (
		<div>
			<BrowserRouter>
				<Provider store={store}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/product/:id' element={<Product />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</Provider>
			</BrowserRouter>
		</div>
	);
};

export default Ecommerce;
