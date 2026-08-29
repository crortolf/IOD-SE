import Greeting from "../components/Greeting.jsx";
import BigCats from "../components/BigCats.jsx";
import Emoji from "../components/Emoji.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Greeting name="Chris">
        <p>Hello RVA</p>
      </Greeting>
      <BigCats />
      <Emoji />
    </>
  );
}

export default App;
