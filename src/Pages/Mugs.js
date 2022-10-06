import React from 'react'
import '../Styles/AllCards.css'
import ProductCard from '../Components/ProductCard'
import { useGetAllMugsQuery } from '../Features/mugsAPI'

export default function Mugs() {    
    const {data: mugs} = useGetAllMugsQuery()
    
    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="CardsTitle">Tazas:</h2>
                    <div className="CardsContainer">
                        {mugs?.response.map(mug => <ProductCard data={mug} linkTo={mug._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}