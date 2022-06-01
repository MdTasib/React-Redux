import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todoActions";

const AllTodo = () => {
	const { todos, isLoading, error } = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTodos());
	}, []);

	return (
		<div>
			hello
			{isLoading && <h2>Loading .... </h2>}
			{error && <h5>{error.message}</h5>}
			<section>
				{todos.map(todo => (
					<article key={todo.id}>
						<h3>{todo.id}</h3>
						<h3>{todo.title}</h3>
					</article>
				))}
			</section>
		</div>
	);
};

export default AllTodo;
