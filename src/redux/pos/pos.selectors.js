import { createSelector } from "reselect";

const selectShop = state => state.pos;

export const selectProducts = createSelector([selectShop], pos => pos.products);
