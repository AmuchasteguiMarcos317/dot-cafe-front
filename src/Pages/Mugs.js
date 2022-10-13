import React from 'react'
import '../Styles/AllCards.css'
import ProductCard from '../Components/ProductCard'
import { useGetAllMugsQuery } from '../Features/mugsAPI'
import Spinner from '../Components/Spinner.js/Spinner'

export default function Mugs() {    
    const {data: mugs} = useGetAllMugsQuery()
    let dataMugs = mugs?.response

    return (
        <>
            <main>
                {dataMugs?.length > 0
                    ?
                    <div className="AllCardsContainer">
                        <h2 className="CardsTitle">Tazas: Todas</h2>
                        <div className="CardsContainer">
                            {dataMugs?.map(mug => <ProductCard data={mug} key={mug._id} linkTo={mug._id} />)}
                        </div>
                    </div>
                    :
                    <div className="containerSpinner">
                        <Spinner/>
                    </div>
                }
            </main>
        </>
    )
}