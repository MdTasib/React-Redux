const addCart = product => {
	return {
		type: "ADDITEM",
		payload: product,
	};
};

const delCart = product => {
	return {
		type: "DELITEM",
		payload: product,
	};
};

export { addCart, delCart };
