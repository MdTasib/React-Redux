import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BookSlice";

const AddBook = () => {
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		const book = {
			name,
			author,
			id: Math.random() * 1000,
		};

		console.log(book);

		dispatch(addBook(book));
		navigate("/show-books", { replace: true });
	};
	return (
		<div>
			<h2>Add a new book</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-field'>
					<label htmlFor='name'>Name : </label>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
				<div className='form-field'>
					<label htmlFor='author'>Author : </label>
					<input
						type='text'
						name='author'
						id='author'
						value={author}
						onChange={e => setAuthor(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Add Book</button>
			</form>
		</div>
	);
};

export default AddBook;
