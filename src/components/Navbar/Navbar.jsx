import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="logo">
            <h1>Zenku</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div className="buttons">
            <button className="btn-primary">Sign Up</button>
            <button className="btn-primary">Log in</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
