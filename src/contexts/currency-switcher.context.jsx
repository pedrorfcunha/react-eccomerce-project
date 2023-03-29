import { createContext, useState } from "react";

export const CurrencySwitcherContext = createContext({
  isCurrencySwitcherOpen: false,
  setIsCurrencySwitcherOpen: () => {},
});

export const CurrencySwitcherProvider = ({ children }) => {
  const [isCurrencySwitcherOpen, setIsCurrencySwitcherOpen] = useState(false);
  const value = { isCurrencySwitcherOpen, setIsCurrencySwitcherOpen };

  return <CurrencySwitcherContext.Provider value={value}>{children}</CurrencySwitcherContext.Provider>;
};
