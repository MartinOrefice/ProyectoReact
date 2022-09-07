import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProducts} from '../mocks/mockData'

const ItemListContainer = ({saludo, greeting}) => {

  const [listaProductos, setListaProductos]= useState([])

  const [loading, setLoading]= useState(false)

  const{categoriaId}= useParams()
  
  
 


  useEffect(()=>{

      setLoading(true)

      getProducts

      .then((res)=>{
        if(categoriaId){
          setListaProductos(res.filter((product)=> product.categoria === categoriaId))
        }else{
          setListaProductos(res)
        }
      })

      .catch((error)=> console.log(error))

      .finally(()=> setLoading(false))

  },[categoriaId])
  

      
  return (
    <div style={{padding:'3rem'}}>
        <p>{saludo}</p>
        <p>{greeting}</p>
      {loading ? <p>Cargando...</p>:<ItemList listaProductos={listaProductos}/>}
    </div>

  )
}

export default ItemListContainer
