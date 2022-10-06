import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useGetAllCoffeeMachinesQuery } from '../Features/coffeeMachinesAPI'
import '../Styles/AllCards.css'

export default function CoffeeMachines() {
    
    const {data: coffeeMachines} = useGetAllCoffeeMachinesQuery()

    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="CardsTitle">Maquinas de café: Todas</h2>
                    <div className="CardsContainer">
                        {coffeeMachines?.cofMachine.map(machine => <ProductCard data={machine} linkTo={machine._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}