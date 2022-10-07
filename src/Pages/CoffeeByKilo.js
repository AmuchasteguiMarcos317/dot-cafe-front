import React from 'react'
import '../Styles/AllCards.css'
import { useLocation } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useGetCoffeeByWeightQuery } from '../Features/coffeeByKiloAPI'

export default function CoffeeByKilo() {
    const location = useLocation()
    let kilo
    if (location.state) {
        kilo = location.state.kilo
    }
    
    const {data: coffeesbykilo} = useGetCoffeeByWeightQuery(kilo)
    
    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="CardsTitle">Café por kilo: {kilo} Grs.</h2>
                    <div className="CardsContainer">
                        {coffeesbykilo?.coffeeByKi.map(coffee => <ProductCard data={coffee} linkTo={coffee._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}