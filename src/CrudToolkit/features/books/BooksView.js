import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook, showBooks } from "./BookSlice";

const BooksView = () => {
	const books = useSelector(state => state.booksReducer.books);
	const dispatch = useDispatch();

	const handleDeleteBook = id => {
		dispatch(deleteBook(id));
	};
	return (
		<div>
			<h2>All Books</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{books &&
						books.map(book => {
							const { id, name, author } = book;
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{name}</td>
									<td>{author}</td>
									<td>
										<Link to='/edit-book' state={{ id, name, author }}>
											<button>Edit</button>
										</Link>
										<button onClick={() => handleDeleteBook(id)}>Delete</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default BooksView;
