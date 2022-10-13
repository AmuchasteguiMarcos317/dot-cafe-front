import React from 'react'
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function navbar() {
    return (
        <Navbar className="navbarContain" expand="xl">
            <Container fluid className="dropdown">
                <Container>
                    <Navbar.Brand className="navText">
                        <span></span>{" "}
                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Granel" id="basic-nav-dropdown">
                            <LinkRouter to="/granel/peso" state={{ kilo: "1000" }}>
                                <NavDropdown.Item
                                    className="navDrop"
                                    variant="primary"
                                    href="#action/3.1"
                                >
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415916.png"
                                    />
                                    <div className="navText">
                                        <p>1 Kg.</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/granel/peso" state={{ kilo: "500" }}>
                                <NavDropdown.Item className="navDrop" href="#action/3.2">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415916.png"
                                    />
                                    <div className="navText">
                                        <p>500 Grs.</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/granel/peso" state={{ kilo: "250" }}>
                                <NavDropdown.Item className="navDrop" href="#action/3.3">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415902.png"
                                    />
                                    <div className="navText">
                                        <p>250 Grs.</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                        </NavDropdown>
                        <NavDropdown title="Máquinas" id="basic-nav-dropdown">
                            <LinkRouter
                                to="/maquinas-cafe/tipo"
                                state={{ type: "capsula" }}
                            >
                                <NavDropdown.Item className="navDrop" href="#action/3.1">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415865.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Cápsula</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter
                                to="/maquinas-cafe/tipo"
                                state={{ type: "italiana" }}
                            >
                                <NavDropdown.Item className="navDrop" href="#action/3.2">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415920.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Italiana</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter
                                to="/maquinas-cafe/tipo"
                                state={{ type: "barista" }}
                            >
                                <NavDropdown.Item className="navDrop" href="#action/3.3">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/1269/1269081.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Barista</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/maquinas-cafe/tipo" state={{ type: "filtro" }}>
                                <NavDropdown.Item className="navDrop" href="#action/3.1">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/672/672449.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Con filtro</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/maquinas">
                                <NavDropdown.Item className="navDrop" href="#action/3.1">
                                    <img
                                        className="headerIcon"
                                        src="http://drive.google.com/uc?export=view&id=1M2qcrvdj060ZYw6jO6UV3FGYTnbkck6y"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Todas</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                        </NavDropdown>
                        <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                            <LinkRouter to="/tazas">
                                <NavDropdown.Item className="navDrop" href="#action/3.1">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6415/6415935.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Tazas</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/filtros-sustentables">
                                <NavDropdown.Item className="navDrop" href="#action/3.1">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/2740/2740800.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p responsive="md">Filtros sustentables</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                        </NavDropdown>
                        <NavDropdown title="Gift Cards" id="basic-nav-dropdown">
                            <LinkRouter to="/giftcards">
                                <NavDropdown.Item className="navDrop" href="#action/3.4">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/6903/6903101.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Gift Cards</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                        </NavDropdown>
                        <NavDropdown title="Eco Friendly" id="basic-nav-dropdown">
                        <LinkRouter to="/eco-arte">
                            <NavDropdown.Item className="navDrop" href="#action/3.1">
                                <img
                                    className="headerIcon"
                                    src="https://cdn-icons-png.flaticon.com/512/3299/3299935.png"
                                    alt="icon"
                                />
                                <div className="navText">
                                    <p>Eco Art</p>
                                </div>
                            </NavDropdown.Item>
                            </LinkRouter>
                            <LinkRouter to="/economia-circular">
                                <NavDropdown.Item className="navDrop" href="#action/3.2">
                                    <img
                                        className="headerIcon"
                                        src="https://cdn-icons-png.flaticon.com/512/3299/3299853.png"
                                        alt="icon"
                                    />
                                    <div className="navText">
                                        <p>Economía Circular</p>
                                    </div>
                                </NavDropdown.Item>
                            </LinkRouter>
                        </NavDropdown>
                        <Navbar.Brand>
                            <LinkRouter to="/ver-todo" className="navAll">Ver todo</LinkRouter>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
