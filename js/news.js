const news = [
    {
        "heading": "Article Loaded From JS",
        "excerpt": "This news article and those that follow are loaded from news.js!",
        "image": "img/placeimg_100_100_animals_1.jpg"
    },
    {
        "heading": "A Second Article",
        "excerpt": "Because the first article can't be by itself.",
        "image": "img/placeimg_100_100_animals_2.jpg"
    },
    {
        "heading": "Third Time's The Charm",
        "excerpt": "We can have as many articles as we want!",
        "image": "img/placeimg_100_100_animals_3.jpg"
    }
];
const newsElement = document.querySelector('.news');
let newsHTML = '';

news.forEach(function(article) {
    newsHTML += `
        <article>
            <img src="${article.image}">
            <h3>${article.heading}</h3>
            <p>${article.excerpt} <a href="#">Read more...</a></p>
        </article>
    `;
});

newsElement.innerHTML += newsHTML;
