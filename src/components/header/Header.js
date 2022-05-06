import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-style" expand="md">
        <NavbarBrand>
          <Link className="link-style brand" to="/">ARRES</Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="link-style" to="/ADEM">Business Administration</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="link-style" to="/ARCI">Arts and Sciences</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="link-style" to="/AGRI">Agricultural Sciences</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="link-style" to="/ENGINEERING">Engineering</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
