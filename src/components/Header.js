import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<nav
				className="flex justify-between text-black h-16 font-mono relative shadow-sm items-center py-4 bg-white-300"
				role="navigation"
			>
				<Link to="/" className="text-3xl font-bold">Sports Info</Link>
				<div
					className="menu-icon md:hidden block cursor-pointer bg-yellow-300 p-2 text-3xl"
					onClick={handleToggle}
				>
					<GiHamburgerMenu />
				</div>
				<div className="hidden md:block">
					<NavItems />
				</div>
			</nav>
			<div
				className={
					isOpen
						? "grid grid-rows-3 text-center items-center bg-yellow-300"
						: "hidden"
				}
			>
				<NavItems />
			</div>
		</div>
	);
};

export default Header;
