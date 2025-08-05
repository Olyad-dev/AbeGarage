// import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/custom/logo.png";
import { useAuth } from "../../../context/Auth";
import loginService from "../../../services/login.service";

export default function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();

  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };


  return (
    <>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">
                  Enjoy the moment while we fix your car
                </div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number">
                      <strong>Welcome, {employee?.employee_first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Your Appontment Today :
                    <strong>1800 456 7890</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Navbar expand="lg" className="header-upper">
          <Container>
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="black-link">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="black-link">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/services" className="black-link">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="black-link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            {isLogged ? (
              <div className="link-btn">
                <Link
                  to="/"
                  className="theme-btn btn-style-one blue"
                  onClick={logOut}
                >
                  Log out
                </Link>
              </div>
            ) : (
              <div className="link-btn">
                <Link to="/login" className="theme-btn btn-style-one">
                  Login
                </Link>
              </div>
            )}
          </Container>
        </Navbar>
      </header>
    </>
  );
}
