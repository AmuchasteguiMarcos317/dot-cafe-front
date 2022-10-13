import { useSelector } from "react-redux";
import "../Styles/BasketCart.css";
import { Link as LinkRouter } from "react-router-dom";

function BasketCart({stateShow}) {
  const basket = useSelector((state) => state.cart.cartArray);
  let totalQuantity = 0;
  let totalPrice = 0;


  const getTotal = () => {
    basket.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      {basket.length > 0 ? (
        <div>
          {basket.map((item) => {
            return (
              <div key={item._id}>
                <div className="cartSlide">
                  <img
                    className="imgBasketItemPhoto"
                    src={item.photo}
                    alt={item.name}
                  />
                  <p className="pBasketItemName">{item.weight ? item.name +' - '+ item.weight : item.name}</p>
                  <p>{item.quantity} U.</p>
                  <p>
                    <strong>AR$ {(item.price * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</strong>
                  </p>
                </div>
                <hr />
              </div>
            );
          })}
          <p>
            {" "}
            <strong> Cantidad de productos: {getTotal().totalQuantity} </strong>
          </p>
          <p>
            <strong> Total: $ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} </strong>
          </p>
          <LinkRouter className="navAll" onClick={() => stateShow(false)} to="/carrito">
            IR AL CARRITO
          </LinkRouter>
        </div>
      ) : (
        null
      )}
    </>
  );
}

export default BasketCart;
