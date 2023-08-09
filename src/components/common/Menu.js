import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./styleMenu.css";
import gatocafe from "../views/img/gatocafe2.png";

const Menu = () => {
  return (
    <Navbar variant="dark" expand="lg" className="menu align-items-center data-container ">
      <Container className="d-flex">
        <Navbar.Brand as={Link} to="/">
          <Image src={gatocafe} className="imagen" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto flex-grow-1 mx-5 justify-content-center ">
          <NavLink end to="/" className="nav-item nav-link ">
              <h5 className="">HOME</h5>
            </NavLink>
            <NavLink end to="/inicio" className="nav-item nav-link ">
              <h5 className="">INICIO</h5>
            </NavLink>
            <NavLink end to="/administrar" className="nav-item nav-link ">
              <h5 className="">ADMINISTRAR</h5>
            </NavLink>
            <NavLink end to="/administrar/crear" className="nav-item nav-link">
              <h5 className="">CREAR</h5>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;


