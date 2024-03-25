import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Navbar bg="primary"  data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/about" >About</Nav.Link>
                        <Nav.Link href="/users" >Users</Nav.Link>
                        {/* <Nav.Link href="/adduser" >Add User</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout