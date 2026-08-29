function SingleCat({ cat }) {
  return (
    <li>
      {cat.name}, {cat.latinName}
      <img src={cat.imageURL} alt={cat.latinName} />
    </li>
  );
}

export default SingleCat;
