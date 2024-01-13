import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import { useTranslation } from "react-i18next";

const navItems = [
	{ id: 1, name: "home", path: "/" },
	{ id: 3, name: "projects", path: "/projects" },
	{ id: 4, name: "articles", path: "/articles" },
	{ id: 5, name: "contact", path: "/contact" },
];

const langs = [
	{ label: "Türkçe", code: "tr" },
	{ label: "English", code: "en" }
];

const NavBar = (props) => {
	const { active } = props;
	const { i18n, t } = useTranslation();

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
		localStorage.setItem('lang', e.target.value);
	}
	const updateLanguage = () => {
		const newLang = i18n.language === 'tr' ? 'en' : 'tr';
		i18n.changeLanguage(newLang);
		localStorage.setItem('lang', newLang);
	}
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						{navItems.map((item) => (
							<li
								style={{ marginLeft: "10px" }}
								key={item.id}
								className={
									active === item.name
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={item.path}>{t(item.name)}</Link>
							</li>
						))}
						<li className="nav-item" style={{ marginLeft: "5px" }} onClick={() => updateLanguage()}>
							<img
								alt="tr"
								src={i18n.language + '.png'}
								style={{ width: "20px", height: "20px", cursor: "pointer" }}
							/>
						</li>
						{/**
					 * 	<li className="nav-item" style={{ marginLeft: "5px" }}>
							<select defaultValue={i18n.language} onChange={handleLanguageChange}>
								{langs.map(({ code, label }) => (
									<option key={code} value={code}>
										{label}
									</option>
								))}
							</select>
						</li>
					 */}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
