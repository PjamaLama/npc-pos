import React, { Component } from "react";
import "./customers.styles.scss";
import { CardList } from "../../components/card-list/card-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";

export class Customers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			customers: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(customers => this.setState({ customers: customers }));
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { customers, searchField } = this.state;
		const filteredCustomers = customers.filter(customer =>
			customer.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<SearchBox
					placeholder="Search Customers"
					handleChange={this.handleChange}
				/>
				<CardList customers={filteredCustomers} />
			</div>
		);
	}
}

export default Customers;
