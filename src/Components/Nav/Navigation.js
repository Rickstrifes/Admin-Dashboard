import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsChevronDown } from 'react-icons/bs';
import Unis from '../../Assets/Unis.png';

function Navigation() {


    return (
        <>
            <Navbar expand="lg" style={{
                width: "100%",
                position: "fixed",
                zIndex: 10,
                height: 70,
                left: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "#FFFFFF",
                boxShadow: " 0px 8px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <Container>
                    <Navbar.Brand style={{
                        position: "absolute",
                        width: 100,
                        height: 34,
                        left: 24,
                        top: 18,
                        backgroundColor: "#CFD4ED",
                        marginLeft: 60
                    }}>
                    </Navbar.Brand>
                    <Nav className="justify-content-start flex-grow-1 pe-3" style={{ marginLeft: 210 }}>
                        <Button variant="outline-light" style={{
                            border: "none"
                        }}>
                            <span className="navbar-toggler-icon" />
                        </Button>
                    </Nav>
                    <Form className="d-flex ms-1">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <img src={Unis} alt="unis" className="py-2 ms-2" />
                    <span className=" ms-1">Unis Badri</span>
                    <BsChevronDown className="ms-2" />
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
















