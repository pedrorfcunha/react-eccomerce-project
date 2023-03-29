import "./currency-switcher-logo.styles.scss";

import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";

const CurrencySwitcherLogo = () => {
  return (
    <div className="action-container">
      <div className="action-logo">
        <p className="currency-symbol">$</p>
      </div>
      <div className="action-logo" to="/">
        <ArrowLogo className="arrow-symbol"/>
      </div>
    </div>
  );
};

export default CurrencySwitcherLogo;
