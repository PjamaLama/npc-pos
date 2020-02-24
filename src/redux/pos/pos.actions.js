import ShopActionTypes from "./pos.types";

export const updateCollections = collectionsMap => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap
});
