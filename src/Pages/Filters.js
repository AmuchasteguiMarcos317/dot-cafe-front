import React from 'react'
import '../Styles/AllCards.css'
import ProductCard from '../Components/ProductCard'
import { useGetAllFiltersQuery } from '../Features/filtersAPI'

export default function Filters() {
    const {data: filters} = useGetAllFiltersQuery()
    
    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="CardsTitle">Filtros sustentables:</h2>
                    <div className="CardsContainer">
                        {filters?.allFilters.map(filter => <ProductCard data={filter} linkTo={filter._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}