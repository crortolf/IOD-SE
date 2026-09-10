import { useState } from "react";

function AddCatForm({ addCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <div>
      <div>
        <label>
          Cat Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Cat Latin Name:
          <input
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          style={{ color: "black" }}
          onClick={() => addCat(name, latinName, imageURL)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddCatForm;
