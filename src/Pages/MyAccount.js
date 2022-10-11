import React from 'react'
import { useSelector } from 'react-redux'
import OrderNroCard from '../Components/OrderNroCard'
import '../Styles/MyAccount.css'

const orders = [
    {_id: "12345", date: "12-08-2022"},
    {_id: "23456", date: "23-09-2022"},
    {_id: "34567", date: "30-09-2022"},
    {_id: "12345", date: "12-08-2022"},
    {_id: "23456", date: "23-09-2022"},
    {_id: "34567", date: "30-09-2022"},
    {_id: "12345", date: "12-08-2022"},
    {_id: "23456", date: "23-09-2022"},
    {_id: "34567", date: "30-09-2022"}
]

export default function MyAccount() {
    const user = useSelector(state => state.auth.user)
    const userId = user?.id

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
                            <p><span>Gift cards: </span>{user?.giftCard? user.giftCard.length : 0 }</p>
                        </div>
                        <div className="MyAccountData">
                            <h4>Datos de envío</h4>
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
                            {orders.map(order => <OrderNroCard order={order} />)}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
