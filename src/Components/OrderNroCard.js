import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../Styles/OrderCard.css'

export default function OrderCard({order}) {
   
    return (
        <>
            <div className="OrderCardContainer">
                <div className="OrderNumber">
                    <p>Order:</p>
                    <p>#{order._id}</p>
                </div>
                <div>
                    <p>{order.date}</p>
                    <LinkRouter to="/mi-orden/12345"><img src="/view-files.png" alt="order" /></LinkRouter>
                </div>
            </div>
        </>
    )
}
