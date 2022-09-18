import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {query, where, getDocs, collection} from 'firebase/firestore'
import { db } from '../index'

const ItemListContainer = ({saludo, greeting}) => {

  const [listaProductos, setListaProductos]= useState([])

  const [loading, setLoading]= useState(false)

  const{categoriaId}= useParams()
  
  useEffect(()=>{
    const productos = categoriaId ?query(collection(db, "productos"), where("categoria", "==", categoriaId)) :collection(db, "productos")
    getDocs(productos)
    .then((result)=>{
      const lista = result.docs.map((productos)=>{
        return{
          id: productos.id,
          ...productos.data()
        }
      })
      setListaProductos(lista)
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
  },[categoriaId])
 


  // useEffect(()=>{

  //     setLoading(true)

  //     getProducts

  //     .then((res)=>{
  //       if(categoriaId){
  //         setListaProductos(res.filter((product)=> product.categoria === categoriaId))
  //       }else{
  //         setListaProductos(res)
  //       }
  //     })

  //     .catch((error)=> console.log(error))

  //     .finally(()=> setLoading(false))

  // },[categoriaId])
  

      
  return (
    <div style={{padding:'3rem'}}>
        <p>{saludo}</p>
        <p>{greeting}</p>
      {loading ? <p>Cargando...</p>:<ItemList listaProductos={listaProductos}/>}
    </div>

  )
}

export default ItemListContainer
