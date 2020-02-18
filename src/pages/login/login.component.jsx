import React from "react";
import "./login.styles.scss";

import landScape from "../../assets/landScape.svg";
import loginCard from "../../assets/loginCard.svg";
import user from "../../assets/user.svg";

const Login = () => (
	<div className="login">
		<figure>
			<img src={loginCard} alt="loginCard" id="loginCard" />
			<img src={landScape} alt="landScape" id="landScape" />
			<img src={user} alt="user" id="user" />
		</figure>
	</div>
);
export default Login;
