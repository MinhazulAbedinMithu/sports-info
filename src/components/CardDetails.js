import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "./Banner";
import { GoLocation } from "react-icons/go";
import {
	FaFlagCheckered,
	FaTransgender,
	FaTwitter,
	FaFacebookF,
	FaInstagram,
} from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";
import teamImgMale from "../images/team.png";
import teamImgFemale from "../images/team.png";

const CardDetails = () => {
	const { teamId } = useParams();
	const [team, setTeam] = useState([]);
	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setTeam(data.teams[0]));
	}, [teamId]);

	const {
		strTeam,
		strFormedYear,
		strCountry,
		strSport,
		strGender,
		strFacebook,
		strInstagram,
		strTwitter,
		strDescriptionEN,
		strTeamBadge,
		strTeamBanner,
	} = team;
	return (
		<div>
			<Banner bannerCont={strTeam} strTeamBudge={strTeamBadge} Image="true" />
			<div className="team-info bg-blue-900 w-3/4 mx-auto my-4 rounded-md p-4 md:grid grid-cols-2 text-center items-center">
				<div className="team-cont text-white pl-5">
					<h1 className="text-4xl text-center">{strTeam}</h1>
					<ul className="py-4">
						<li className="flex py-2">
							<GoLocation />
							<b className="px-2">Founded:</b>
							<span>{strFormedYear}</span>
						</li>
						<li className="flex py-2">
							<FaFlagCheckered />
							<b className="px-2">Country:</b>
							<span> {strCountry}</span>
						</li>
						<li className="flex py-2">
							<RiFootballLine />
							<b className="px-2">Type:</b>
							<span>{strSport}</span>
						</li>
						<li className="flex py-2">
							<FaTransgender />
							<b className="px-2">Gender:</b>
							<span>{strGender}</span>
						</li>
					</ul>
				</div>
				<div className="team-img">
					{strGender === "Female" ? (
						<img src={teamImgFemale} alt="team" />
					) : (
						<img src={teamImgMale} alt="team" />
					)}
				</div>
			</div>
			<div className="team-desc">
				<p>{strDescriptionEN}</p>
			</div>
			<div className="social mx-auto text-center content-between w-40 my-4">
				<div className="icons flex">
					<a href={strTwitter} className="text-yellow-300  bg-black mx-2 rounded-xl text-2xl p-4">
						<FaTwitter />
					</a>
					<a href={strFacebook} className="text-yellow-300  bg-black mx-2 rounded-xl text-2xl p-4">
						<FaFacebookF />
					</a>
					<a href={strInstagram} className="text-yellow-300  bg-black mx-2 rounded-xl text-2xl p-4">
						<FaInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardDetails;
