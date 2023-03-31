import { Box, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import person from "../images/person.svg";
import setting from "../images/setting.svg";
import { NavLink as NavLinkDom } from "react-router-dom";

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoContainer>
        <img src={logo} alt="WLOGO" />
        <CompanyName>Wasserstoff</CompanyName>
      </LogoContainer>

      <SearchBar>
        <input type="text" />
        <img src={search} alt="" />
      </SearchBar>

      <NavLinks>
        <NavLinkHeading>
          <NavLinkDom style={{ textDecoration: "none", color: "#8484A0" }}>
            Statistics
          </NavLinkDom>
        </NavLinkHeading>
        <NavLinkHeading>
          <NavLinkDom
            to="/overview"
            style={{ textDecoration: "none", color: "#8484A0" }}
          >
            Overview
          </NavLinkDom>
        </NavLinkHeading>
        <NavLinkHeading>
          <NavLinkDom
            to="/"
            style={{ textDecoration: "none", color: "#8484A0" }}
          >
            Dashboard
          </NavLinkDom>
        </NavLinkHeading>
        <NavLinkHeading>
          <NavLinkDom style={{ textDecoration: "none", color: "#8484A0" }}>
            Analytics
          </NavLinkDom>
        </NavLinkHeading>
      </NavLinks>

      <ActionContainer>
        <img src={person} alt="" />
        <img src={setting} alt="" />
      </ActionContainer>
    </NavWrapper>
  );
};

const ActionContainer = styled(Box)({
  "justify-content": "right",
  gap: "20px",

  img: {
    margin: "0 10px",
  },
});

const NavLinkHeading = styled(Typography)({
  "letter-spacing": "0.44px",
  "font-weight": "300",
  position: "relative",
  "font-style": "normal",
  "font-size": "16px",
  cursor: "pointer",
  "line-height": "24px",
});

const NavLinks = styled(Box)({
  width: "40%",
  "justify-content": "space-around",
  display: "flex",

  h3: {
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "300",
    "font-size": "16px",
    "line-height": "24px",
    "letter-spacing": "0.44px",
    cursor: "pointer",
    position: "relative",
  },
});

const SearchBar = styled(Box)({
  width: "30%",
  background: "#EEF0FA",
  borderRadius: "8px",
  height: "32px",
  padding: "0 10px",
  display: "flex",
  alignItems: "center",

  input: {
    width: "100%",
    height: "30px",
    border: "none",
    outline: "none",
    backgroundColor: "#EEF0FA",
  },
});

const NavWrapper = styled(Box)({
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  padding: "0 30px",
  position: "sticky",
  top: "0",
  zIndex: "1000",
});

const LogoContainer = styled(Box)({
  width: "15%",
  gap: "10px",
  display: "flex",
  alignItems: "center",

  img: {
    borderRadius: "50%",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
});

const CompanyName = styled(Typography)({
  fontSize: "20px",
  lineHeight: "22px",
  fontWeight: "400",
  textTransform: "uppercase",
  cursor: "pointer",
});

export default Navbar;
