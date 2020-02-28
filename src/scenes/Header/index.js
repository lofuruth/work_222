import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/blogs">
        Blogs
      </NavLink>
      <NavLink activeClassName="active" to="/products">
        Products
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/checkouts">
        Checkouts
      </NavLink>
      <NavLink activeClassName="active" to="/404">
        Not Found
      </NavLink>
    </nav>
  );
}
export default Header;