const news = [
    {
        "heading": "Article Loaded From JS",
        "excerpt": "This news article and those that follow are loaded from news.js!"
    },
    {
        "heading": "A Second Article",
        "excerpt": "Because the first article can't be by itself."
    },
    {
        "heading": "Third Time's The Charm",
        "excerpt": "We can have as many articles as we want!"
    }
];
const newsElement = document.querySelector('.news');
let newsHTML = '';

news.forEach(function(article) {
    newsHTML += `
        <article>
            <h3>${article.heading}</h3>
            <p>${article.excerpt}</p>
        </article>
    `;
});

newsElement.innerHTML += newsHTML;
