import React from "react";
import { useHistory } from "react-router";

const Card = ({ card }) => {
	const { idTeam, strTeam, strTeamBadge, strSport } = card;
	
	const history = useHistory();
	const handleShowDetails = () => {
		const url = `/team/${idTeam}`;
		history.push(url);

	}
	return (
		<div className="text-center items-center border p-4 shadow-lg rounded-md">
			<img className="w-60 mx-auto" src={strTeamBadge} alt="" />
			<h2 className="font-black text-3xl">{strTeam}</h2>
			<h5>Sports Type: {strSport}</h5>
			<button className="flex mx-auto bg-yellow-400 p-3 rounded-md" onClick={handleShowDetails}>
				<span>Explore </span>
				<svg
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
						d="M13 5l7 7-7 7M5 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Card;
