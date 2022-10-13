import React from "react";
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { setMessage } from "../Features/AlertsSlice";
import { useDeleteOrderMutation } from "../Features/orderAPI";
import "../Styles/OrderNroCard.css";
import {reload} from '../Features/reloadSlice'

export default function OrderNroCard({ order }) {
  let date = new Date(order.date).toISOString().substring(0, 10);
  let myorder = "/mi-orden/" + order?._id;
  const [removeOrder] = useDeleteOrderMutation();
  const dispatch = useDispatch()
  

  const handleRemoveItem = async (id) => {
    try {
      let res = await removeOrder(id);
      if (res.data.success) {
        dispatch(reload())
        dispatch(setMessage({
            message: res.data.message,
            success: res.data.success
        }))
      }
    } catch (error) {
      console.log(error);
    }
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
            {
                order.payment
                ?
                null
                :
                <button
                onClick={() => handleRemoveItem(order._id)}
                className="deleteBtn"
                >
                <img src="/delete-item.png" alt="delete" />
                </button>
            }
          </div>
        </div>
      </div>
    </>
  );
}
