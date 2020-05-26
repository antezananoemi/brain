import React from "react";
import styled from "styled-components";
import logo from "../assets/brain.png";
const NavBar = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 100000;
  display: block;
  height: 64px;
`;
const NavContent = styled.div`
  position: relative;
  z-index: 10000;
  height: 62px;
  background-color: #190629;
  border-bottom: 1px solid blueviolet;
  display: flex;
  justify-content: space-between;
  a {
    color: #ffffff;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    align-self: center;
  }
`;
const NavBrand = styled.a`
  flex-grow: 10;
  color: #ffffff;
  img {
    margin-left: 5%;
    height: 32px;
  }
`;
const NavLinks = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: space-around;
`;
const Navigation = () => {
  return (
    <NavBar className="navbar">
      <NavContent>
        <NavBrand>
          <img src={logo} alt="logo weather app" />
        </NavBrand>
        <NavLinks>
          <a
            href="https://github.com/antezananoemi/weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </NavLinks>
      </NavContent>
    </NavBar>
  );
};
export default Navigation;
