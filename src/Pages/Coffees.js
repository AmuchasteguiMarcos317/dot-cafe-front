import React from 'react'
import CoffeeCard from '../Components/CoffeeCard'
import { useGetAllCoffeeForDrinkQuery } from '../Features/coffeeForDrinkAPI'
import '../Styles/CoffeeCard.css'

export default function Coffees() {
    const {data: coffees} = useGetAllCoffeeForDrinkQuery()

    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="cofeeTitle" id='topCoffee'>Pedite uno de nuestros cafés de especialidad</h2>
                    <div className="">
                        {coffees?.response.map(coffee => <CoffeeCard data={coffee} />)}
                    </div>
                </div>
            </main>
        </>
    )
}