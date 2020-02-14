import React, { Component } from "react";
import "./completed.styles.scss";

export class Completed extends Component {
	constructor() {
		super();

		this.state = {
			tick: ""
		};
	}
	check() {
		this.setState({
			tick: "checked"
		});
	}

	render() {
		return (
			<div className="wrapper">
				<div className="group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="200"
						height="200"
						viewBox="0 0 48 48"
						id="check"
						className={this.state.tick}
					>
						<path
							fill="#fff"
							d="M18 32.34l-8.34-8.34-2.83 2.83 11.17 11.17 24-24-2.83-2.83z"
						/>
					</svg>
					<button onClick={this.check.bind(this)}>Toggle</button>
				</div>
			</div>
		);
	}
}

export default Completed;
