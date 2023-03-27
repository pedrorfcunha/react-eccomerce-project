import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as ShopLogo } from "./../../assets/shoplogo.svg";
import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";
import { ReactComponent as CartLogo } from "./../../assets/cartlogo.svg";
import { ReactComponent as CurrencyLogo } from "./../../assets/currencylogo.svg";

import "./navigation.styles.scss";

const Navigation = ({categories}) => {
  const [selectedPage, setSelectedPage] = useState("all");

  const toggleSelectedPage = (category) => {
    setSelectedPage(category);
  };

  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="navigation">
        <div className="nav-links-container">
          {categories.map((category) => (
            <div
              className={
                category.name === selectedPage
                  ? "nav-link-box-active"
                  : "nav-link-box"
              }
              key={category.name}
              onClick={() => toggleSelectedPage(category.name)}
            >
              <Link className="nav-link-name" to={"/" + category.name}>
                {category.name}
              </Link>
            </div>
          ))}
        </div>
        <div onClick={() => toggleSelectedPage("all")}>
          <Link className="logo-container" to="/">
            <ShopLogo />
          </Link>
        </div>
        <div className="actions-container">
          <div className="action-container">
            {currentUser ? (
              <div className="nav-link-box">
                <span onClick={signOutUser} className="nav-link-name"> SIGN OUT</span>
              </div>
            ) : (
              <div
                className={
                  selectedPage === "auth"
                    ? "nav-link-box-active"
                    : "nav-link-box"
                }
                onClick={() => toggleSelectedPage("auth")}
              >
                <Link className="nav-link-name" to="auth">
                  SIGN IN
                </Link>
              </div>
            )}
          </div>
          <div className="action-container">
            <Link className="action-logo" to="/">
              <CurrencyLogo />
            </Link>
            <Link className="action-logo" to="/">
              <ArrowLogo />
            </Link>
          </div>
          <div className="action-container">
            <div className="action-logo" onClick={toggleIsCartOpen}>
              <CartLogo />
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
