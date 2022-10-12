import React, { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from "react-redux";
import BasketCart from "./BasketCart";
import { Link as LinkRouter } from "react-router-dom";
import "../Styles/BtnCart.css";


function BtnCart({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useSelector(state => state.cart.cartArray)

  return (
    <>
      <button variant="primary" onClick={handleShow} className="me-2 btn-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8070/8070478.png"
          alt="icon"
        />
      </button>
      {
        cart.length > 0
        ?
        <p className="btn-sup">{cart.length}</p>
        :
        null
      }
      <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CARRITO DE COMPRAS</Offcanvas.Title>
          <hr />
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            cart.length > 0
            ?
            <BasketCart />
            :
            <div className="btnContainer">
              <img className='imgBtn' src='carrovacio1.png' alt="logo" />
          <p>
            <strong>Tu carrito está vacio</strong>
          </p>
          <LinkRouter to="/ver-todo" className="navAll">
            ir a comprar
          </LinkRouter>
        </div>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BtnCart;
