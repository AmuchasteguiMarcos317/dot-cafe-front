import React from 'react'
import '../Styles/ProductCard.css'

const cardsProduct = [
    { key: "100", name: "Cafetera moulines dolce gusto piccolo", photo: "https://moulinexar.vtexassets.com/arquivos/ids/155830-1200-1200?v=637985929762900000&width=1200&height=1200&aspect=true", stock: 5, price: 39995, type: "capsula" },
]

export default function ProductCard() {
    return (
        <>
            {cardsProduct.map(card => (
                <div className='cardContainer'>
                    <img className='imgCard' src={card.photo} alt="cafe" />
                    <div className='contentsCard'>
                        <h4>{card.name}</h4>
                    </div>
                    <div className='priceText'>
                        <h4>Precio:</h4>
                    </div>
                    <divv className='price'>
                        <h5>${card.price}</h5>
                    </divv>
                    <div className='bottonCard'>AGREGAR AL CARRITO</div>
                </div>
            ))}
        </>
    )
}
