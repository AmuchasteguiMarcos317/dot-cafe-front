import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import '../Styles/NotFound.css'

export default function OrderStatus() {
    return (

        <>
            <div className='notFound-contain'>
                <div className='NotFound-text'>
                    <p className="notFound-404">HAS VISTO</p>
                </div>
                <LinkRouter className="notFound-btn" to="/">volver</LinkRouter>
            </div>
        </>
    )
}
