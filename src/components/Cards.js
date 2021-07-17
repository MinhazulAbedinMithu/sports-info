import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
	const [teams, setTeams] = useState([]);
	useEffect(() => {
		const url =
			"https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";

		fetch(url)
			.then((res) => res.json())
			.then((data) => setTeams(data.teams));
	}, []);
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center">
			{teams.map((card) => (
				<Card key={card.idTeam} card={card}></Card>
			))}
		</div>
	);
};

export default Cards;
