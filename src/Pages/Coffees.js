import React from 'react'
import { useGetAllCoffeeForDrinkQuery } from '../Features/coffeeForDrinkAPI'

export default function Coffees() {
    const {data: coffees} = useGetAllCoffeeForDrinkQuery()

    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="">Pedite uno de nuestros cafés de especialidad</h2>
                    <div className="">
                        {coffees?.response.map(coffee => console.log(coffee))}
                    </div>
                </div>
            </main>
        </>
    )
}