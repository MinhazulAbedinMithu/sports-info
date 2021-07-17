import React from "react";
import bannerImg from "../images/banner.png";

const Banner = ({ bannerCont, strTeamBudge, Image }) => {
	return (
		<div
			style={{ backgroundImage: `url(${bannerImg})` }}
			className=" text-center h-60 w-100 bg-center bg-cover bg-no-repeat p-4"
		>
			<div className="flex items-center justify-center align-middle my-auto py-auto">
				<div className={Image ? "inline-block" : "hidden"}>
					<img src={strTeamBudge} alt="banner image" className="w-40 h-30" />
				</div>
				<div className=" py-auto text-4xl font-bold align-middle my-auto">
					<h4>{Image ? bannerCont : "Sports Info"}</h4>
				</div>
			</div>
		</div>
	);
};

export default Banner;
