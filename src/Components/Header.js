import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import "../Styles/Header.css";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "../Features/usersAPI";
import { reload } from "../Features/reloadSlice";
import { deleteCredentials } from "../Features/usersSlice";
import BtnCart from "./BtnCart";
import { setMessage } from "../Features/AlertsSlice";
import Navbar from "./Navbar";

export default function Header({ name, ...props }) {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const logged = useSelector((state) => state.auth.logged);
  const [singOutUser] = useUserLogoutMutation();

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  async function handleClick() {
    const sendEmail = {
      email: userData.email,
    };
    try {
      let res = await singOutUser(sendEmail);
      if (res.data.success) {
        dispatch(reload());
        dispatch(deleteCredentials());
        localStorage.removeItem("token");
        navigate("/", { replace: true });
        dispatch(
          setMessage({
            message: `Hasta luego`,
            success: true,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container fluid className="headerContain">
        <Container fluid className="header">
          <LinkRouter className="headerLogo" to="/">
            <img className="headerLogoCafe" src="http://drive.google.com/uc?export=view&id=1jdGTym3iPoqyhmptOBgGXctGup3su3hz" alt="image" />
          </LinkRouter>
          <div className="headerLogged">
            <LinkRouter className="headerPedi" to="/cafes">
              Pedí tu<span className="headerSpan"> .</span>Café
              <img
                src="https://cdn-icons-png.flaticon.com/512/3361/3361122.png"
                alt="icon"
              />
            </LinkRouter>
            <div className="container-avatar">
              <img
                src={logged ? userData?.photo : "user.png"}
                onClick={handleOpenMenu}
              />
            </div>
            <div className="headerCart">
              <BtnCart />
            </div>
          </div>
          {logged ? (
            open ? (
              <div className="headerMiCuenta">
                <LinkRouter className="headerSesion" to={`/mi-cuenta/${userData?._id}`}>{userData.firstName}</LinkRouter>
                <LinkRouter className="headerSesion" to="/" onClick={handleClick}>
                  Salir
                </LinkRouter>
              </div>
            ) : null
          ) : open ? (
            <div className="headerPrueba">
              <LinkRouter className="headerSesion" to="/signup">
                Registrarse
              </LinkRouter>
              <LinkRouter className="headerSesion" to="/login">
                Iniciar Sesion
              </LinkRouter>
            </div>
          ) : null}
        </Container>
      </Container>
      <Navbar/>
    </>
  );
}
