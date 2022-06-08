import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [id, setId] = useState(location.state.id);
	const [name, setName] = useState(location.state.name);
	const [author, setAuthor] = useState(location.state.author);

	function handleSubmit(e) {
		e.preventDefault();
		const updatedBook = {
			name,
			author,
			id,
		};

		dispatch(updateBook(updatedBook));
		navigate("/show-books");
	}

	return (
		<div>
			<h2>Edit Book</h2>
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
				<button type='submit'>Update Book</button>
			</form>
		</div>
	);
};

export default EditBook;
