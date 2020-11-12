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
                <Image src={dev} alt='logo' height="50px"/>
            </Navbar.Brand>
        </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="px-3 nav-link" href="#home">Home</Nav.Link>
      <Nav.Link className="px-3 nav-link" href="#link">About</Nav.Link>
      <Nav.Link className='px-3 nav-link' href='#work'>Work</Nav.Link>
      <Nav.Link className="px-3 nav-link" href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
