import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const experiences = [
	{
		logo: "./infonal.png",
		company: "Infonal",
		role: "Yazılım Mühendisi",
		duration: "Ocak 2023 - Devam Ediyor"
	},
	{
		logo: "./iqb.png",
		company: "IQB Solutions",
		role: "Jr. Yazılım Mühendisi",
		duration: "Eylül 2021 - Aralık 2022"
	},
	{
		logo: "./h2hsecure.png",
		company: "H2HSecure",
		role: "Jr. Yazılım Mühendisi",
		duration: "Ocak 2021 - Eylül 2021"
	}
];

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Deneyim"
				body={
					<div className="works-body">
						{experiences.map((experience, index) => (
							<div className="work" key={index}>
								<img
									src={experience.logo}
									alt={experience.company}
									className="work-image"
								/>
								<div className="work-title">
									{experience.company}
								</div>
								<div className="work-subtitle">
									{experience.role}
								</div>
								<div className="work-duration">
									{experience.duration}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
