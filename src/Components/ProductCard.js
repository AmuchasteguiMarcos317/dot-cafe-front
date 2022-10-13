import React from 'react'
import '../Styles/ProductCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Features/cartSlice'
import { setMessage } from '../Features/AlertsSlice'
import { Link as LinkRouter } from 'react-router-dom'

export default function ProductCard({ data }) {
    console.log(data)

    const dispatch = useDispatch()
    let photoProduct = typeof (data?.photo) == "string" ? data.photo : data.photo[0]

    const handleAddToCart = async (data) => {
        dispatch(addToCart({
            _id: data._id,
            photo: photoProduct,
            price: data.price,
            name: data.name
        }))
        dispatch(setMessage({
            message: `${data.name} Se ha añadido al carrito`,
            success: true
        }))
    }

    return (
        <>
            <div key={data._id} className='cardContainer'>
                <div className='imgContainer'>
                    <img className='imgCard' src={photoProduct} alt="cafe" />
                </div>
                <div className="cardInfoContainer">
                    {data.name &&
                        <div className='cardNameContainer'>
                            <h4>{data?.name}</h4>
                        </div>
                    }
                    <div className='cardTypeContainer'>
                        <h5>{data?.presentation} {data?.roastingLevels}</h5>
                    </div>
                    <div className='cardPriceContainer'>
                        <h4>Precio:</h4>
                        <h5>${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h5>
                    </div>
                    {
                        data?.description  &&
                        <LinkRouter className='btnView' to={`/producto/${data._id}`}>VER MAS</LinkRouter>
                    }
                    <button onClick={() => { handleAddToCart(data) }} className='bottonCard'>AGREGAR AL CARRITO</button>
                </div>
            </div>
        </>
    )
}
