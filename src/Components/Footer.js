import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  const { theme } = useContext(PortfolioContext);
  return (
    <Navbar bg={theme} variant={theme} expand="lg">
        <Navbar.Brand href="#home">TG</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navItems">
            <Nav.Link className={`${theme}NavItems`} href="#home">Home</Nav.Link>
            <Nav.Link className={`${theme}NavItems`} href="#about">About</Nav.Link>
            <Nav.Link className={`${theme}NavItems`} href="#certificates">Certificates</Nav.Link>
            <Nav.Link className={`${theme}NavItems`} href="#projects">Projects</Nav.Link>
            <Nav.Link className={`${theme}NavItems`} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}