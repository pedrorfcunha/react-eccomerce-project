import { createContext, useState, useEffect } from "react";

export const CurrencySwitcherContext = createContext({
  isCurrencySwitcherOpen: false,
  setIsCurrencySwitcherOpen: () => {},
  chosenCurrency: "USD",
  setChosenCurrency: () => {},
});

export const CurrencySwitcherProvider = ({ children }) => {
  const [isCurrencySwitcherOpen, setIsCurrencySwitcherOpen] = useState(false);
  const [chosenCurrency, setChosenCurrency] = useState("USD");  

  const value = {
    isCurrencySwitcherOpen,
    setIsCurrencySwitcherOpen,
    chosenCurrency,
    setChosenCurrency,
  };

  return (
    <CurrencySwitcherContext.Provider value={value}>
      {children}
    </CurrencySwitcherContext.Provider>
  );
};
