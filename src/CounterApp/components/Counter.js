import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrementCount,
	incrementCount,
	resetCount,
} from "../services/actions/CounterActions";

const Counter = () => {
	const count = useSelector(state => state.count);

	const dispatch = useDispatch();

	const handleIncrement = () => dispatch(incrementCount());
	const handleDncrement = () => dispatch(decrementCount());
	const handleReset = () => dispatch(resetCount());

	return (
		<div>
			<h4>Counter</h4>
			<h3>Count: {count}</h3>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDncrement}>Decrement</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default Counter;
