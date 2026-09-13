import { useMoodContext } from "./MoodContext";

function Emoji() {
  const { happy, setHappy } = useMoodContext();

  return (
    <>
      <div style={{ justifyContent: "center", padding: "50px" }}>
        <img
          style={{ width: "300px", justifyContent: "center" }}
          src={hamsterImage(happy)}
        />
        <br />
        <button style={{ color: "black" }} onClick={() => setHappy(!happy)}>
          Change
        </button>
      </div>
    </>
  );
}

const hamsterImage = (happy) => {
  if (happy)
    return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.x6zL3LnG5IMmHAhFgryTCwAAAA%3Fr%3D0%26pid%3DApi&f=1&ipt=918b99cf7b1d1db507c96f6a03c142f198ec6b62b592cd154ed1000abdaa2501&ipo=images";
  return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.i1xWQcgUd1c8r2jFEbZg3gHaG6%3Fr%3D0%26pid%3DApi&f=1&ipt=993780a3ed42f22df3025374f6812581906e8b8deacbd0b932636b0d3f7d840f&ipo=images";
};

export default Emoji;
