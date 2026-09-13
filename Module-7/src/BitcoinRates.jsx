import { useState, useEffect } from "react";
import useRate from "./useRate";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const rate = useRate(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
      currency,
    currency,
  );

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      {" "}
      <h3>Bitcoin Exchange Rate</h3>{" "}
      <label>
        Choose currency:{" "}
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {" "}
          {options}{" "}
        </select>{" "}
      </label>{" "}
      <p>Current Bitcoin price in {currency} is:</p>
      <br />
      <p style={{ fontSize: "50px" }}>{rate}</p>
    </div>
  );
}

export default BitcoinRates;
