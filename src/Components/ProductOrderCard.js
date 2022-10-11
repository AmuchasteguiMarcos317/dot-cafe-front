import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../Styles/OrderCard.css'

export default function ProductOrderCard({product}) {

    return (
        <>
            <div className='itemCardContainer'>
                <img className='imgItemCard' src={product.photo} alt="producto" />
                <div className='descripCard'>
                    <h5>{product.name}</h5>
                </div>
                <div className='priceItemCard'>
                    <p>AR$ {product.price}</p>
                </div>
                <div className='buttonCant'>
                    <p className='counter'>{product.quantity}</p>
                </div>
                <div className='totalItemCard'>
                    <p>AR$ {product.price * product.quantity}</p>
                </div>
            </div>
        </>
    )
}
