import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useGetAllCoffeeMachinesQuery } from '../Features/coffeeMachinesAPI'

export default function CoffeeMachines() {
    const {data: coffeeMachines} = useGetAllCoffeeMachinesQuery()
    
    return (
        <>
            <main>
                {/* <div className="">
                    {coffeeMachines?.response.map(machine => <ProductCard data={machine} linkTo={machine._id} />)}
                </div> */}
            </main>
        </>
    )
}