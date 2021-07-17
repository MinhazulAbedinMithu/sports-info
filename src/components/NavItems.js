import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
	return (
		<>
			<Link className="p-4" to="/">
				Home
			</Link>
			<Link className="p-4" to="/about">
				About
			</Link>
			<Link className="p-4" to="/contact">
				Contact
			</Link>
		</>
	);
};

export default NavItems;
