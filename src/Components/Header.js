import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Header.css";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "../Features/usersAPI";
import { reload } from "../Features/reloadSlice";
import { deleteCredentials } from "../Features/usersSlice";

export default function Header() {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const logged = useSelector((state) => state.auth.logged);
  const [singOutUser] = useUserLogoutMutation()

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  async function handleClick() {
    const sendEmail = {
      email: userData.email
    }
    try {
      let res = await singOutUser(sendEmail)
      if (res.data.success) {
        dispatch(reload)
        dispatch(deleteCredentials())
        localStorage.removeItem('token')
        navigate("/", { replace: true })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Container fluid className="headerContain">
        <Container fluid className="header">
          <LinkRouter className="headerLogo" to="/">
            <img className="headerLogoCafe" src="logo1.png" alt="image" />
          </LinkRouter>
          <Navbar.Brand className="headText" href="#home">
            <span></span>{" "}
          </Navbar.Brand>
          <div className="headerLogged">
            <LinkRouter className="headerPedi" to='/cafes'>
              Pedí tu<span className="headerSpan"> .</span>Café
              <img src="https://cdn-icons-png.flaticon.com/512/3361/3361122.png" alt="icon" />
            </LinkRouter>
            <div className="container-avatar">
              <img src={logged ? userData.photo : 'user.png'} onClick={handleOpenMenu} />
            </div>
            <div className="headerCart">
              <img src='https://cdn-icons-png.flaticon.com/512/8070/8070478.png' alt='icon'/>
            </div>
          </div>
          {logged ? (

            open ? (
              <div className="headerPrueba">
                <LinkRouter>{userData.firstName}</LinkRouter>
                <LinkRouter to="#">Tu Cuenta</LinkRouter>
                <LinkRouter to="#" onClick={handleClick}>Salir</LinkRouter>
              </div>
            ) : null

          ) : (
            open ? (
              <div className="headerPrueba">
                <LinkRouter className="headerSesion" to="/signup">Registrarse</LinkRouter>
                <LinkRouter className="headerSesion" to="/login">Iniciar Sesion</LinkRouter>
              </div>
            ) : null
          )}
        </Container>
      </Container>
      <Navbar className="navbarContain" expand="xl">
        <Container fluid className="dropdown">
          <Container>
            <Navbar.Brand className="navText" href="#home">
              <span></span>{" "}
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Granel" id="basic-nav-dropdown">
                <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}><NavDropdown.Item className="navDrop" variant="primary" href="#action/3.1">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/6415/6415916.png"
                  />
                  <div className="navText">
                    <p>1 Kg.</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/granel/peso' state={{ kilo: "500" }}><NavDropdown.Item className="navDrop" href="#action/3.2">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/6415/6415916.png"
                  />
                  <div className="navText">
                    <p>500 Grs.</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/granel/peso' state={{ kilo: "250" }}><NavDropdown.Item className="navDrop" href="#action/3.3">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/6415/6415902.png"
                  />
                  <div className="navText">
                    <p>250 Grs.</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
              </NavDropdown>
              <NavDropdown title="Máquinas" id="basic-nav-dropdown">
                <LinkRouter to='/maquinas-cafe/tipo' state={{ type: "capsula" }}><NavDropdown.Item className='navDrop' href="#action/3.1">
                  <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415865.png' alt='icon' />
                  <div className='navText'>
                    <p>Cápsula</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/maquinas-cafe/tipo' state={{ type: "italiana" }}><NavDropdown.Item className='navDrop' href="#action/3.2">
                  <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/6415/6415920.png' alt='icon' />
                  <div className='navText'>
                    <p>Italiana</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/maquinas-cafe/tipo' state={{ type: "barista" }}><NavDropdown.Item className='navDrop' href="#action/3.3">
                  <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/1269/1269081.png' alt='icon' />
                  <div className='navText'>
                    <p>Barista</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/maquinas-cafe/tipo' state={{ type: "filtro" }}><NavDropdown.Item className='navDrop' href="#action/3.1">
                  <img className='headerIcon' src='https://cdn-icons-png.flaticon.com/512/672/672449.png' alt='icon' />
                  <div className='navText'>
                    <p>Con filtro</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
              </NavDropdown>
              <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                <LinkRouter to='/tazas'><NavDropdown.Item className="navDrop" href="#action/3.1">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/6415/6415935.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>Tazas</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
                <LinkRouter to='/filtros-sustentables'><NavDropdown.Item className="navDrop" href="#action/3.1">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/2740/2740800.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p responsive="md">Filtros sustentables</p>
                  </div>
                </NavDropdown.Item></LinkRouter>
              </NavDropdown>
              <NavDropdown title="Gift Cards" id="basic-nav-dropdown">
                <NavDropdown.Item className="navDrop" href="#action/3.1">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/4965/4965109.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>$1.000</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item className="navDrop" href="#action/3.2">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/4965/4965109.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>$2.000</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item className="navDrop" href="#action/3.3">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/4965/4965109.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>$5.000</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item className="navDrop" href="#action/3.4">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/4965/4965109.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>$10.000</p>
                  </div>
                </NavDropdown.Item>

                <LinkRouter to="/giftcards">
                  <NavDropdown.Item className="navDrop" href="#action/3.4">
                    <img
                      className="headerIcon"
                      src="https://cdn-icons-png.flaticon.com/512/4965/4965109.png"
                      alt="icon"
                    />
                    <div className="navText">
                      <p>TODAS</p>
                    </div>
                  </NavDropdown.Item>
                </LinkRouter>
              </NavDropdown>
              <NavDropdown title="Reciclaje" id="basic-nav-dropdown">
                <NavDropdown.Item className="navDrop" href="#action/3.1">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/3299/3299935.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>Punto de reciclaje</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item className="navDrop" href="#action/3.2">
                  <img
                    className="headerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/3299/3299853.png"
                    alt="icon"
                  />
                  <div className="navText">
                    <p>Campaña de reciclaje</p>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand href="#home">
                <span className="navAll">Ver todo</span>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
