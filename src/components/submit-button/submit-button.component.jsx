import React from "react";
import { Button } from "@material-ui/core";
import "./submit-button.styles.scss";

const SubmitButton = () => (
	<Button
		variant="contained"
		size="large"
		color="primary"
		className="submit-button"
	>
		Next
	</Button>
);

export default SubmitButton;
