let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

const updateNews = () => {
  let newsItemCard;
  const container = document
    .getElementById("card-container")
    .querySelector(".row");

  container.innerHTML = "";

  for (const newsItem of news) {
    newsItemCard = document
      .getElementById("card-template")
      .content.cloneNode(true);

    newsItemCard.querySelector(".card-title").innerText = newsItem.title;
    newsItemCard.querySelector(".card-text").innerText = newsItem.content;

    container.appendChild(newsItemCard);
  }
};

const newArticle = () => {
  const article = {};

  article.title = document.getElementById("new-title").value;
  article.content = document.getElementById("new-content").value;

  news.push(article);
};

updateNews();
setInterval(updateNews, 5000);
