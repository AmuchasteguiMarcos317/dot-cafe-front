import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import '../Styles/NotFound.css'

export default function NotFound() {
    return (

        <>
            <div className='notFound-contain'>
                <div className='NotFound-text'>
                    <p className="notFound-404"> ERROR 404</p>
                    <p className="notFound-error" >Página no encontrada.</p>
                </div>
                <LinkRouter className="notFound-btn" to="/">volver</LinkRouter>
            </div>
        </>
    )
}
