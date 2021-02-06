import React from "react";
import logo from "./img/logo.svg";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../../styles/components/_header.scss";

const Header = () => {
  return (
    <AppBar className="header">
      <Toolbar className="menu">
        <figure className="header-logo">
          <img alt="logo" className="" loading="lazy" src={logo} />
        </figure>
        <nav className="menu__items">
          <Typography className="menu__item" variant="h6">
            Characters
          </Typography>
          <Typography className="menu__item" variant="h6">
            Comics
          </Typography>
          <Typography className="menu__item" variant="h6">
            Stories
          </Typography>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
