import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "../nav-link-button/nav-link-button.styles.scss";

const NavSignInButton = ({ selectedPage }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="action-container">
      <div
        className={
          "auth" === selectedPage ? "nav-link-box-active" : "nav-link-box"
        }
      >
        {currentUser ? (
          <Link className="nav-link-name" onClick={signOutUser}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="nav-link-name" to={"/auth"}>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavSignInButton;
