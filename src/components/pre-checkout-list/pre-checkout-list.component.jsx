import "./pre-checkout-list.styles.scss";
//rce
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.background.default
		}
	}
}))(TableRow);

class PreCheckoutList extends Component {
	constructor() {
		super();
		this.state = {
			rows: [
				{
					name: "",
					price: ""
				}
			]
		};
	}

	AddProductToList = product => {
		this.setState({
			rows: [...this.state.rows, product]
		});
	};

	render() {
		return (
			<div className="preCheckoutList">
				<TableContainer component={Paper}>
					<Table className={"table"} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell align="left">Item</StyledTableCell>
								<StyledTableCell align="left">Price</StyledTableCell>
								<StyledTableCell align="right">Total</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.rows.map(row => (
								<StyledTableRow key={row.name}>
									<StyledTableCell align="left">{row.name}</StyledTableCell>
									<StyledTableCell align="left">{row.price}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

export default PreCheckoutList;
