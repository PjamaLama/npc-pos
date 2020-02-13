import React from "react";
import ProductButton from "../product-button/product-btn.component";
import "./product-grid.styles.scss";

const ProductGrid = ({ products }) => (
	<div className="product-buttons-grid">
		{products.map(product => (
			<ProductButton key={product.id} product={product} />
		))}
	</div>
);

export default ProductGrid;
