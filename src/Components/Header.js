import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Header from '../Styles/Header.css';


export default function header() {
    return (
        <>
            <Container fluid className='headerContain'>
                <Container fluid className='header'>
                    <img src='logo1.png' alt='image' />
                    <Navbar.Brand className='navText' href="#home"><span></span> </Navbar.Brand>
                    <p>Pedi tu<span className='headerSpan'> .</span>Café</p>
                </Container>
            </Container>
            <Navbar className='navbarContain'>
                <Container fluid className='dropdown'>
                    <Container>
                        <Navbar.Brand className='navText' href="#home"><span></span> </Navbar.Brand>
                    </Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Granel" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' variant='primary' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415916.png' />1 Kg.</NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.2"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415916.png' />500 Grs.</NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.3"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415902.png' />250 Grs.</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Máquinas" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415865.png' alt='icon' /> Cápsula</NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.2"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415920.png' alt='icon' />
                                    Italiana
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.3"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/1269/1269081.png' alt='icon' /> Barista</NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/672/672449.png' alt='icon' /> Con filtro</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415935.png' alt='icon' /> Tazas</NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/2740/2740800.png' alt='icon' /> Filtros sustentables</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gif Cards" id="basic-nav-dropdown">

                                <NavDropdown.Item className='navDrop' href="#action/3.1"><img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' /> $1.000</NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' /> $2.000
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.3">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' /> $5.000
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.4">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' /> $10.000
                                </NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Reciclaje" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/3299/3299935.png' alt='icon' /> Punto de reciclaje</NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/3299/3299853.png' alt='icon' />
                                    Campaña de reciclaje
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Navbar.Brand href="#home"><span className='navAll'>Ver todo</span></Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}