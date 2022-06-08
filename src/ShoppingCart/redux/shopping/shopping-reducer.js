import {
	ADD_TO_CART,
	ADJUST_QTY,
	LOAD_CURRENT_ITEM,
	REMOVE_FROM_CART,
} from "./shopping-types";

const initialState = {
	products: [
		{
			id: 1,
			title: "This is the COOLEST Cube Ever",
			description:
				"This cube will keep you busy the entire day and it is very fun to play with",
			price: 15.0,
			image:
				"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		},
		{
			id: 2,
			title: "Large Coffee Cup",
			description:
				"Get a big cup of coffee every morning before the day starts",
			price: 20.0,
			image:
				"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		},
		{
			id: 3,
			title: "Books That CHANGED My Life",
			description:
				"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
			price: 150.0,
			image:
				"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
		},
	],
	cart: [],
	currentItem: null,
};

console.log(initialState);

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// Great Item data from products array
			const item = state.products.find(
				product => product.id === action.payload.id
			);
			// Check if Item is in cart already
			const inCart = state.cart.find(item =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				cart: inCart
					? state.cart.map(item =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...item, qty: 1 }],
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload.id),
			};
		case ADJUST_QTY:
			return {
				...state,
				cart: state.cart.map(item =>
					item.id === action.payload.id
						? { ...item, qty: +action.payload.qty }
						: item
				),
			};
		case LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
