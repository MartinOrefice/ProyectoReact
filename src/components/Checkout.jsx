import React from 'react'
import { useState } from 'react'
import {db} from '../index'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Button } from '@mui/material'

const Checkout = () => {

    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
 
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
           setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }
    if(loader){
        return <p>Cargading...</p>
    }







  return (
    <div>
       {!orderId 
       ?<div style={{display:'flex', justifyContent:'center' ,flexDirection:'column', alignItems:'center'}}>
       <h2>Checkout</h2>
        <h4>complete todos los campos</h4>
        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
            <div className= 'divForm'>
                <label  >Nombre Completo</label>
                <input type="text" placeholder='Nombre' name="name" onChange={datosComprador}/>
            </div>
            <div className= 'divForm'>
                <label >Numero de telefono</label>
                <input type="number" placeholder='011587892545' name="phone"  onChange={datosComprador} />
            </div>
            <div className= 'divForm'>
                <label  >E-mail</label>
                <input  type="email" placeholder='martin@gmail.com' name="email"  onChange={datosComprador}/>
            </div>
            <button className='btnFinalizarCompra' type='submit'>Finalizar Compra</button>
            {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
        </form>
       </div>
       :
       <div style={{display:'flex', justifyContent:'center' ,flexDirection:'column', alignItems:'center'}}>
        <h2>Muchas gracias por su compra!</h2>
        <h4>Su orden es: {orderId}</h4>
        <Button variant="contained" onClick={()=> navigate('/')}>Volver</Button>
       </div>}
    </div>
  )
}

export default Checkout