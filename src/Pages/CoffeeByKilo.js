import React from 'react'
import '../Styles/AllCards.css'
import { useLocation } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useGetCoffeeByWeightQuery } from '../Features/coffeeByKiloAPI'
import Spinner from '../Components/Spinner.js/Spinner'

export default function CoffeeByKilo() {
    const location = useLocation()
    let kilo
    if (location.state) {
        kilo = location.state.kilo
    }
    
    const {data: coffeesbykilo} = useGetCoffeeByWeightQuery(kilo)
    let dataCoffe = coffeesbykilo?.coffeeByKi
    return (
        <>
            <main>
                {
                    dataCoffe?.length > 0
                    ?
                    <div className="AllCardsContainer">
                        <h2 className="CardsTitle">Café por kilo: {kilo} Grs.</h2>
                        <div className="CardsContainer">
                            {dataCoffe?.map(coffee => <ProductCard data={coffee} linkTo={coffee._id} key={coffee._id}/>)}
                        </div>
                    </div>
                    :
                    <div  className="containerSpinner">
                        <Spinner/>
                    </div>
                }
            </main>
        </>
    )
}