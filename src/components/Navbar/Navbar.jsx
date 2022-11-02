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
          <div className="nav-links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
