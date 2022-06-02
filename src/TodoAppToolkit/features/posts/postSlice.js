import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return res.data;
});

const postSlice = createSlice({
	name: "posts",
	// initial state
	initialState: {
		isLoading: false,
		error: null,
		posts: [],
	},
	// actions
	extraReducers: builder => {
		builder.addCase(fetchPosts.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		});
	},
});

export default postSlice.reducer;
