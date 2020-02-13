import React from "react";
import "./card.styles.css";

export const Card = props => (
	<div className="card-container">
		<img
			alt="customer"
			src={`https://robohash.org/${props.customer.id}?set=set2&size=180x180`}
		/>
		<h2> {props.customer.name} </h2>
		<p> {props.customer.email} </p>
	</div>
);
