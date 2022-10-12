import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import OrderNroCard from '../Components/OrderNroCard'
import { useGetAllOrdersQuery, useGetOrderByUserMutation, useGetOrderByUserQuery } from '../Features/orderAPI'
import '../Styles/MyAccountAndOrder.css'

export default function MyAccount() {
    let user = useSelector(state => state.auth.user)
    const {data: orders, refetch} = useGetOrderByUserQuery(user?._id)
    console.log(orders)
    const reloaded = useSelector(state => state.reload.reloadState)

    useEffect(() => {
        refetch()
    },[reloaded])

    return (
        <>
            <main>
                <div className="MyAccountContainer">
                    <div className="MyDataContainer">
                        <h3>Datos personales</h3>
                        <div className="MyLoginData">
                            <h4>Datos de cuenta</h4>
                            <img src={user?.photo} alt="user" />
                            <p><span>Nombre: </span>{user?.firstName +" "+ user?.lastName}</p>
                            <p><span>Email: </span>{user?.email}</p>
                            <p><span>Gift cards: </span>{user?.giftCard? user.giftCard.length : 0}</p>
                        </div>
                        <div className="MyAccountData">
                            <div className='MyAccountData-btn'>
                                <div>
                                    <h4>Datos de envío</h4>
                                </div>
                                <div>
                                    <LinkRouter to="/editar-perfil">Editar ✏</LinkRouter>
                                </div>
                            </div>
                            <p><span>DNI: </span>{user?.dni}</p>
                            <p><span>Tel: </span>{user?.tel}</p>
                            <p><span>Dirección: </span>{user?.address}</p>
                            <p><span>CP: </span>{user?.zipCode}</p>
                            <p><span>Ciudad: </span>{user?.city}</p>
                            <p><span>Provincia: </span>{user?.province}</p>
                        </div>
                    </div>
                    <div className="MyOrdersContainer">
                        <h3>Mis órdenes de compra</h3>
                        <div className="AllMyOrders">
                            {orders?.response.map(order => <OrderNroCard key={order._id} order={order} />)}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
