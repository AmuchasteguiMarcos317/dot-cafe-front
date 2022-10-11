import React from 'react'
import '../Styles/ProductOrderCard.css'

export default function ProductOrderCard({product}) {

    return (
        <>
            <div className='orderProductContainer'>
                <img className="MyOrder20" src={product?.photo} alt="producto" />
                <h5 class="MyOrder50">{product?.name}</h5>
                <p>$<strong>{product?.price}</strong></p>
                <p>{product?.quantity}</p>
                <p>$<strong>{product?.totalPrice}</strong></p>
            </div>
        </>
    )
}
