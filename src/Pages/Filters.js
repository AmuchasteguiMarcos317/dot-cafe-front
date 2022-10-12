import React from 'react'
import '../Styles/AllCards.css'
import ProductCard from '../Components/ProductCard'
import { useGetAllFiltersQuery } from '../Features/filtersAPI'
import Spinner from '../Components/Spinner.js/Spinner'

export default function Filters() {
    const {data: filters} = useGetAllFiltersQuery()
    let dataFilter = filters?.allFilters

    return (
        <>
            <main>
                {
                    dataFilter?.length > 0
                    ?
                    <div className="AllCardsContainer">
                        <h2 className="CardsTitle">Filtros sustentables: Todos</h2>
                        <div className="CardsContainer">
                            {dataFilter?.map(filter => <ProductCard key={filter._id} data={filter} linkTo={filter._id} />)}
                        </div>
                    </div>
                    :
                    <div className='containerSpinner'>
                        <Spinner/>
                    </div>
                }
            </main>
        </>
    )
}