import React from 'react'
import { Link as LinkRouter } from "react-router-dom";

export default function CoffeeCard({ data }) {
    return (
        <div className='CoffeeCard-Container'>
            <div className='coffeeDescriptionContain'>
                <img className='coffeeCardImg' src={data?.photo} alt='cafe' />
                <div className='coffeeH6'>
                    <h6>{data?.size}</h6>
                    <h6>{data?.description}</h6>
                </div>
            </div>
            <div className='coffeeDescripText'>
                <div className='coffeeTextContain'>
                    <div className='coffeeText'>
                        <p className='coffeeTitle'>Origen</p>
                        <p>{data?.origin}</p>
                    </div>
                    <div className='coffeeText'>
                        <p className='coffeeTitle'>Marca</p>
                        <p>{data?.brand}</p>
                    </div>
                    <div className='coffeeText'>
                        <p className='coffeeTitle'>Tipo</p>
                        <p>{data?.type}</p>
                    </div>
                </div>
            </div>
            <div className='coffeeCart'>
                <div className='coffeePrice'>
                    <h6>Vaso sustentable $ {data?.pricePerCup}</h6>
                    <h6>Taza $ {data?.pricePerMug}</h6>
                </div>
                <div className='coffeeBtn' >
                    <LinkRouter>Agregar al Carrito</LinkRouter>
                </div>
            </div>
        </div>
    )
}
