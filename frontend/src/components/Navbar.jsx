import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CoursesHandle from '../store/Thunks/CoursesHandle';
import { emptyCourses } from '../store/Slices/CoursesSlice';

const TopNavbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = ()=>{
        localStorage.removeItem('user')
        dispatch(CoursesHandle(emptyCourses()))
         navigate('/login')
    }
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky",top:"0",zIndex:"99"}}>
    <Container>
      <Navbar.Brand as={Link} to="/home">COURSIFY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/added">Added</Nav.Link>
          <Nav.Link as={Link} to="/enrolled">Enrolled</Nav.Link>
          <NavDropdown title="" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default TopNavbar


