import React from 'react'
import '../Styles/ProductCard.css'

export default function ProductCard({data}) {

    return (
        <>
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img className='imgCard' src={typeof(data?.photo) == "string"? data.photo : data.photo[0]} alt="cafe" />
                </div>
                <div className="cardInfoContainer">
                    { data.name &&
                        <div className='cardNameContainer'>
                            <h4>{data?.name}</h4>
                        </div>
                    }
                    <div className='cardPriceContainer'>
                        <h4>Precio:</h4>
                        <h5>${data?.price}</h5>
                    </div>
                    <div className='bottonCard'>AGREGAR AL CARRITO</div>
                </div>
            </div>
        </>
    )
}
