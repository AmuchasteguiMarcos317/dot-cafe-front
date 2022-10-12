import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../Styles/OrderNroCard.css";

export default function OrderNroCard({ order }) {
  let date = new Date(order.date).toISOString().substring(0, 10);
  let myorder = "/mi-orden/" + order?._id;

  const handleRemoveItem = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="OrderCardContainer">
        <div className="OrderNumber">
          <p>
            <span>Order: </span>#{order._id}
          </p>
          <p>
            <span>Estado: </span>
            {order.payment ? "Pagado" : "Pendiente de pago"} - {order.state}
          </p>
        </div>
        <div className="OrderLink">
          <p>{date}</p>
          <div className="containerBtnOrder">
            <LinkRouter to={`/mi-orden/${order?._id}`}>
              <img src="/view-files.png" alt="order" />
            </LinkRouter>
            <button
              onClick={() => handleRemoveItem(order._id)}
              className="delete"
            >
              <img src="/delete-item.png" alt="delete" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
