import React from "react";
import { Link } from "react-router-dom";


import "./styles/logo.css";

const Logo = (props) => {
	let { link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (null
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
