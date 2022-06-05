import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
	{ id: 1, name: "Love Bangladesh", author: "Ohidul Alam" },
	{ id: 2, name: "Career Web dev", author: "Mohammad Tasib" },
];

export const bookSlice = createSlice({
	name: "books",
	initialState: initialBooks,
	reducers: {
		// actions
		showBooks: state => state,
	},
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
