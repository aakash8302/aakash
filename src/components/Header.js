import React from 'react'
import {Nav, Navbar, Container, Image} from 'react-bootstrap'
import dev from '../logo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
        <>
        <Navbar expand='lg' collapseOnSelect >
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand href="#home">
                <Image className='logo' src={dev} alt='logo' height="50px"/>
            </Navbar.Brand>
        </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to='/'>
         <Nav.Link className="px-3 nav-link">Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to='/about'>
        <Nav.Link className="px-3 nav-link">About</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/work">
        <Nav.Link className='px-3 nav-link'>Work</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link className="px-3 nav-link">Contact</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
