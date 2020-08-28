import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="active">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
