import React from 'react'
import '../Styles/ProductOrderCard.css'

export default function ProductOrderCard({product}) {

    return (
        <>
            <div className='orderProductContainer'>
                <img className="MyOrder20" src={product?.photo} alt="producto" />
                <h5 class="MyOrder50">{product?.name}</h5>
                <p>AR$<strong>{product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</strong></p>
                <p>{product?.quantity}</p>
                <p>AR$<strong>{product?.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</strong></p>
            </div>
        </>
    )
}
