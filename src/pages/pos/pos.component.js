import React, { Component } from "react";
import "./pos.styles.scss";

import ProductGrid from "../../components/product-grid/product-grid.component";
import PreCheckoutList from "../../components/pre-checkout-list/pre-checkout-list.component";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import SubmitButton from "../../components/submit-button/submit-button.component";

export class Pos extends Component {
	constructor() {
		super();

		this.state = {
			step: 1,
			products: [
				{
					name: "Standard",
					price: 90,
					id: 1
				},
				{
					name: "Long",
					price: 90,
					id: 2
				},
				{
					name: "Square Large",
					price: 90,
					id: 3
				},
				{
					name: "Square Small",
					price: 90,
					id: 4
				},
				{
					name: "Personalized",
					price: 90,
					id: 5
				},
				{
					name: "Black Standard",
					price: 90,
					id: 6
				},
				{
					name: "Black Long",
					price: 90,
					id: 7
				}
			]
		};
	}

	render() {
		const products = this.state.products;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<ProductGrid products={products} />
					<PreCheckoutList products={products} />
					<SubmitButton nextStep={this.props.nextStep} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Pos;
