import React from 'react'
import '../Styles/AllCards.css'
import ProductCard from '../Components/ProductCard'
import { useGetAllFiltersQuery } from '../Features/filtersAPI'

export default function Filters() {
    const {data: filters} = useGetAllFiltersQuery()
    
    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="CardsTitle">Filtros sustentables: Todos</h2>
                    <div className="CardsContainer">
                        {filters?.allFilters.map(filter => <ProductCard key={filter._id} data={filter} linkTo={filter._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}