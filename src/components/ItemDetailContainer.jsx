import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getProducts} from '../mocks/mockData'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

    useEffect(()=>{
        getProducts
        .then((res)=> setProductDetail(res.find((product)=> product.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
    
    
    
    return (
        <div>{loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}</div>
        )
    }
    
    export default ItemDetailContainer
    
    
    
