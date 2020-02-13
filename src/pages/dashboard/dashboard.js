import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Chart from "./chart";
import Deposits from "./deposits.js";
import Orders from "./orders";

// import Guage from "../../components/guage/guage.component";
import BarGraph from "../../components/bar-graph/bar-graph.component";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},

	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto"
	},
	container: {
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column"
	},
	fixedHeight: {
		height: 240
	}
}));

export default function Dashboard() {
	const classes = useStyles();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					{/* Chart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<Chart />
						</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<Deposits />
						</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Orders />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<BarGraph />
						</Paper>
					</Grid>
				</Grid>
				<Box pt={4}>
					<Copyright />
				</Box>
			</Container>
		</main>
	);
}
