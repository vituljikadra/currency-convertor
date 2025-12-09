import { useEffect, useState } from "react";

const Usecure = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.rates);
      })
      .catch((err) => console.log("Error:", err));
  }, [currency]);

  return data;
};

export default Usecure;
