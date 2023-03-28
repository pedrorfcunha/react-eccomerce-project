import { Link } from "react-router-dom";

import "./nav-link-button.styles.scss";

const NavLinkButton = ({ category, selectedPage }) => {
  const {name} = category;

  return (
    <div
      className={name === selectedPage ? "nav-link-box-active" : "nav-link-box"}   
    >
      <Link className="nav-link-name" to={"/" + name}>
        {name}
      </Link>
    </div>
  );
};

export default NavLinkButton;
