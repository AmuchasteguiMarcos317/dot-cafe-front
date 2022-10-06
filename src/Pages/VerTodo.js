import React from 'react'
import Products from '../Components/Products'
import '../Styles/VerTodo.css'

export default function VerTodo() {

  return (
    <div className='ver-todo-page'>
      <div className='allProductContain'>
        <h2 className="allProduct">Todas los productos</h2>
        <Products />
      </div>
    </div>
  )
}