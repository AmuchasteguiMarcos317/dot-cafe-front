import React, { useState } from 'react'
import CoffeeCard from '../Components/CoffeeCard'
import { useGetAllCoffeeForDrinkQuery, useGetCoffeeSearchQuery } from '../Features/coffeeForDrinkAPI'
import '../Styles/CoffeeCard.css'

export default function Coffees() {
    const [paramType, setParamType] = useState("")
    const [paramSize, setParamSize] = useState("")
    
    const {data: coffeesAll} = useGetAllCoffeeForDrinkQuery()
    const {data: coffeeSearch} = useGetCoffeeSearchQuery([paramSize, paramType])
    let coffees = coffeeSearch ? coffeeSearch : coffeesAll
    

    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="coffeesTitle" id='topCoffee'>Pedite uno de nuestros cafés de especialidad</h2>
                    <div className="coffeesInputs">
                        <input id="input-form" type="search" placeholder='🔍 ej: espresso' onChange={(e) => setParamType(e.target.value)}></input>
                        <form className='coffeesRadios' >
                            <label><input type="radio" name="size" value="chico" onChange={(e) => setParamSize(e.target.value)}/> Chico</label>
                            <label><input type="radio" name="size" value="grande" onChange={(e) => setParamSize(e.target.value)}/> Grande</label>
                            <label><input type="radio" name="size" value="mediano" onChange={(e) => setParamSize(e.target.value)}/> Mediano</label>
                        </form>
                    </div>
                    <div className="">
                        {coffees?.response.map(coffee => <CoffeeCard data={coffee} />)}
                    </div>
                </div>
            </main>
        </>
    )
}