import React, { useEffect, useState } from 'react'
import apiURL from '../api'
import ProductCard from '../Components/ProductCard'
import { useGetAllGiftCardsQuery } from '../Features/giftCardsAPI'
import axios from "axios";
import '../Styles/GiftCards.css'

export default function GiftCard() {
    const {data: giftcards} = useGetAllGiftCardsQuery()
    console.log(giftcards)
    
    // const [giftCards, setGiftCards] = useState([])

    // useEffect(() => {
    //     axios.get(apiURL + '/giftcard')
    //     .then(response => {
    //         setGiftCards(response.data.response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    // console.log(giftCards)


    return (
        <>
            <main>
                {/* <div className="giftContainer">
                    {giftcards?.response.map(card => <ProductCard data={card} linkTo={card._id} />)}
                </div> */}
            </main>
        </>
    )
}