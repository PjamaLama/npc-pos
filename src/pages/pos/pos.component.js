import React, { Component } from "react";
import "./pos.styles.scss";
import POS_DATA from "./pos.data.js";

import ProductGrid from "../../components/product-grid/product-grid.component";
import PreCheckoutList from "../../components/pre-checkout-list/pre-checkout-list.component";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import SubmitButton from "../../components/submit-button/submit-button.component";

export class Pos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: POS_DATA
		};
	}

	render() {
		const { products } = this.state;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<ProductGrid products={products} />
					<PreCheckoutList />
					<SubmitButton />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Pos;
