import React from "react";
import "./pos.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductsForProductGrid } from "../../redux/pos/pos.selectors";
import { updateCollections } from "../../redux/pos/pos.actions";

import {
	ThemeProvider as MuiThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import SubmitButton from "../../components/submit-button/submit-button.component";
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase.util";
import ProductGrid from "../../components/product-grid/product-grid.component";
import CheckoutPage from "../checkout/checkout.component";

const theme = createMuiTheme();

class Pos extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("products");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			console.log(collectionsMap);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { products } = this.props;
		console.log(products);
		return (
			<MuiThemeProvider theme={theme}>
				<React.Fragment>
					<ProductGrid products={products} />
					<CheckoutPage />
					<SubmitButton />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	products: selectProductsForProductGrid
});

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pos);
