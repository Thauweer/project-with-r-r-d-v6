import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const MyLink = (props: any) => {
    return (<Link to={props?.path} className='nav-link' >
        {props?.children}
    </Link >)
}

function MyNavbar() {
    return (
        <>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <MyLink path='/'>
                        <Navbar.Brand>React sample of r-r-d v6</Navbar.Brand>
                    </MyLink>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <MyLink path='about'>
                                About
                            </MyLink>
                            <MyLink path='users'>
                                Users
                            </MyLink>
                            <MyLink path='groups'>
                                Group
                            </MyLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default MyNavbar;