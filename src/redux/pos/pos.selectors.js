import { createSelector } from "reselect";

const selectShop = state => state.pos;

export const selectProducts = createSelector([selectShop], pos => pos.products);

export const selectProductsForProductGrid = createSelector(
	[selectProducts],
	products => (products ? Object.keys(products).map(key => products[key]) : [])
);
