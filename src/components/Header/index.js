import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.svg";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar className="header">
      <Toolbar className="menu">
        <figure className="header-logo">
          <img alt="logo" className="" loading="lazy" src={logo} />
        </figure>
        <nav className="menu__items">
          <NavLink className="menu__item" exact to="/">
            Characters
          </NavLink>
          <NavLink className="menu__item" to="/comics">
            Comics
          </NavLink>
          <NavLink className="menu__item" to="/stories">
            Stories
          </NavLink>
          <NavLink className="menu__item" to="/bookmarks">
            Bookmarks
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
