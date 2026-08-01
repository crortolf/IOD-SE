let articles = [];
let displayMax = 10;

const fetchNews = async () => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      articles = response.data;
      updateNews();
    })
    .catch((e) => console.error(e));
};

const updateNews = () => {
  let newsItemCard;
  const container = document
    .getElementById("card-container")
    .querySelector(".row");

  container.innerHTML = "";

  for (let i = 0; i < displayMax; i++) {
    let newsItem = articles[i];
    newsItemCard = document
      .getElementById("card-template")
      .content.cloneNode(true);

    newsItemCard.querySelector(".card-title").innerText = newsItem.title;
    newsItemCard.querySelector(".card-text").innerText = newsItem.content;

    container.appendChild(newsItemCard);
  }
};

fetchNews();
