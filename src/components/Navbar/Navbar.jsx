import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
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
          <div className="buttons">
            <Link to="/sign-in" className="buttons">
              <button className="btn-primary">Sign In</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
