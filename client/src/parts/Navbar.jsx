import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div class="nav-bar">
        <h3 class="logo">
          <Link to="/">REVIEW HUB</Link>
        </h3>
        <ul>
          <li>
            <Link class="nav-link" to="/">
              all products
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/newProduct">
              newProduct
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/about">
              about us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
