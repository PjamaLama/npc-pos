import React from "react";
import "./product-grid.styles.scss";

import ProductButton from "../product-button/product-btn.component";

const ProductGrid = ({ products }) => (
	<div className="product-buttons-grid">
		{products.map(product => (
			<ProductButton key={product.id} item={product} />
		))}
	</div>
);

export default ProductGrid;
