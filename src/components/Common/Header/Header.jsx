import React, { useEffect, useState } from 'react';
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky');
  };

  const expand = 'lg'; // Define the expand value here

  return (
    <header className="header-section">
      <Container>
        <Navbar expand={expand} className="bg-body-tertiary mb-3">
          <Navbar.Brand>
            <NavLink to='/'> KAFFA </NavLink>     
          </Navbar.Brand>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">KAFFA</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className='nav-link' to="/">HOME</NavLink>
                <NavLink className='nav-link' to="/biosphere">BIOSPHERE</NavLink>

                

                <NavDropdown
                  title="HERITAGE"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item as={NavLink} to="/about-coffee">ABOUT COFFEE</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/natural-bridge-and-forest">NATURAL BRIDGE AND FOREST</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/WaterFalls">WATER FALL</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/KaffaSpiritualPlaces">ANCIENT SPIRITUAL PLACE</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="VISIT"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item as={NavLink} to="/Howtogethere">HOW TO GET HERE</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/WhenToVisit">WHEN TO VISIT</NavDropdown.Item>
                  {/* <NavDropdown.Item as={NavLink} to="/"></NavDropdown.Item> */}
                  <NavDropdown.Item as={NavLink} to="/LocalTours">LOCAL TOURS & GUIDES</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Accommodation">ACCOMMODATION</NavDropdown.Item>
                  
                  <NavDropdown
                  title="TRAVEL PREPARATIONS"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item as={NavLink} to="/TravelPreparations">TRAVEL PREPARATIONS</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Healthcare">HEALTH CARE</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Whattobring">WHAT TO BRING</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/MoneyTo">MONEY</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/SafetyTo">SAFETY</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                  title="DINING IN KAFA"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item as={NavLink} to="/DiningKaffa">DINING IN KAFA</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/TraditionalFood">TRADITIONAL FOOD</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/TraditionalBeverages">TRADITIONAL BEVERAGES</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/ LocalProduct">LOCAL PRODUCTS</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/ PlaceToEat">PLACES TO EAT</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavLink className='nav-link' to="/KaffaKingdoms">KINGDOM</NavLink>
                <NavLink className='nav-link' to="/Gallery">GALLERY</NavLink>
                <NavLink className='nav-link' to="/Aboutus">ABOUT US</NavLink>
                <NavLink className='nav-link' to="/Contact">CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            <li className='d-inline-block d-lg-none d-sm-inline-block'>
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
