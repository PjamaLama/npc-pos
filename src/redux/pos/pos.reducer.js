import POS_DATA from "./pos.data";

const INITIAL_STATE = {
	products: POS_DATA
};

const posReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default posReducer;
