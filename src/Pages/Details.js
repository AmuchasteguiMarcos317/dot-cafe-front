import React from 'react'
import '../Styles/Details.css'

const cardsDetails = [
    { key: "100", name: "Cafetera moulines dolce gusto piccolo", photo: "https://moulinexar.vtexassets.com/arquivos/ids/155830-1200-1200?v=637985929762900000&width=1200&height=1200&aspect=true", stock: 5, price: 39995, type: "Capsula", descripcion: "esta cafetera es muy buenadsfjsdfdsjkfkdsfj skdfjkdsjfksdjfksdjfk" },
]

export default function Details() {
    return (
        <>
            <div className='detailsContainer'>
                {cardsDetails.map(card => (
                    <div className='cardDetailsCont'>
                        <div className='titleDetail'>
                            <h4>{card.name}</h4>
                        </div>
                        <div className='contentsDetail'>
                            <img className='imgDetail' src={card.photo} alt="cafe" />
                            <div className='priceTextDetail'>
                                <div className='detailssss'>
                                    <p><span className='descripcionDetail'>Descripcion: </span> {card.descripcion}</p>
                                </div>
                                <p><span className='descripcionDetail'>Tipo: </span>{card.type}</p>
                                <p><span className='descripcionDetail'>Stock: </span>{card.stock}</p>
                                <div className='priceContainer'>
                                    <h4>Precio:</h4>
                                    <h5>${card.price}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='bottonContainer'>
                            <div className='bottonDetails'>AGREGAR AL CARRITO</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}