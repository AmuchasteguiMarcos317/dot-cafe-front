import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../Components/ItemCard'
import '../Styles/Cart.css'
import { emptyCart } from '../Features/cartSlice'

export default function Cart() {
    const finalCart = useSelector(state => state.cart.cartArray)
    const dispatch = useDispatch()
    let totalQuantity = 0
    let totalPrice = 0
    let discount = 10000

    const getTotal = () => {

        finalCart.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }

    return (
        <>
            <main>
                <div class="CartContainer">
                    <div className='trolleyContainer'>
                        <div className='detailProcuctContainer'>
                            <div className='itemCard'>
                                <p className='productItem'>PRODUCTO</p>
                                <p className='cantItem'>CANTIDAD</p>
                                <p className='valueItem'>PRECIO</p>
                                <p className='totalItem'>TOTAL</p>
                            </div>
                            { finalCart.length > 0 ? (
                                <>
                                {finalCart.map( item => <ItemCard data={item} />)}
                                <div className='emptyContainer'>
                                    <button onClick={()=> dispatch(emptyCart()) } className='buttonEmpty'>
                                        <p>VACIAR CARRITO</p>
                                    </button>
                                </div>
                                </>
                            ) : (
                                <p>El carrito está vacio</p>
                            )
                                
                            }

                        </div>
                    </div>
                    <div className='additionContainer'>
                        <div className='total'>
                            <div className='purchaseValue'>
                                <div className='value'>
                                    <h6>VALOR DE LA COMPRA</h6>
                                    <p>AR${getTotal().totalPrice}</p>
                                </div>
                                <div className='value'>
                                    <h6>DESCUENTO</h6>
                                    <p>{discount}</p>
                                </div>
                                <div className='value'>
                                    <h6>SUB-TOTAL</h6>
                                    <p>AR${totalPrice - discount}</p>
                                </div>
                                <div className='value'>
                                    <h6>ENVIO</h6>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className='finishBuy'>
                                <div className='priceTotal'>
                                    <h6>TOTAL</h6>
                                    <p>AR${totalPrice - discount}</p>
                                </div>
                                <button className='buttonBuy'>
                                    <p>FINALIZAR COMPRA</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}