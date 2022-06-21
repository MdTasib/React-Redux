const initialCart = [];

const handleCart = (state = initialCart, action) => {
	const product = action.payload;
	switch (action.type) {
		case "ADDITEM":
			// check product is already exist
			const exist = state.find(pd => pd.id === product.id);
			if (exist) {
				// increase the quantity
				return state.map(pd =>
					pd.id === product.id ? { ...pd, qty: pd.qty + 1 } : pd
				);
			} else {
				const product = action.payload;
				return [...state, { ...product, qty: 1 }];
			}

		case "DELITEM":
			const exist1 = state.find(pd => pd.id === product.id);
			if (exist1.qty === 1) {
				return state.filter(pd => pd.id !== exist1.id);
			} else {
				return state.map(pd =>
					pd.id === product.id ? { ...pd, qty: pd.qty - 1 } : pd
				);
			}

		default:
			return state;
	}
};

export default handleCart;
