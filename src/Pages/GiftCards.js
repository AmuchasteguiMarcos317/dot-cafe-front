import React from 'react'
import ProductCard from '../Components/ProductCard'
import Spinner from '../Components/Spinner.js/Spinner'
import { useGetAllGiftCardsQuery } from '../Features/giftCardsAPI'
import '../Styles/AllCards.css'

export default function GiftCard() {
    const {data: giftcards} = useGetAllGiftCardsQuery()
    let dataGifCards = giftcards?.response
    return (
        <>
            <main>
                {
                    dataGifCards?.length > 0
                    ?
                    <div className="AllCardsContainer">
                        <h2 className="CardsTitle">Todas nuestras Gift Cards</h2>
                        <div className="CardsContainer">
                            {dataGifCards?.map(gift => <ProductCard key={gift._id} data={gift} linkTo={gift._id} />)}
                        </div>
                    </div>
                    :
                    <div className="containerSpinner">
                        <Spinner />
                    </div>
                }
            </main>
        </>
    )
}