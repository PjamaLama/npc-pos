import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
	auth,
	createUserProfileDocument
} from "./components/firebase/firebase.util";
import { connect } from "react-redux";

import "./App.css";

import Layout from "./components/layout/layout.component";
import Pos from "./pages/pos/pos.component";
import Dashboard from "./pages/dashboard/dashboard";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Customers from "./pages/customers/customers.component";
import Completed from "./pages/completed/completed.component";
import { setCurrentUser } from "./redux/user/user.actions";

export class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Switch>
					<Route
						exact
						path="/signIn"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
					<Route exact path="/" component={Pos} />
					<Route exact path="/customers" component={Customers} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/completed" component={Completed} />
				</Switch>
				<Layout />
			</div>
		);
	}
}
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
