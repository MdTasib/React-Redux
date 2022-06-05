import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showBooks } from "./BookSlice";

const BooksView = () => {
	const books = useSelector(state => state.booksReducer.books);
	const dispatch = useDispatch();

	console.log(books);

	useEffect(() => {
		dispatch(showBooks());
	}, []);

	return (
		<div>
			<h2>All Books</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{books &&
						books.map(book => {
							const { id, name, author } = book;
							return (
								<tr>
									<td>{id}</td>
									<td>{name}</td>
									<td>{author}</td>
									<td>
										<button>Edit</button>
										<button>Delete</button>
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
