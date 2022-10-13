import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetCaffeeByFieldMutation } from '../Features/coffeeByKiloAPI'
import { useGetMachineByFieldMutation } from '../Features/coffeeMachinesAPI'
import { useGetFiltersByFieldMutation } from '../Features/filtersAPI'
import { useGetKitsByFieldMutation } from '../Features/kitsAPI'
import { useGetMugsMutation } from '../Features/mugsAPI'
import ProductCard from './ProductCard'
import Spinner from './Spinner.js/Spinner'

function Products() {
  const [products, setProducts] = useState([])
  const [machines] = useGetMachineByFieldMutation()
  const [coffes] = useGetCaffeeByFieldMutation()
  const [filters] = useGetFiltersByFieldMutation()
  const [kits] = useGetKitsByFieldMutation()
  const [mugs] = useGetMugsMutation()
  const reloaded = useSelector((state) => state.reload.reloadState);


  let mach;
  let coff;
  let fill;
  let kit;
  let mug;

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

      let resMugs = await mugs()
      if(resMugs.data.success){mug = resMugs.data?.response}
      
      setProducts([...mach, ...coff, ...fill, ...kit, ...mug])
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
      setProducts(buscadosArray)
    }
    if(e.target.value == ''){
      loadingData()
    }
  }

  useEffect(() => {
    loadingData()
  }, [reloaded])

  const handleSelect = e => {
    let value = e.target.value
    if(value == '1'){
      let lowProducts = products.sort( (a, b ) => b.price - a.price)
      setProducts([...lowProducts])
    }else if (value == '0') {
      let highProducts = products.sort( (a, b ) => a.price - b.price)
      setProducts([...highProducts])
    }
    if(value === "2"){loadingData()}
  }


  return (
    <>
      <h2 className="allProduct">Todos los productos</h2>
      <div className='container-search'>
        <div className='inputSearch'>
          <input type="text" onChange={handleChange} placeholder='Busca tu producto'/>
        </div>
        <div className='selects'>
          <select onChange={handleSelect}>
            <option value="2">Seleccionar</option>
            <option value="1" >Mayor precio</option>
            <option value="0" >Menor precio</option>
          </select>
        </div>
      </div>
      <div className='container-all-products'>  
        {
          products.length > 0
          ?
          products?.map(item => 
            <ProductCard data={item} key={item._id}/>
          )
          :
          <div className='containerSpinner'>
              <p>No se encontraron productos</p>
              <Spinner/>
          </div>
        }
      </div>
    </>
  )
}

export default Products