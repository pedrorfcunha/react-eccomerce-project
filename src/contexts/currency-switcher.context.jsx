import { createContext, useState, useEffect } from "react";

export const CurrencySwitcherContext = createContext({
  isCurrencySwitcherOpen: false,
  setIsCurrencySwitcherOpen: () => {},
  setChosenCurrency: () => {},
  currencyLabel: "USD",
  currencySymbol: "$",
  checkCurrency: () => {},
});

export const CurrencySwitcherProvider = ({ children }) => {
  const [isCurrencySwitcherOpen, setIsCurrencySwitcherOpen] = useState(false);
  const [chosenCurrency, setChosenCurrency] = useState({});
  const [currencyLabel, setCurrencyLabel] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(() => {
    if (chosenCurrency.label) {
      setCurrencyLabel(chosenCurrency.label);
      setCurrencySymbol(chosenCurrency.symbol);      
    }
  }, [chosenCurrency]);

  const checkCurrency = (prices) => {
    return prices.filter((price) => price.currency.label === currencyLabel);
  };

  const value = {
    isCurrencySwitcherOpen,
    setIsCurrencySwitcherOpen,
    setChosenCurrency,
    currencyLabel,
    currencySymbol,
    checkCurrency,
  };

  return (
    <CurrencySwitcherContext.Provider value={value}>
      {children}
    </CurrencySwitcherContext.Provider>
  );
};
