import { useState, useEffect, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../data/shop-data";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import NavLink from "../../components/nav-link/nav-link.component";

import { ReactComponent as ShopLogo } from "./../../assets/shoplogo.svg";
import { ReactComponent as ArrowLogo } from "./../../assets/arrowlogo.svg";
import { ReactComponent as CartLogo } from "./../../assets/cartlogo.svg";
import { ReactComponent as CurrencyLogo } from "./../../assets/currencylogo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const [categories, setCategories] = useState([]);

  const response = useQuery(GET_PRODUCTS);
  const { loading, error, data } = response;

  useEffect(() => {
    if (data) {
      const { categories } = data;
      setCategories(categories);
    }
  }, [data]);

  const { pathname } = useLocation();
  const currentPage = pathname.slice(1);

  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    if (data && selectedPage === "") {
      const { categories } = data;
      setSelectedPage(categories[0].name);
    } else if (selectedPage !== "") {
      setSelectedPage(currentPage);
    }
  }, [data, currentPage]);

  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="navigation">
        <div className="nav-links-container">
          {categories.map((category) => (
            <NavLink
              path={category.name}
              description={category.name}
              selectedPage={selectedPage}
              key={category.name}
            />
          ))}
        </div>
        <div onClick={() => setSelectedPage("")}>
          <Link className="logo-container" to="/">
            <ShopLogo />
          </Link>
        </div>
        <div className="actions-container">
          <div className="action-container">
            {currentUser ? (
              <NavLink
                path={"auth"}
                description={"SIGN OUT"}
                selectedPage={selectedPage}
                click={signOutUser}
              />
            ) : (
              <NavLink
                path={"auth"}
                description={"SIGN IN"}
                selectedPage={selectedPage}
              />              
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
