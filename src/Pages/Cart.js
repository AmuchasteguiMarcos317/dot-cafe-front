import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard";
import "../Styles/Cart.css";
import { emptyCart } from "../Features/cartSlice";
import { setMessage } from "../Features/AlertsSlice";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as LinkRouter} from 'react-router-dom'

const ACCESS_TOKEN= 'TEST-6581106291893003-101020-ce992fb3ac71fe99275ecbc4e3089e2b-1142649826'
export default function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const finalCart = useSelector((state) => state.cart.cartArray);
  const dispatch = useDispatch();
  let totalQuantity = 0;
  let totalPrice = 0;
  let discount = 0;

  const getTotal = () => {
    finalCart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleRemove = () => {
    dispatch(emptyCart());
    dispatch(
      setMessage({
        message: "Carrito borrado",
        success: true,
      })
    );
  };

  getTotal()

  const url = "https://api.mercadopago.com/checkout/preferences";

  const handlePayment = async () =>{
    
    console.log("intento de pago MP")
    
    let body = {
      items: [
        {
          title: "Tienda Punto Café S.A",
          description: "Mi Carrito de Compras",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "coffe001",
          quantity: totalQuantity,
          unit_price: totalPrice
        }
      ],
      back_urls: {
        failure: "http://localhost:3000/failure",
        pending: "http://localhost:3000/pending",
        success: "http://localhost:3000/mi-cuenta/success"
      }
    };

    // let body = JSON.stringify(preferenceMP)

    if(localStorage.getItem('token') ){
      const payment = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      });

      window.open(`${payment.data.init_point}`)
      dispatch(emptyCart());
  
      return payment.data
    } else {
      dispatch(setMessage({
          message: "Debes iniciar sesión antes de pagar",
          success: true,
        }))
    }
  }

  const [showButtonFinishBuy, setshowButtonFinishBuy] = useState(false)

  useEffect(() => {
  
    if(finalCart.length > 0) {
      setshowButtonFinishBuy(!showButtonFinishBuy)
    }
  }, [finalCart])
  



  return (
    <>
      <main>
        <div className="CartContainer">
          <div className="trolleyContainer">
            <div className="detailProcuctContainer">
              <div className="itemCard">
                <p className="productItem">PRODUCTO</p>
                <p className="cantItem">CANTIDAD</p>
                <p className="valueItem">PRECIO</p>
                <p className="totalItem">TOTAL</p>
              </div>
              {finalCart.length > 0 ? (
                <>
                  {finalCart.map((item) => (
                    <ItemCard key={item._id} data={item} />
                  ))}
                  <div className="emptyContainer">
                    <Button className="buttonEmpty" variant="primary" onClick={handleShow}>
                      Vaciar carrito
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>Vaciar carrito</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Estas segur@ que quieres vaciar tu carrito?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button id="btn-close" onClick={handleClose}>
                          Cancelar
                        </Button>
                        <Button id="btn-remove" onClick={() => handleRemove()}>
                          Borrar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </>
              ) : (
                <p>El carrito está vacio</p>
              )}
            </div>
          </div>
          <div className="additionContainer">
            <div className="total">
              <div className="purchaseValue">
                <div className="value">
                  <h6>VALOR DE LA COMPRA</h6>
                  <p>AR${totalPrice}</p>
                </div>
                <div className="value">
                  <h6>DESCUENTO</h6>
                  <p>{discount}</p>
                </div>
                <div className="value">
                  <h6>SUB-TOTAL</h6>
                  <p>AR${totalPrice - discount}</p>
                </div>
                <div className="value">
                  <h6>ENVIO</h6>
                  <p>$0</p>
                </div>
              </div>
              <div className="finishBuy">
                <div className="priceTotal">
                  <h6>TOTAL</h6>
                  <p>AR${totalPrice - discount}</p>
                </div>
                {
                  showButtonFinishBuy ? (
                    <button className="buttonBuy" onClick={handlePayment}>
                    <p>FINALIZAR COMPRA</p>
                  </button>
                  ) : (
                    <LinkRouter className="buttonBuy" to={'/ver-todo'}>
                    <p>IR A COMPRAR</p>
                  </LinkRouter>
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
