fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    const container = document
      .getElementById("card-container")
      .querySelector(".row");
    container.innerHTML = "";

    for (const product of json) {
      const shopItemCard = document
        .getElementById("card-template")
        .content.cloneNode(true);

      shopItemCard.querySelector(".card-title").innerText = product.title;
      shopItemCard.querySelector(".card-text").innerText = product.description;
      shopItemCard.querySelector(".card-img-top").src = new URL(product.image);

      container.appendChild(shopItemCard);
    }
  });
