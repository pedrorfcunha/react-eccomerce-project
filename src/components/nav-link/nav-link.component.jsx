import { Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./nav-link.styles.scss";

const NavLink = ({ path, description, selectedPage, click }) => {
  return (
    <div
      className={path === selectedPage ? "nav-link-box-active" : "nav-link-box"}
      onClick={click}    
    >
      <Link className="nav-link-name" to={"/" + path}>
        {description}
      </Link>
    </div>
  );
};

export default NavLink;
