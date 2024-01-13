import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<div className="footer">
			<div className="footer-links">
				<ul className="footer-nav-link-list">
					<li className="footer-nav-link-item">
						<Link to="/">{t('home')}</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link to="/projects">{t('projects')}</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link to="/articles">{t('articles')}</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link to="/contact">{t('contact')}</Link>
					</li>
				</ul>
			</div>

			<div className="footer-credits">
				<div className="footer-credits-text">
					© 2024 by Samet Akbal
				</div>
			</div>
		</div>
	);
};

export default Footer;
