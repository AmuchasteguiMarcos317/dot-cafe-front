import React, { useState } from 'react'
import CoffeeCard from '../Components/CoffeeCard'
import { useGetAllCoffeeForDrinkQuery, useGetCoffeeSearchQuery } from '../Features/coffeeForDrinkAPI'
import '../Styles/CoffeeCard.css'
import Spinner from '../Components/Spinner.js/Spinner'

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
                        <input className="inputSearch" type="search" placeholder='🔍 elegí un tipo' onChange={(e) => setParamType(e.target.value)}></input>
                        <form className='coffeesRadios' >
                            <label><input type="radio" name="size" value="chico" onClick={(e) => setParamSize(e.target.value)}/> Chico</label>
                            <label><input type="radio" name="size" value="grande" onClick={(e) => setParamSize(e.target.value)}/> Grande</label>
                            <label><input type="radio" name="size" value="mediano" onClick={(e) => setParamSize(e.target.value)}/> Mediano</label>
                            <label><input type="radio" name="size" value="mediano" onClick={(e) => setParamSize("")}/> Todos</label>
                        </form>
                    </div>
                    {
                        coffees?.response.length > 0 
                        ?
                        <div className="">
                            {coffees?.response.map(coffee => <CoffeeCard key={coffee._id} data={coffee} />)}
                        </div>
                        :
                        <div className='containerSPinner'>
                            <p>No se encontraron productos</p>
                            <Spinner />
                        </div>
                    }
                </div>
            </main>
        </>
    )
}