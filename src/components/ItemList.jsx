import React, {useEffect, useState} from 'react'
import Item from './Item'

const ItemList = ({card}) => {
    const [listaProductos, setListaProductos]= useState([])
    const productos = [
        {id: '01', nombre:'Producto1', descripcion:'Descripcion1', img:'https://picsum.photos/200' },
        {id: '02', nombre:'Producto2', descripcion:'Descripcion2', img:'https://picsum.photos/201' },
        {id: '03', nombre:'Producto3', descripcion:'Descripcion3', img:'https://picsum.photos/202' },
        {id: '04', nombre:'Producto4', descripcion:'Descripcion4', img:'https://picsum.photos/203' },
        {id: '05', nombre:'Producto5', descripcion:'Descripcion5', img:'https://picsum.photos/204' },
        {id: '06', nombre:'Producto6', descripcion:'Descripcion6', img:'https://picsum.photos/205' },
    ]

    const getProducts = new Promise((resolve, reject)=>{
        let condicion= true
        if (condicion){
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
        }else{
            reject('se pudrio todo- error')
        }
    })


    useEffect(()=>{
        getProducts
        .then((respuesta)=> setListaProductos(respuesta))
        .catch((error)=> console.log(error))
    },[])

    console.log(listaProductos);

    


  return (
    <div>
        <h2>Lista de productos</h2>
        <div className='productsContainer'>{listaProductos.map((producto)=> <Item card={card} producto={producto} key={producto.id}/>)}</div>
    </div>
  )
}

export default ItemList