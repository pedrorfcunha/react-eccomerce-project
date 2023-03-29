import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../data/shop-data";

import NavLinkButton from "../../components/nav-link-button/nav-link-button.component";
import NavSignInButton from "../../components/nav-sign-in-button/nav-sign-in-button.component";
import CurrencySwitcherLogo from "../../components/currency-switcher-logo/currency-switcher-logo.component";
import NavCartLogo from "../../components/nav-cart-logo/nav-cart-logo.component";

import { ReactComponent as ShopLogo } from "./../../assets/shoplogo.svg";


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

  return (
    <>
      <header className="navigation">
        <div className="nav-links-container">
          {categories.map((category) => (
            <NavLinkButton
              category={category}
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
          <NavSignInButton selectedPage={selectedPage} />
          <CurrencySwitcherLogo />
          <NavCartLogo />          
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
