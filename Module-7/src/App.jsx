import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import BitcoinRates from "./BitcoinRates";
import MyAppBar from "./MyAppBar";
import "./App.css";

function App() {
  return (
    <>
      <MyAppBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="rates" element={<BitcoinRates />} />
      </Routes>
    </>
  );
}

export default App;
