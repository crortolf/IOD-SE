import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import BitcoinRates from "./BitcoinRates";
import "./App.css";

function App() {
  const nav = useNavigate();

  return (
    <>
      <div className="nav-bar">
        <button className="nav-button" onClick={() => nav("/")}>
          Home
        </button>
        <button className="nav-button" onClick={() => nav("/login")}>
          Login
        </button>
        <button className="nav-button" onClick={() => nav("/rates")}>
          Rates
        </button>
      </div>
      <br />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="rates" element={<BitcoinRates />} />
      </Routes>
    </>
  );
}

export default App;
