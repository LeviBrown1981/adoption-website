import React from "react";
import styled from "styled-components";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <StyledNavbar inverted>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/contact">
      <Menu.Item>
        Contact Me
      </Menu.Item>
    </Link>
  </StyledNavbar>
);

const StyledNavbar = styled(Menu)`
  border-radius: 0 !important;
`;

export default Navbar;