const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Youn Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages:"12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐"
	}
]

function getArticlesWrapper() {
	return document.querySelector("#articles-wrapper");
}

function makeArticleMarkup(articleData) {
	return `
		<div class="article-meta">
			<h2>${articleData.date}</h2>
			<h2>${articleData.ages}</h2>
			<h2>${articleData.genre}</h2>
			<h2>${articleData.stars}</h2>
		</div>
		<div class="article-content">
			<h3>${articleData.title}</h3>
			<img src="${articleData.imgSrc}" alt="${articleData.imgAlt}"/>
			<p>${articleData.description}</p>
			<a>Read More...</a>
		</div>
	`;
}

function makeArticleElement(articleData) {
	const newArticle = document.createElement('article');
	newArticle.classList.add('blog-post');
	const articleMarkup = makeArticleMarkup(articleData);
	newArticle.innerHTML = articleMarkup;
	return newArticle;
}

function placeArticles(articlesArray) {
	const articlesWrapper = getArticlesWrapper();

	if (!articlesWrapper) {
		console.error('Error, #articles-wrapper not found. Check your html code.')
		return;
	}

	articlesWrapper.innerHTML = '';


	articlesArray.forEach(articleData => {
		const articleElement = makeArticleElement(articleData);
		
		articlesWrapper.appendChild(articleElement);
	});
}

function readyBlog() {
	placeArticles(articles);
}

readyBlog();