import SingleCat from "../components/SingleCat.jsx";
import { useState } from "react";

const cats = [
  {
    id: 0,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.OpTzOEWq4jGlFDNhdtphvQHaEo%3Fpid%3DApi&f=1&ipt=e78ff022801e2a9a66e88e3373dffb112665cae468d1a63eceeecd7f95194bbf&ipo=images",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.8ZgnRnDt2OA9WFchHH2MdAHaFV%3Fr%3D0%26pid%3DApi&f=1&ipt=c9152d428fda589f70e21f6b777e58937796a9fed7d3951eea11bb6aaf339993&ipo=images",
  },
  {
    id: 6,
    name: "Jaguar",
    latinName: "Panthera onca",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uaIXg5cvC_PpTmg_fzWcSAHaEo%3Fr%3D0%26pid%3DApi&f=1&ipt=b910a87df6e477964c8804ef7394fe03a78b192307061023fd3d7eb0313a27c0&ipo=images",
  },
  {
    id: 5,
    name: "Leopard",
    latinName: "Panthera pardus",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.FuOMtL9OEyqGxQNolsHp1AHaDt%3Fr%3D0%26pid%3DApi&f=1&ipt=ddddcc2114d4fa61b22e49d0f584ccf6d4afedc27344f956ade59309fde9915d&ipo=images",
  },
  {
    id: 4,
    name: "Lion",
    latinName: "Panthera leo",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.1LuyE36LL5J5KtpK3gY6OwHaF6%3Fr%3D0%26pid%3DApi&f=1&ipt=b6557be26555bdb9d3c5bd909e9f8ea78aa2998f8a7c0ce8e09a597097ee35bd&ipo=images",
  },
  {
    id: 3,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.i7cPZlygi2-CMevRwCbfmgHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=0ce7d448286e319a4e2f79cba9504fc5a70db2ff57a4e720938919989e2b03b5&ipo=images",
  },
  {
    id: 1,
    name: "Tiger",
    latinName: "Panthera tigris",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP._xd5WzLBRK0bDRy9gbOYuQHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=ce900e3e51ced58b6a516a4298031794a64efc2c9c7c9d45d9655997658ab1d4&ipo=images",
  },
];

function BigCats() {
  const [sortMode, setSortMode] = useState(0);
  const [filterMode, setFilterMode] = useState(true);

  let catList;

  if (sortMode === 0) cats.sort((cat1, cat2) => cat1.id - cat2.id);
  else if (sortMode === 1)
    cats.sort((cat1, cat2) => cat1.name.localeCompare(cat2.name));
  else cats.sort((cat1, cat2) => cat2.name.localeCompare(cat1.name));

  if (!filterMode) catList = cats;
  else
    catList = cats.filter((cat) => {
      if (cat.latinName.substring(0, 8) === "Panthera") return true;
      return false;
    });
  return (
    <>
      <button onClick={() => setSortMode(0)}>Sort by ID</button>
      <button onClick={() => setSortMode(1)}>Sort Alphabetically</button>
      <button onClick={() => setSortMode(2)}>
        Sort Reverse Alphabetically
      </button>
      <button onClick={() => setFilterMode(true)}>
        Display Panthera family
      </button>
      <button onClick={() => setFilterMode(false)}>Reset</button>
      <ol>
        )
        {catList.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ol>
    </>
  );
}

export default BigCats;
