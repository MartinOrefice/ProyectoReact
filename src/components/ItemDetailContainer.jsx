import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { collection, doc, getDoc } from 'firebase/firestore'
import {db} from '../index'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

    useEffect(()=>{
        const collectionProductos = collection(db, "productos")
        const referenciaDoc = doc(collectionProductos, id)
        getDoc(referenciaDoc)
        .then((result)=>{
            setProductDetail({
                id: result.id,
                ...result.data()
            })
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])







    // useEffect(()=>{
    //     getProducts
    //     .then((res)=> setProductDetail(res.find((product)=> product.id === id)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[id])
    
    
    
    return (
        <div>{loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}</div>
        )
    }
    
    export default ItemDetailContainer
    
    
    
