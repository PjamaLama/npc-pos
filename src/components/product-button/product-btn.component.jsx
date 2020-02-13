import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./product-btn.styles.scss";

import { Button } from "@material-ui/core";

const ProductButton = ({ product, addItem }) => {
	const { name } = product;
	return (
		<Button
			onClick={() => addItem(product)}
			variant="contained"
			size="large"
			color="primary"
			className="product-button"
		>
			{name.toUpperCase()}
		</Button>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: product => dispatch(addItem(product))
});

export default connect(null, mapDispatchToProps)(ProductButton);
