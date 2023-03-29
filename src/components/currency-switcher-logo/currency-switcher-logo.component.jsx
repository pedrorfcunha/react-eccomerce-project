import { Link } from "react-router-dom";

import "./currency-switcher-logo.styles.scss";

import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";
import { ReactComponent as CurrencyLogo } from "./../../assets/currencylogo.svg";

const CurrencySwitcherLogo = () => {
  return (
    <div className="action-container">
      <Link className="action-logo" to="/">
        <CurrencyLogo />
      </Link>
      <Link className="action-logo" to="/">
        <ArrowLogo />
      </Link>
    </div>
  );
};

export default CurrencySwitcherLogo;
