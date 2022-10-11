import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useGetAllGiftCardsQuery } from '../Features/giftCardsAPI'
import '../Styles/AllCards.css'

export default function GiftCard() {
    const {data: giftcards} = useGetAllGiftCardsQuery()

    return (
        <>
            <main>
                <div className="AllCardsContainer">
                    <h2 className="CardsTitle">Todas nuestras Gift Cards</h2>
                    <div className="CardsContainer">
                        {giftcards?.response.map(gift => <ProductCard key={gift._id} data={gift} linkTo={gift._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}