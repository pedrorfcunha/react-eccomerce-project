import { useContext } from "react";

import { CurrencySwitcherContext } from "../../contexts/currency-switcher.context";

import "./currency-modal.styles.scss";

const CurrencyModal = ({ children }) => {
  const { isCurrencySwitcherOpen, setIsCurrencySwitcherOpen } = useContext(
    CurrencySwitcherContext
  );

  const toggleIsCurrencySwitcherOpen = () =>
    setIsCurrencySwitcherOpen(!isCurrencySwitcherOpen);

  return (
    <>
      <div
        className="currency-backdrop"
        onClick={toggleIsCurrencySwitcherOpen}
      ></div>
      <dialog open={true} className="currency-modal">
        {children}
      </dialog>
    </>
  );
};

export default CurrencyModal;
