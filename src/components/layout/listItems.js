import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { selectCurrentUser } from "../../redux/user/user.selectors";

export const mainListItems = (
	<div>
		<Link to="/">
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				POS
			</ListItem>
		</Link>
		<Link to="/customers">
			<ListItem button>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				Customers
			</ListItem>
		</Link>
		<Link to="/dashboard">
			<ListItem button>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				Reports
			</ListItem>
		</Link>
		<Link to="/dashboard">
			<ListItem button>
				<ListItemIcon>
					<AddCircleIcon />
				</ListItemIcon>
				Add Stock
			</ListItem>
		</Link>
	</div>
);

const SecondaryListItems = ({ currentUser }) => (
	<div>
		{currentUser ? (
			<div to="/signIn" onClick={() => auth.signOut()}>
				<ListItem button>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					Sign Out
				</ListItem>
			</div>
		) : (
			<Link to="/signIn">
				<ListItem button>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					Sign In
				</ListItem>
			</Link>
		)}
	</div>
);
//state is from root.reducer --> user.reducer
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SecondaryListItems);
