import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import { setMessage } from "../Features/AlertsSlice";

export default function CoffeeCard({ data }) {
  const [priceMug, setPriceMug] = useState();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.value === "Elegi una opcion") {
      setPriceMug();
    } else {
      setPriceMug(e.target.value);
    }
  };

  const handleAddToCart = (data) => {
    console.log(priceMug);
    if (priceMug == undefined) {
      dispatch(setMessage({
        message: 'Elije un tipo de vaso o taza',
        success: false
      }))
    } else {
      dispatch(addToCart({
        _id: data._id,
        photo: data.photo,
        price: priceMug,
        name: `${data.type} : ${data.size}`,
      }))
      dispatch(setMessage({
        message: `Se ha añadido al carrito ${data.type}-${data.size} `,
        success: true
      }))
      setPriceMug()
    }
  };

  return (
    <div className="CoffeeCard-Container">
      <div className="coffeeDescriptionContain">
        <img className="coffeeCardImg" src={data?.photo} alt="cafe" />
        <div className="coffeeH6">
          <h6>{data?.size}</h6>
          <h6>{data?.description}</h6>
        </div>
      </div>
      <div className="coffeeDescripText">
        <div className="coffeeTextContain">
          <div className="coffeeText">
            <p className="coffeeTitle">Origen</p>
            <p>{data?.origin}</p>
          </div>
          <div className="coffeeText">
            <p className="coffeeTitle">Marca</p>
            <p>{data?.brand}</p>
          </div>
          <div className="coffeeText1">
            <p className="coffeeTitle">Tipo</p>
            <p>{data?.type}</p>
          </div>
        </div>
      </div>
      <div className="mcx">
        <div className="coffeePrice">
          <Form.Select
            onChange={handleChange}
            className="coffeeForm"
            aria-label="Default select example"
          >
            <option defaultValue>Elegi una opcion </option>
            <option value={data?.pricePerCup}>
            Taza Eco $ {data?.pricePerCup}
            </option>
            <option value={data?.pricePerMug}>
            Tu Taza $ {data?.pricePerMug}
            </option>
          </Form.Select>
        </div>
        <button onClick={() => handleAddToCart(data)} className="coffeeBtn">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
