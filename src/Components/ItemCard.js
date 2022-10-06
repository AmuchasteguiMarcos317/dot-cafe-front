import React from 'react'
import '../Styles/ItemCard.css'

export default function ItemCard() {

    return (
        <>
        <div className='itemCardContainer'>
        <img className='imgItemCard' src="logo1.png" alt="producto" />
        <div className='descripCard'>
        <h5>Cafe</h5>
        <p>Breve descripcion</p>
        </div>
        <div className='buttonCant'>
            <button className='buttonleft'>-</button>
            <p className='counter'>1</p>
            <button className='buttonright'>+</button>
        </div>
        <div className='priceItemCard'>
            <p>$5000</p>
        </div>
        <div className='totalItemCard'>
            <p>$20010</p>
        </div>
        <div>
        <button className='delete'><img className='imgDelete' src="delete-item.png" alt="delete" /></button>
        </div>
        </div>
        </>
    )
}
