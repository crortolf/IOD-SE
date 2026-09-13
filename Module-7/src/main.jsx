import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BitcoinRates from "./BitcoinRates";
import Emoji from "./Emoji";
import { MoodProvider } from "./MoodContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoodProvider>
      <BitcoinRates />
      <Emoji />
    </MoodProvider>
  </StrictMode>,
);
