import { useContext } from "react";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import "./currency-switcher-logo.styles.scss";

import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";

const CurrencySwitcherLogo = () => {
  const { isCurrencySwitcherOpen, setIsCurrencySwitcherOpen } = useContext(
    CurrencySwitcherContext
  );  

  return (
    <div
      className="action-container"
      onClick={() => setIsCurrencySwitcherOpen(!isCurrencySwitcherOpen)}
    >
      <div className="action-logo">
        <p className="currency-symbol">$</p>
      </div>
      <div className="action-logo" to="/">
        <ArrowLogo className="arrow-symbol" />
      </div>
    </div>
  );
};

export default CurrencySwitcherLogo;
