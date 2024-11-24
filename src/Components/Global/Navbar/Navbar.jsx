import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { SiKingstontechnology } from "react-icons/si";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: auto;

  ul {
    display: flex;
  }

  .logo {
    margin: 16px;
    font-size: xx-large;
  }

  li {
    list-style-type: none;
    margin: 16px;
    font-size: normal;
    cursor: pointer;
  }

  .center li {
    text-decoration: none;
  }

  .end li {
    font-size: larger;
  }

  @media (max-width: 768px) {
    .center {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: normal;

  &:hover {
    color: #f39c12;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/" className="logo">
        <SiKingstontechnology />
      </StyledLink>
      <ul className="center">
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/products">Products</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </ul>
      <ul className="end">
        <li>
          <FiSearch aria-label="Search" />
        </li>
        <li>
          <IoCartOutline aria-label="Cart" />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
