import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import { GET_CURRENCIES } from "../../data/shop-data";

import "./currency-switcher-dropdown.styles.scss";

const CurrencySwitcherDropdown = () => {
  const [currenciesAvailable, setCurrenciesAvailable] = useState([]);

  const response = useQuery(GET_CURRENCIES);
  const { loading, error, data } = response;

  const { currencyLabel, setChosenCurrency } = useContext(
    CurrencySwitcherContext
  );

  useEffect(() => {
    if (data) {
      const { currencies } = data;
      setCurrenciesAvailable(currencies);
    }
  }, [data]);

  return (
    <div className="currency-switcher-dropdown-container">
      {currenciesAvailable.map((currency) => (
        <div
          key={currency.label}
          onClick={() => setChosenCurrency(currency)}
          className="currency-label-box"
          style={
            currency.label === currencyLabel
              ? { backgroundColor: "#EEEEEE" }
              : {}
          }
        >
          <p className="currency-label">{currency.symbol} {currency.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrencySwitcherDropdown;
