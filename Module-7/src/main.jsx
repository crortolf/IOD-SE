import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoodProvider } from "./MoodContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MoodProvider>
        <App />
      </MoodProvider>
    </BrowserRouter>
  </StrictMode>,
);
