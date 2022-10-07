import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import '../Styles/BasketCart.css'
import {Link as LinkRouter} from 'react-router-dom'



function BasketCart() {

    const basket = useSelector(state => state.cart.cartArray)
    console.log(basket)

    let totalQuantity = 0
    let totalPrice = 0

    const getTotal = () => {

        basket.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }
 
    

    


  return (
    <>
    {  basket.length > 0 ? (
        <div>
        {
            basket.map((item)=>{

                return(
                    <>
                    
                    <div key={item._id} className='cartSlide'>
                        <img className='imgBasketItemPhoto' src={item.photo} alt={item.name} />
                        <p className='pBasketItemName'> {item.name} </p>
                        <p>{item.quantity} U.</p>
                        <p><strong>AR$ {item.price * item.quantity }</strong></p>
                        
                    </div>
                    <hr/>
                    </>
                )
            })
        }
        <p> <strong> Cantidad de productos: {getTotal().totalQuantity} </strong></p>
        <p><strong> Total: $ {totalPrice} </strong></p>
        <LinkRouter className="navAll" to='/cart'>
                    IR AL CARRITO
        </LinkRouter>
    </div>
    ) : (
        <div>
        <p><strong>Tu carrito está vacio</strong></p>
        <LinkRouter to="/ver-todo" className="navAll">ir a comprar</LinkRouter>
        </div>
    )}
</>
  )
}

export default BasketCart