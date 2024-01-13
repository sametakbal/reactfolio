import React from "react";

function article_1() {
	return {
		date: ['20 Ekim 2020', '20 Oct 2020'],
		title: "Spring Boot ile Rest Api Crud İşlemleri",
		description:
			"Merhaba, Spring Boot ile bir restful api yapıp, temel veritabanı işlemlerini nasıl yaparız onu anlatacağım.",
		keywords: [
			"Spring Boot",
			"Java",
			"Restful API"
		],
		link: 'https://medium.com/@sametakbal7/spring-boot-ile-rest-api-crud-i%CC%87%C5%9Flemleri-c09ff159fde6',
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<div className="article-content">
				<div className="paragraph">Content of article 1</div>
				<img
					src="https://picsum.photos/200/300"
					alt="random"
					className="randImage"
				/>
			</div>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
