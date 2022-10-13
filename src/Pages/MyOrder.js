import React from 'react'
import { useSelector } from 'react-redux'
import ProductOrderCard from '../Components/ProductOrderCard'
import '../Styles/MyAccountAndOrder.css'
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from '../Features/orderAPI';
import {Link as LinkRouter} from 'react-router-dom'
export default function MyOrder() {
    const { id } = useParams()
    const user = useSelector(state => state.auth.user)
    const {data: items} = useGetOrderByIdQuery(id)
    const keys = items?.response
    let newDate = new Date(keys?.date)
    newDate = newDate.toLocaleDateString("es-MX", { weekday:'long', day:'numeric', month:'long', year:'numeric' })


    return (
        <>
            <main>
                <div className="MyAccountContainer">
                    <div className="MyDataContainer">
                        <div className="MyLoginData">
                            <h4>Orden: #{id}</h4>
                            <img src={user?.photo} alt="user" />
                            <p><span>Nombre: </span>{user?.firstName +" "+ user?.lastName}</p>
                            <p><span>Email: </span>{user?.email}</p>
                            <p><span>DNI: </span>{user?.dni}</p>
                            <p><span>Tel: </span>{user?.tel}</p>
                            <p><span>Dirección: </span>{user?.address}</p>
                            <p><span>CP: </span>{user?.zipCode}</p>
                            <p><span>Ciudad: </span>{user?.city}</p>
                            <p><span>Provincia: </span>{user?.province}</p>
                            <p className="lineCross"></p>
                            <p><span>Pago: </span>{keys?.payment ? "Pagado" : "Pendiente de pago"}</p>
                            <p><span>Estado: </span>{keys?.state}</p>
                            <p><span>Fecha: </span>{newDate}</p>
                        </div>
                    </div>
                    <div className="MyOrderDetails">
                        <div className="MyOrderProducts">
                            <div className="MyOrderTitles">
                                <p className="MyOrder20">Producto</p>
                                <p className="MyOrder50">Nombre</p>
                                <p>Precio</p>
                                <p>Cantidad</p>
                                <p>Total</p>
                            </div>
                            {keys?.products?.map(product => <ProductOrderCard product={product} />)}
                            <div className="MyOrderFinalPrice">
                                <h6>TOTAL: AR$<strong>{keys ? (keys.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : null}</strong></h6>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                <LinkRouter to={`/mi-cuenta/${user?._id}`} className="navAll">
                        ir atrás
                </LinkRouter>
                <hr/>
                </div>

            </main>
        </>
    )
}
