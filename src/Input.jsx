import { useState } from "react";

import useCurrencyInfo from "./hook/customhook";
const Input = () => {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState();
  const [currencyType, setCurrencyType] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const currencyData = useCurrencyInfo(currencyType);
  const handler = () => {
    const rate = currencyData[toCurrency];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };
  return (
    <div className="parent-div">
      <h1>Currency Convertor</h1>
      <div className="child-div1">
        <div className="child-div2">
          <label htmlFor="from">From</label>
          <input
            type="number"
            id="from"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>

        <div className="child-div2">
          <label htmlFor="">Currency Type</label>
          <select
            value={currencyType}
            onChange={(e) => setCurrencyType(e.target.value)}
          >
            {currencyData &&
              Object.keys(currencyData).map((cur) => (
                <option key={cur} value={cur}>
                  {cur.toUpperCase()}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="child-div1">
        <div className="child-div2">
          <label htmlFor="from">To</label>
          <input type="number" id="from" value={convertedAmount} />
        </div>

        <div className="child-div2">
          <label htmlFor="">Currency Type</label>
          <select
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
            }}
          >
            {Object.keys(currencyData).map((val) => (
              <option key={val} value={val}>
                {val.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button onClick={handler}>
          Convert {currencyType.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
export default Input;
