import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
      <div className="copyright">
        <h3>&copy; 2022</h3>
        <h2>
          {" "}
          Zenku <span>Shop</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
