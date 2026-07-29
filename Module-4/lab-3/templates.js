//Exercise 1

// function addCard({ name, age }) {
//   {
//     // clone the template
//     const template = document
//       .getElementById("card-template")
//       .content.cloneNode(true);
//     // populate the template
//     template.querySelector(".card-title").innerText = name;
//     template.querySelector(".card-text").innerText = age;
//     // include the populated template into the page
//     document.querySelector("#card-list").appendChild(template);
//   }
// }

//Exercise 2

// const data = [
//   { name: "bob", age: 23 },
//   { name: "alice", age: 39 },
// ];

// for (dataPiece of data) addCard(dataPiece);

//Exercise 3

const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

let workCard;
const artistCard = document
  .getElementById("card-template")
  .content.cloneNode(true);

artistCard.querySelector(".card-title").innerText = artist.name;

for (work of artist.portfolio) {
  workCard = document.getElementById("card-template").content.cloneNode(true);

  workCard.querySelector(".card-text").style.backgroundImage =
    "url('" + work.url + "')";
  console.log("url('" + work.url + "')");
  artistCard.querySelector(".card").appendChild(workCard);
}

document.getElementById("card-list").appendChild(artistCard);
