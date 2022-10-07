import React from 'react'
import ItemCard from '../Components/ItemCard'
import '../Styles/Cart.css'

export default function Cart() {

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
                            <ItemCard />
                            <ItemCard />
                            {/* <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard /> */}
                        </div>
                    </div>
                    <div className='additionContainer'>
                        <div className='total'>
                            <div className='purchaseValue'>
                                <div className='value'>
                                    <h6>VALOR DE LA COMPRA</h6>
                                    <p>$4030</p>
                                </div>
                                <div className='value'>
                                    <h6>DESCUENTO</h6>
                                    <p>$30</p>
                                </div>
                                <div className='value'>
                                    <h6>SUB-TOTAL</h6>
                                    <p>$4000</p>
                                </div>
                                <div className='value'>
                                    <h6>ENVIO</h6>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className='finishBuy'>
                                <div className='priceTotal'>
                                    <h6>TOTAL</h6>
                                    <p>$4000</p>
                                </div>
                                <div className='buttonBuy'>
                                    <p>FINALIZAR COMPRA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}