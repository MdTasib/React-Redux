import {
	ADD_TO_CART,
	ADJUST_QTY,
	LOAD_CURRENT_ITEM,
	REMOVE_FROM_CART,
} from "./shopping-types";

const addToCart = itemID => {
	return {
		type: ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};

const removeFromCart = itemID => {
	return {
		type: REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

const adjustQty = (itemID, value) => {
	return {
		type: ADJUST_QTY,
		payload: {
			id: itemID,
			qty: value,
		},
	};
};

const loadCurrentItem = item => {
	return {
		type: LOAD_CURRENT_ITEM,
		payload: item,
	};
};

export { addToCart, removeFromCart, adjustQty, loadCurrentItem };
