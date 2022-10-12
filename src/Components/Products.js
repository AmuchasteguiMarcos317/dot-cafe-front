import React, { useEffect, useState } from 'react'
import { useGetCaffeeByFieldMutation } from '../Features/coffeeByKiloAPI'
import { useGetMachineByFieldMutation } from '../Features/coffeeMachinesAPI'
import { useGetFiltersByFieldMutation } from '../Features/filtersAPI'
import { useGetKitsByFieldMutation } from '../Features/kitsAPI'
import ProductCard from './ProductCard'
import Spinner from './Spinner.js/Spinner'

function Products() {
  const [products, setProducts] = useState([])
  const [machines] = useGetMachineByFieldMutation()
  const [coffes] = useGetCaffeeByFieldMutation()
  const [filters] = useGetFiltersByFieldMutation()
  const [kits] = useGetKitsByFieldMutation()
  const [reload, setReload] = useState(false)
  let mach;
  let coff;
  let fill;
  let kit;

  async function loadingData() {
    try {
      let res = await machines()
      if(res.data.success){ mach = res.data?.response}

      let resCoffe = await coffes()
      if(resCoffe.data.success){coff = resCoffe.data?.response}

      let resFilter = await filters()
      if(resFilter.data.success){ fill = resFilter.data?.response}
      
      let resKits = await kits()
      if(resKits.data.success){kit = resKits.data?.response}
      
      setProducts([...mach, ...coff, ...fill, ...kit])
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    let userSearch = e.target.value
    let buscadosArray = products.filter((ele) => ele.name.toLocaleLowerCase().includes(userSearch.toLowerCase().trim()));
    if(buscadosArray.length > 0){
      setProducts(buscadosArray)
    }else{
      console.log('No hay de ese producto tarado')
    }
    if(e.target.value == ''){
      loadingData()
      // setReload(!false)
    }
  }

  useEffect(() => {
    loadingData()
  }, [reload])


  return (
    <>
      {products.length > 0
        ?
        <>
          <h2 className="allProduct">Todos los productos</h2>
          <div className='container-search'>
            <input type="text" onChange={handleChange} placeholder='Busca tu producto'/>
          </div>
          <div className='container-all-products'>  
            {products && products.map(item => 
              <ProductCard data={item} key={item._id}/>
            )}
          </div>
        </>
      :
      <div className='containerSpinner'>
          <Spinner/>
      </div>
      }
    </>
  )
}

export default Products