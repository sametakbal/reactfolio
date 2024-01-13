import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { i18n } = useTranslation();
	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							{i18n.language === "tr" ? `İletişim Kurma Yolları: Benimle Bağlantı Kurun` :
								`Let's Get in Touch: Ways to Connect with Me`}

						</div>

						<div className="subtitle contact-subtitle">
							{i18n.language === "tr" ? `Benimle iletişime geçmek için gösterdiğiniz ilgi için teşekkür ederim. Geri bildiriminizi, sorularınızı ve önerilerinizi memnuniyetle karşılıyorum. Eğer belirli bir sorunuz veya yorumunuz varsa, benimle doğrudan` :
								`Thank you for your interest in getting in touch with
								me. I welcome your feedback, questions, and
								suggestions. If you have a specific question or
								comment, please feel free to email me directly at`}

							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email + " "}
							</a>
							{i18n.language === 'tr' ? `adresinden e-posta göndermekte özgürsünüz. Tüm mesajlara 24 saat içinde cevap vermeye çalışıyorum, ancak yoğun dönemlerde bu süre biraz daha uzayabilir. Alternatif olarak, web sitemde bulunan iletişim formunu kullanabilirsiniz. Gerekli alanları doldurun ve size en kısa sürede geri döneceğim. Son olarak, sosyal medyada bağlantı kurmayı tercih ediyorsanız, beni `
								: `I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on`}

							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							{i18n.language === 'tr' ? ` adresinde bulabilirsiniz. Orada düzenli güncellemeler paylaşıyor ve takipçilerimle etkileşimde bulunuyorum, bu yüzden çekinmeden bana ulaşın. Tekrar ilginiz için teşekkür ederim ve sizden haber almayı dört gözle bekliyorum!` : ` I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!`}
							{". "}
							.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
