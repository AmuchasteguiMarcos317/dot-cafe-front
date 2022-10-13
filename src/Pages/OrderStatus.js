import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { useGetOrderByUserQuery, useUpdateOrderMutation } from "../Features/orderAPI";
import '../Styles/NotFound.css'
import { reload } from '../Features/reloadSlice'

export default function OrderStatus() {
    const infoOrder = useLocation().search
    const status = new URLSearchParams(infoOrder).get('collection_status')
    const paymentID = new URLSearchParams(infoOrder).get('collection_id')
    const userData = useSelector((state) => state.auth.user);
    const { data: orders, refetch } = useGetOrderByUserQuery(userData?._id)
    const reloaded = useSelector(state => state.reload.reloadState)
    let arrayCarrito = orders?.response
    let indexArray = arrayCarrito?.length - 1
    let lastOrder = arrayCarrito?.[indexArray]._id
    let lastOrderDetail = arrayCarrito?.[indexArray]
    const [updateOrderAfterPay] = useUpdateOrderMutation()

    const dispatch = useDispatch()

    const updateOrder = async () => {
        let orderApprove
        if (status === "approved") {
            orderApprove = {
                id: lastOrder,
                payment: true
            }
            
           await updateOrderAfterPay(orderApprove)
                .then((res) => {
                    dispatch(reload())
                    console.log(res)
                })
                .catch((error) => console.log(error))

        } else {
            console.log("error")

        }
    }

    useEffect(() => {
        refetch()
    }, [reloaded])



    return (

        <>
            <div className='notFound-contain'>
                <div className='NotFound-text'>
                    {
                        status === "approved" ?
                         (<div>
                            <p>Pago Aprobado</p>
                            <p>Orden de compra: #{lastOrderDetail?._id} </p>
                         </div>
                         
                            ) : (<div>
                                <img src="http://drive.google.com/uc?export=view&id=1k4nHfXIUKxPJ91g8-SrD8Can6mXHB2yb" />
                                <p className="notFound-404">Pago Rechazado</p>
                            </div>)
                    }
                </div>
                {status === "approved" ?
                    lastOrderDetail?.products.map((item)=>{
                        return (
                            <div className='NotFound-text' key={item.item}>
                            
                            <p>producto: {item.name} </p>
                            <p> {item.totalPrice} </p>
                            <hr/> 
                            </div>
                        )
                    }) : null

                }
                {
                    status === "approved" ?
                    (<div className='NotFound-text'>
                    <p className="notFound-404">Su pago ha sido generado por el siguiente ticket:</p>
                    <p className="notFound-404">#{paymentID}</p>
                    <p>Se ha enviado un resumen a: {lastOrderDetail?.user.email} </p>
                    </div>) : null
                }
                <LinkRouter className="notFound-btn" onClick={updateOrder} to={`/mi-cuenta/${userData?._id}`} >ir a mi cuenta</LinkRouter>
            </div>
        </>
    )
}
