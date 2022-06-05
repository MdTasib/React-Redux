import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
	books: [
		{ id: 1, name: "Love Bangladesh", author: "Ohidul Alam" },
		{ id: 2, name: "Career Web dev", author: "Mohammad Tasib" },
	],
};

export const bookSlice = createSlice({
	name: "books",
	initialState: initialBooks,
	reducers: {
		// actions
		showBooks: state => state,
		addBook: (state, action) => {
			state.books.push(action.payload);
		},
		deleteBook: (state, action) => {
			const id = action.payload;
			// const newBooks = state.books.filter(book => book.id !== id);
			// state.books = newBooks;
			state.books = state.books.filter(book => book.id !== id);
		},
		updateBook: (state, action) => {
			const { id, name, author } = action.payload;
			const updatedBook = state.books.find(book => book.id === id);
			updatedBook.name = name;
			updatedBook.author = author;
		},
	},
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
