import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { useGetOrderByUserQuery, useUpdateOrderMutation } from "../Features/orderAPI";
import '../Styles/OrderStatus.css'
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

    let user = useSelector(state => state.auth.user)
    let role = user?.role

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
            <div className="orderContainer">
                <div className='orderStatusContainer'>
                    <div className="paymentContainer">
                    <div className='orderStatusText'>
                        {
                            status === "approved" ?
                                (<div>
                                    <p className="titleOrder">Pago Aprobado</p>
                                    <p><span className="titleSpan">Orden de compra:</span> #{lastOrderDetail?._id} </p>
                                </div>

                                ) : (<div>
                                    <img src="http://drive.google.com/uc?export=view&id=1k4nHfXIUKxPJ91g8-SrD8Can6mXHB2yb" />
                                    <p className="notFound-404">Pago Rechazado</p>
                                </div>)
                        }
                    </div>
                    {status === "approved" ?
                        lastOrderDetail?.products.map((item) => {
                            return (
                                <div className='orderStatusProduct' key={item.item}>

                                    <p><span className="titleSpan">Producto:</span> {item.name} </p>
                                    <p>AR$ {item.totalPrice} </p>
                                    <hr />
                                </div>
                            )
                        }) : null

                    }
                    {
                        status === "approved" ?
                            (<div className='orderStatusText'>
                                <p>Su pago ha sido generado por el siguiente ticket:</p>
                                <p className="paymentID">#{paymentID}</p>
                                <p>Se enviará un resumen a:<span className="titleSpan"> {lastOrderDetail?.user.email} </span></p>
                            </div>) : null
                    }
                    </div>
                <div className="shippingDataContainer">
                <p className="titleOrder">Datos de Envio</p>
                    <p><span className="titleSpan">Nombre:</span> {user?.firstName +" "+ user?.lastName}</p>
                    <p><span className="titleSpan">Email:</span> {user?.email}</p>
                    <p><span className="titleSpan">DNI:</span> {user?.dni}</p>
                    <p><span className="titleSpan">Tel:</span> {user?.tel}</p>
                    <p><span className="titleSpan">Dirección:</span> {user?.address}</p>
                    <p><span className="titleSpan">CP:</span> {user?.zipCode}</p>
                    <p><span className="titleSpan">Ciudad:</span> {user?.city}</p>
                    <p><span className="titleSpan">Provincia:</span> {user?.province}</p>
                </div>
                </div>
                    <LinkRouter className="btnOrder" onClick={updateOrder} to={`/mi-cuenta/${userData?._id}`} >ir a mi cuenta</LinkRouter>
            </div>
        </>
    )
}
