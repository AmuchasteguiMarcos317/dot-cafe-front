import React, { useEffect, useState } from 'react'
import '../Styles/Details.css'
import { useGetMachineByIdMutation } from '../Features/coffeeMachinesAPI'
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { setMessage } from '../Features/AlertsSlice'
import { addToCart } from '../Features/cartSlice'
import { useDispatch } from 'react-redux'
import { useGetFilterByIdMutation } from '../Features/filtersAPI'
import { useGetMugsByIdMutation } from '../Features/mugsAPI'

export default function Details() {
    const { id } = useParams();
    const [dataMachine, setDataMachine] = useState();
    const [dataFilter, setDataFilter] = useState();
    const [dataMugs, setDataMugs] = useState();
    const [getOneMachine] = useGetMachineByIdMutation();
    const [getOneFilter] = useGetFilterByIdMutation();
    const [getOneMug] = useGetMugsByIdMutation();
    const dispatch = useDispatch()

    const handleAddToCart = async (dataMachine) => {
        dispatch(addToCart({
            _id: dataMachine._id,
            photo: dataMachine.photo[0],
            price: dataMachine.price,
            name: dataMachine.name,
            type: dataMachine.type
        }))
        dispatch(setMessage({
            message: `${dataMachine.name} Se ha añadido al carrito`,
            success: true
        }))
    }

    async function getMachine() {
        try {
            let res = await getOneMachine(id);
            if (res.data.success) {
                setDataMachine(res.data.response);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function getFilter() {
        try {
            let res = await getOneFilter(id);
            if (res.data.success) {
                setDataFilter(res.data.response);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function getMugs() {
        try {
            let res = await getOneMug(id);
            if (res.data.success) {
                setDataMugs(res.data.response);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMachine();
        getFilter();
        getMugs();
    }, []);

    return (
        <>
        {
            dataMachine &&
            <div className='detailsContainer'>
                <div className='cardDetailsCont'>
                    <div className='titleDetail'>
                        <h4>{dataMachine?.name}</h4>
                    </div>
                    <div className='contentsDetail'>
                        <img className='imgDetail' src={dataMachine?.photo[0]} alt="cafe" />
                        <div className='priceTextDetail'>
                            <div className='detailssss'>
                                <p><span className='descripcionDetail'>Descripcion: </span>{dataMachine?.description}</p>
                            </div>
                            <p><span className='descripcionDetail'>Tipo: </span>{dataMachine?.type}</p>
                            <p><span className='descripcionDetail'>Stock: </span>{dataMachine?.stock}</p>
                            <div className='priceContainer'>
                                <h5>Precio:</h5>
                                <h5>${dataMachine?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h5>
                            </div>
                                <button onClick={() => { handleAddToCart(dataMachine) }} className='btnAddCart'>AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                    <LinkRouter to="/ver-todo" className='bottonContainer'>
                        <button className='bottonDetails'>VOLVER</button>
                    </LinkRouter>
                </div>
            </div>
            } : {
                dataMugs &&
                <div className='detailsContainer'>
                <div className='cardDetailsCont'>
                    <div className='titleDetail'>
                        <h4>{dataMugs?.name} </h4>
                    </div>
                    <div className='contentsDetail'>
                        <img className='imgDetail' src={dataMugs?.photo} alt="cafe" />
                        <div className='priceTextDetail'>
                            <div className='detailssss'>
                                <p><span className='descripcionDetail'>Descripcion: </span>{dataMugs?.description}</p>
                            </div>
                            <p><span className='descripcionDetail'>Tipo: </span>{dataMugs?.type}</p>
                            <p><span className='descripcionDetail'>Stock: </span>{dataMugs?.stock}</p>
                            <div className='priceContainer'>
                                <h5>Precio:</h5>
                                <h5>${dataMugs?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h5>
                            </div>
                                <button onClick={() => { handleAddToCart(dataMugs) }} className='btnAddCart'>AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                    <LinkRouter to="/ver-todo" className='bottonContainer'>
                        <button className='bottonDetails'>VOLVER</button>
                    </LinkRouter>
                </div>
            </div>
            } : {
                dataFilter &&
                <div className='detailsContainer'>
                <div className='cardDetailsCont'>
                    <div className='titleDetail'>
                        <h4>{dataFilter?.name} </h4>
                    </div>
                    <div className='contentsDetail'>
                        <img className='imgDetail' src={dataFilter?.photo[0]} alt="cafe" />
                        <div className='priceTextDetail'>
                            <div className='detailssss'>
                                <p><span className='descripcionDetail'>Descripcion: </span>{dataFilter?.description}</p>
                            </div>
                            <p><span className='descripcionDetail'>Tipo: </span>{dataFilter?.type}</p>
                            <p><span className='descripcionDetail'>Stock: </span>{dataFilter?.stock}</p>
                            <div className='priceContainer'>
                                <h5>Precio:</h5>
                                <h5>${dataFilter?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h5>
                            </div>
                                <button onClick={() => { handleAddToCart(dataFilter) }} className='btnAddCart'>AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                    <LinkRouter to="/ver-todo" className='bottonContainer'>
                        <button className='bottonDetails'>VOLVER</button>
                    </LinkRouter>
                </div>
            </div>
            }
        </>
    )
}