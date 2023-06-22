import React, { Component } from 'react';
import {Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import axios from 'axios';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="bg-success" fluid>
                    <Container>
                        <Navbar expand="lg">
                        
                            <Navbar.Brand className="text-white" href="#"><h4>INFO PUBLIK</h4></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className="text-white" href="#action1">Beranda</Nav.Link>
                                <Nav.Link className="text-white" href="#action2">Nasional</Nav.Link>
                                <Nav.Link className="text-white" href="#action3">Sorotan</Nav.Link>
                                <Nav.Link className="text-white" href="#action4">Siaran Pers</Nav.Link>
                                <Nav.Link className="text-white" href="#action5">Cek Fakta</Nav.Link>
                                
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Cari Berita"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-light">Cari</Button>
                            </Form>
                            </Navbar.Collapse>
                        
                        </Navbar>
                    </Container>
            </div>
        )
    }
}
