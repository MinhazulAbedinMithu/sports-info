import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

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
				<Link to="/">Sports Info</Link>
				<div
					className="menu-icon md:hidden block cursor-pointer bg-yellow-300 p-2"
					onClick={handleToggle}
				>
					<svg
						className="text-4xl"
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
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
