import React from 'react'
import Products from '../Components/Products'
import '../Styles/SeeAll.css'

export default function SeeAll() {

  return (
    <div className='seeAllPage'>
      <div className='allProductContain'>
        <Products />
      </div>
    </div>
  )
}