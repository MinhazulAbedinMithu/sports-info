import React from "react";
import { useHistory } from "react-router";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Card = ({ card }) => {
	const { idTeam, strTeam, strTeamBadge, strSport } = card;

	const history = useHistory();
	const handleShowDetails = () => {
		const url = `/team/${idTeam}`;
		history.push(url);
	};
	return (
		<div className="text-center items-center border p-4 shadow-lg rounded-md">
			<img className="w-60 mx-auto" src={strTeamBadge} alt="" />
			<h2 className="font-black text-3xl">{strTeam}</h2>
			<h5>Sports Type: {strSport}</h5>
			<button
				className="flex mx-auto bg-yellow-400 p-3 rounded-md items-center align-center"
				onClick={handleShowDetails}
			>
				<span>Explore </span>
				<AiOutlineDoubleRight />
			</button>
		</div>
	);
};

export default Card;
