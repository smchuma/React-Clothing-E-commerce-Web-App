import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User.Context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./Navbar.scss";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="logo">
            <Link to="/">
              <h1>Zenku</h1>
            </Link>
          </div>
          <div className="nav-search">
            <input type="search" placeholder="search" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="button-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {currentUser ? (
              <span>
                <i
                  className="fa-solid fa-right-from-bracket"
                  onClick={signOutUser}
                ></i>
              </span>
            ) : (
              <Link to="/sign-in">
                <button className="btn-primary">Sign In</button>
              </Link>
            )}
            <i className="fa-solid fa-bars hamburger"></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
