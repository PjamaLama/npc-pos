import ShopActionTypes from "./pos.types";

const INITIAL_STATE = {
	products: null
};

const posReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				products: action.payload
			};
		default:
			return state;
	}
};

export default posReducer;
