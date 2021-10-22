function getArticleGenerator(articles) {
    const articlesList = articles;
    const div = document.getElementById('content');

    function show() {
        if (articlesList.length > 0) {
            const article = document.createElement('article');
            article.textContent = articlesList.shift();
            div.appendChild(article);
        }
    }

    return show;
}