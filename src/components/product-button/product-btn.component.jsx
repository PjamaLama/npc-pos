import React from "react";
import "./product-btn.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import { Button } from "@material-ui/core";

const ProductButton = ({ item, addItem }) => {
	return (
		<Button
			onClick={() => addItem(item)}
			variant="contained"
			size="large"
			color="primary"
			className="product-button"
		>
			{item.name}
		</Button>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductButton);
