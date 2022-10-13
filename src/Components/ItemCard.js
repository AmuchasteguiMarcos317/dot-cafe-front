import React from 'react'
import { useDispatch } from 'react-redux'
import '../Styles/ItemCard.css'
import { incrementItem, decrementItem, emptyItem } from '../Features/cartSlice'
import { setMessage } from '../Features/AlertsSlice'

export default function ItemCard({data}) {
    const dispatch = useDispatch()

    const handleRemoveItem = id => {
        dispatch(emptyItem(id))
        dispatch(setMessage({
            message: "Producto borrado",
            success:  true
        }))
    }

    return (
        <>
            <div className='itemCardContainer'>
                <img className='imgItemCard' src={data.photo} alt="producto" />
                <div className='descripCard'>
                    <h5>{data.name}</h5>
                </div>
                <div className='buttonCant'>
                    <button onClick={()=> dispatch(decrementItem(data._id)) } className='buttonleft'>-</button>
                    <p className='counter'>{data.quantity}</p>
                    <button onClick={()=> dispatch(incrementItem(data._id)) } className='buttonright'>+</button>
                </div>
                <div className='priceItemCard'>
                    <p>AR$ {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
                <div className='totalItemCard'>
                    <p>AR$ {(data.price * data.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
                <div>
                    <button onClick={()=> handleRemoveItem(data._id) } className='delete'><img className='imgDelete' src="delete-item.png" alt="delete" /></button>
                </div>
            </div>
        </>
    )
}
