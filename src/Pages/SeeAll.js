import React from 'react'
import Products from '../Components/Products'
import '../Styles/SeeAll.css'

export default function SeeAll() {

  return (
    <div className='seeAllPage'>
      <div className='allProductContain'>
        <h2 className="allProduct">Todos los productos</h2>
        <Products />
      </div>
    </div>
  )
}