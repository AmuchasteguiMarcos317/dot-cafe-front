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
import { useNewOrderMutation } from "../Features/orderAPI";
import AddAdressToCart from "../Components/AddAddressToCart";

const ACCESS_TOKEN= process.env.REACT_APP_ACCESS_TOKEN

export default function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const finalCart = useSelector((state) => state.cart.cartArray);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.user)
  let totalQuantity = 0;
  let totalOrderPrice = 0;
  let discount = 0;

  const getTotal = () => {
    finalCart.forEach((item) => {
      totalQuantity += item.quantity;
      totalOrderPrice += item.price * item.quantity;
    });
    return { totalOrderPrice, totalQuantity };
  };

  const [addOrder] = useNewOrderMutation()
  let todayDate = new Date()
  let totalOrder = getTotal()
  let orderData = {user: userData?._id, date: todayDate, total: totalOrder.totalOrderPrice }
  
  const createOrder = async() => {
    let products = finalCart.map(elem => {
      return {
          item: elem._id,
          name: elem.name,
          quantity: elem.quantity,
          photo: elem.photo,
          price: elem.price,
          totalPrice: elem.price*elem.quantity
      }
    })
    let newOrder = ({...orderData, products})
    await addOrder(newOrder)
  }

  const handleRemove = () => {
    dispatch(emptyCart());
    dispatch(
      setMessage({
        message: "Carrito borrado",
        success: true,
      })
    );
  };

  const url = "https://api.mercadopago.com/checkout/preferences";

  const handlePayment = async () =>{
    
    createOrder()
    
    let body = {
      items: [
        {
          title: "Tienda Punto Café S.A",
          description: "Mi Carrito de Compras",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "coffe001",
          quantity: 1,
          unit_price: totalOrderPrice
        }
      ],
      back_urls: {
        failure: "http://localhost:3000/estado-orden/failure",
        pending: "http://localhost:3000/estado-orden/pending",
        success: "http://localhost:3000/estado-orden/success"
      }
    };

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
          message: "Debes iniciar sesión antes de realizar tu compra",
          success: false,
        }))
    }
  }

  const [showButtonFinishBuy, setshowButtonFinishBuy] = useState(false)

  useEffect(() => {
    if(finalCart.length > 0) {
      setshowButtonFinishBuy(!showButtonFinishBuy)
    }
  }, [finalCart])

  const [showFormAddress, setShowFormAddress] = useState(false)

  const handleShowFormEdit = () =>{
    setShowFormAddress(!showFormAddress)
  }

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
                <div className="carContainer">
                  <img className='imgCar' src='carrovacio1.png' alt="logo" />
                <h3 className="textCar">El carrito está vacio</h3>

                <LinkRouter className="buttonBuy" to={'/ver-todo'}>
                    <p>IR A COMPRAR</p>
                  </LinkRouter>
                </div>
              )}
            </div>
          </div>
          <div className="additionContainer">
            <div className="total">
              <div className="purchaseValue">
              <button className="buttonBuyAddress" onClick={handleShowFormEdit}  >Agregar Datos de envio</button>
              {
                showFormAddress ? <AddAdressToCart/> : null
              }
                
                <div className="value">
                  <h6>VALOR DE LA COMPRA</h6>
                  <p>AR${totalOrderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
                <div className="value">
                  <h6>DESCUENTO</h6>
                  <p>{discount}</p>
                </div>
                <div className="value">
                  <h6>SUB-TOTAL</h6>
                  <p>AR${(totalOrderPrice - discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
                <div className="value">
                  <h6>ENVIO</h6>
                  <p>$0</p>
                </div>
              </div>
              <div className="finishBuy">
                <div className="priceTotal">
                  <h6>TOTAL</h6>
                  <p>AR${(totalOrderPrice - discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>

                    <button className="buttonBuy" onClick={handlePayment}>
                    <p>FINALIZAR COMPRA</p>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
