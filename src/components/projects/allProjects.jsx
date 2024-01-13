import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import { useTranslation } from "react-i18next";

const AllProjects = () => {
	const { i18n } = useTranslation();

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project) => (
				<div className="all-projects-project" key={project.id}>
					<Project
						logo={project.logo}
						title={project.title}
						description={i18n.language === 'tr' ? project.description[0] : project.description[1]}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
