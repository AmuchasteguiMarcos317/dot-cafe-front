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
                    <Navbar.Brand className='headText' href="#home"><span></span> </Navbar.Brand>
                    <p>Pedi tu<span className='headerSpan'> .</span>Café</p>
                </Container>
            </Container>
            <Navbar className='navbarContain' expand='xl'>
                <Container fluid className='dropdown'>
                    <Container>
                        <Navbar.Brand className='navText' href="#home"><span></span> </Navbar.Brand>
                    </Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Granel" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' variant='primary' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415916.png' />
                                    <div className='navText'>
                                        <p>1 Kg.</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415916.png' />
                                    <div className='navText'>
                                        <p>500 Grs.</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.3">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415902.png' />
                                    <div className='navText'>
                                        <p>250 Grs.</p>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Máquinas" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415865.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Cápsula</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415920.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Italiana</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.3">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/1269/1269081.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Barista</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/672/672449.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Con filtro</p>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415935.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Tazas</p>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/2740/2740800.png' alt='icon' />
                                    <div className='navText'>
                                        <p responsive='md' >Filtros sustentables</p>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gif Cards" id="basic-nav-dropdown">

                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' />
                                    <div className='navText'>
                                        <p>$1.000</p>
                                    </div>
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' />
                                    <div className='navText'>
                                        <p>$2.000</p>
                                    </div>
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.3">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' />
                                    <div className='navText'>
                                        <p>$5.000</p>
                                    </div>
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.4">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/4965/4965109.png' alt='icon' />
                                    <div className='navText'>
                                        <p>$10.000</p>
                                    </div>
                                </NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Reciclaje" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navDrop' href="#action/3.1">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/3299/3299935.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Punto de reciclaje</p>
                                    </div>
                                </NavDropdown.Item>

                                <NavDropdown.Item className='navDrop' href="#action/3.2">
                                    <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/3299/3299853.png' alt='icon' />
                                    <div className='navText'>
                                        <p>Campaña de reciclaje</p>
                                    </div>
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