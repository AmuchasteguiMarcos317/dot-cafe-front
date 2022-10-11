import React from 'react'
import '../Styles/AllCards.css'
import { useLocation } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useGetTypeCoffeeMachinesQuery } from '../Features/coffeeMachinesAPI'

export default function CoffeeMachines() {
    const location = useLocation()
    let type
    if (location.state) {
        type = location.state.type
    }
    
    const {data: coffeeMachines} = useGetTypeCoffeeMachinesQuery(type)
    
    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="CardsTitle">Tipo de cafeteras: {type === "filtro"? "con " + type : type}</h2>
                    <div className="CardsContainer">
                        {coffeeMachines?.cofMachine.map(machine => <ProductCard data={machine} linkTo={machine._id} key={machine._id}/>)}
                    </div>
                </div>
            </main>
        </>
    )
}