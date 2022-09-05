import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  const { theme, handleThemeChange } = useContext(PortfolioContext)
  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#home">TG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navItems">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button onClick={handleThemeChange} className={`${theme}Button`}>{theme === 'light' ? <BsSun /> : <FiMoon />}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}