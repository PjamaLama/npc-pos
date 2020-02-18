import React from "react";
import "./pos.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProducts } from "../../redux/pos/pos.selectors";

import ProductGrid from "../../components/product-grid/product-grid.component";
import PreCheckoutList from "../../components/pre-checkout-list/pre-checkout-list.component";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import SubmitButton from "../../components/submit-button/submit-button.component";
import AnimatedButton from "../../components/animiated-button/animated-button.component";

const Pos = ({ products }) => (
	<MuiThemeProvider>
		<React.Fragment>
			<ProductGrid products={products} />
			<PreCheckoutList />
			<AnimatedButton />
		</React.Fragment>
	</MuiThemeProvider>
);

const mapStateToProps = createStructuredSelector({
	products: selectProducts
});

export default connect(mapStateToProps)(Pos);
