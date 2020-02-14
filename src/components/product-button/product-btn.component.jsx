import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./product-btn.styles.scss";

import { Button } from "@material-ui/core";

const ProductButton = ({ item, addItem }) => {
	const { name } = item;
	return (
		<Button
			onClick={() => addItem(item)}
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
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductButton);
