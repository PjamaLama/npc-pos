import React from "react";
import "./animated-button.styles.scss";

const AnimatedButton = () => (
	<div className="animated-button">
		<svg
			width="185"
			height="64"
			viewBox="0 0 185 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="185" height="64" fill="#FFFFF"></rect>
			<g id="Group 1">
				<path
					id="Vector 1"
					d="M184 1H1V63H184V1Z"
					stroke="black"
					className="path"
				/>
			</g>
		</svg>
	</div>
);

export default AnimatedButton;
