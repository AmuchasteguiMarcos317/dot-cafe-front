import React from 'react'
import { useSelector } from 'react-redux'
import ProductOrderCard from '../Components/ProductOrderCard'
import '../Styles/MyAccount.css'

const products = [
    {"_id": "633f2a1dc19b2d80c194ddcd",
    "quantity": 1},
    {"_id": "633db9b5816d2a615379d845",
    "quantity": 2},
    {"_id": "633c56a2bc1b0ff096bc985d",
    "quantity": 4}
]

export default function MyOrder() {
    const user = useSelector(state => state.auth.user)
    const finalCart = useSelector(state => state.cart.cartArray)
    const order = "12345"

    return (
        <>
            <main>
                <div className="MyAccountContainer">
                    <div className="MyDataContainer">
                        <div className="MyLoginData">
                            <h4>Detalles de la compra</h4>
                            <img src={user?.photo} alt="user" />
                            <p><span>Nombre: </span>{user?.firstName +" "+ user?.lastName}</p>
                            <p><span>Email: </span>{user?.email}</p>
                            <p><span>DNI: </span>{user?.dni}</p>
                            <p><span>Tel: </span>{user?.tel}</p>
                            <p><span>Dirección: </span>{user?.address}</p>
                            <p><span>CP: </span>{user?.zipCode}</p>
                            <p><span>Ciudad: </span>{user?.city}</p>
                            <p><span>Provincia: </span>{user?.province}</p>
                        </div>
                    </div>
                    <div className="MyOrdersContainer">
                        <h3>Orden: {order._id}</h3>
                        <div className="AllMyOrders">
                            {products.map(product => <ProductOrderCard product={product} />)}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
