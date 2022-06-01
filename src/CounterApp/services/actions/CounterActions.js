import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstants";

const incrementCount = () => {
	return {
		type: INCREMENT,
	};
};

const decrementCount = () => {
	return {
		type: DECREMENT,
	};
};

const resetCount = () => {
	return {
		type: RESET,
	};
};

export { incrementCount, decrementCount, resetCount };
