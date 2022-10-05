import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useGetAllGiftCardsQuery } from '../Features/giftCardsAPI'
import '../Styles/AllCards.css'

export default function GiftCard() {
    const {data: giftcards} = useGetAllGiftCardsQuery()
    console.log(giftcards)

    return (
        <>
            <main>
                <div class="AllCardsContainer">
                    <h2 className="CardsTitle">Todas nuestras Gift Cards</h2>
                    <div className="CardsContainer">
                        {giftcards?.response.map(gift => <ProductCard data={gift} linkTo={gift._id} />)}
                    </div>
                </div>
            </main>
        </>
    )
}