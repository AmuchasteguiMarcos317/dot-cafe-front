import React from 'react'
import '../Styles/AllCards.css'
import { useLocation } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useGetCoffeeByOriginQuery } from '../Features/coffeeByKiloAPI'

export default function CoffeeByKilo() {
    const location = useLocation()
    let region
    if (location.state) {
        region = location.state.region
    }
    
    const {data: coffeesbykilo} = useGetCoffeeByOriginQuery(region)
    
    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="CardsTitle">Café por origen: {region}</h2>
                    <div className="CardsContainer">
                        {coffeesbykilo?.coffeeByKi.map(coffee => <ProductCard data={coffee} linkTo={coffee._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}