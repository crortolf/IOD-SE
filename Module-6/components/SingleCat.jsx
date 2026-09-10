function SingleCat({ cat, deleteCat }) {
  return (
    <li>
      {cat.name}, {cat.latinName}
      <br />
      <img src={cat.imageURL} alt={cat.latinName} />
      <br />
      <button style={{ color: "black" }} onClick={() => deleteCat(cat.id)}>
        Delete
      </button>
    </li>
  );
}

export default SingleCat;
