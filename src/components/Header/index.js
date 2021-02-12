import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.svg";
import { AppBar, Icon, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons/";
import { NAV_ELEMENTS } from "../../utils/constants/constants";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="header">
      <Toolbar className="menu">
        <figure className="header-logo">
          <img alt="logo" className="" loading="lazy" src={logo} />
        </figure>
        <nav className="menu__items">
          {NAV_ELEMENTS.map((element, index) => (
            <NavLink
              className="menu__item"
              exact
              key={`${index}-menu`}
              to={element.route}
            >
              {element.type}
            </NavLink>
          ))}
        </nav>
        <Icon
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          className="mobile-menu__icon"
          onClick={handleClick}
        >
          <MenuIcon />
        </Icon>
        <Menu
          anchorEl={anchorEl}
          className="mobile-menu__container"
          onClose={handleClose}
          open={open}
        >
          {NAV_ELEMENTS.map((element, index) => (
            <MenuItem key={`mobile-${element.type}`} onClick={handleClose}>
              <NavLink
                className="menu__item"
                exact
                key={`${index}-menu`}
                to={element.route}
              >
                {element.type}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
