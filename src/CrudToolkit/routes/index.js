import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Home from "../pages/Home";
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";

const Index = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/show-books' element={<BooksView />} />
					<Route path='/add-book' element={<AddBook />} />
					<Route path='/edit-book' element={<EditBook />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default Index;
