import { useState, useEffect, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as ShopLogo } from "./../../assets/shoplogo.svg";
import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";
import { ReactComponent as CartLogo } from "./../../assets/cartlogo.svg";
import { ReactComponent as CurrencyLogo } from "./../../assets/currencylogo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const getLinkClass = (path) => {
    if (path === currentPath) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };

  const getSpamClass = (path) => {
    if (path === currentPath) {
      return "underline";
    } else {
      return "";
    }
  };

  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="navigation">
        <div className="nav-links-container">
          <Link className={getLinkClass("/")} to="/">
            <span></span>ALL<span className={getSpamClass("/")}></span>
          </Link>
          <Link className={getLinkClass("/tech")} to="/tech">
            <span></span>TECH<span className={getSpamClass("/tech")}></span>
          </Link>
          <Link className={getLinkClass("/clothes")} to="/clothes">
            <span></span>CLOTHES
            <span className={getSpamClass("/clothes")}></span>
          </Link>
        </div>
        <Link className="logo-container" to="/">
          <ShopLogo />
        </Link>
        <div className="actions-container">
          <div className="action-container">
            {currentUser ? (
              <span onClick={signOutUser} className={getLinkClass("/auth")}>
                <span></span>SIGN OUT
                <span className={getSpamClass("/auth")}></span>
              </span>
            ) : (
              <Link className={getLinkClass("/auth")} to="auth">
                <span></span>SIGN IN
                <span className={getSpamClass("/auth")}></span>
              </Link>
            )}
          </div>
          <div className="action-container">
            <Link className="actions-currency-logo" to="/">
              <CurrencyLogo />
            </Link>
            <Link className="actions-arrow-logo" to="/">
              <ArrowLogo />
            </Link>
          </div>
          <div className="action-container">
            <div className="actions-cart-logo" onClick={toggleIsCartOpen}>
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
