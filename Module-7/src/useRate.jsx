import axios from "axios";
import { useState, useEffect } from "react";

export default function useRate(url, currency) {
  const [rate, setRate] = useState("");

  let ignore = false;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data.bitcoin[currency.toLowerCase()])
      .then((retRate) => {
        if (!ignore) setRate(retRate);
      });

    return () => (ignore = true);
  }, [url]);

  return rate;
}
