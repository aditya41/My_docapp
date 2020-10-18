import React from 'react'
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';
import './NavbarBoot.css'


function NavbarBoot() {
    return (
        <div>
    <Navbar className="nav_main " varient="dark" expand="lg">
  <Navbar.Brand href="#home" className="nav_home" ><img src="https://i.ibb.co/CKbKPDK/logo-81403155.png"  width="180"
        height="70"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav_content">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">App</Nav.Link>
      <Nav.Link href="#link">Hospitals</Nav.Link>
      <Nav.Link href="#link">Blogs</Nav.Link>
      <Nav.Link href="#link">Contact US</Nav.Link>
      <Nav.Link href="#link">Free Consultancy</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default NavbarBoot
