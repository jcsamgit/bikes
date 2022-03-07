
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../context/cartContext"
// import { getDataBase } from "../firebase/firebase"
// import 'firebase/firestore'
// import firebase from "firebase"

import "./cartList.css"
import  FormBuyer from "./formBuyer"
// import NameForm from "./formBuyer"

const userInfo={
    name: "nombre",
    email: "email@email.com",
    phone: "123456"
}

const Cart = (  )=> {

    const {cart, removeItem}= useContext(cartContext)
    // const [order, setOrder]= useState({})
    const getMonto=(cart) =>{
        let total=0
        cart.forEach(item=>{
            total+=(item.precio * item.count)
        })
        return total
    }

    const subtotal= (precio,cantidad) =>{return precio * cantidad}
     
    const finCompras= async()=>{
        alert("compra finalizada")
    }


    // const finCompras= async()=>{

    //     console.log("fin de compras")
    //     const db= getDataBase()
    //     const orderCollection= db.collection('orders')

    //     const order={
    //         buyer: userInfo,
    //         item: cart,
    //         date: firebase.firestore.Timestamp.fromDate(new Date()),
    //         monto: getMonto(cart)
    //     }
    //     const orderCode= await orderCollection.add(order)
    //     console.log("orderCode", orderCode)
  
    //     alert ("Orden de compra generada\nSu codigo es:\n "+ orderCode.id)
    // }

    
        return(
            <>
            {cart.length > 0 && (
                <>
              <h1 className="carrito">Carrito</h1>
              
              {/* <FormBuyer finCompras={finCompras}/>
              <button onClick={finCompras} className="finCompra">Finalizar compra</button> */}
                <br/>
                <br/>
            < div className="tarjetasCarrio">
                {cart.map((item)=>(
                    <div className="tarjetasCarrito"> 
           
                        <img src= {item.imagen} width="198px" height="109px"/>
                        <p key={item.id}>{item.titulo}</p>
                        <p key= {item.id}>precio: ${item.precio}</p>
                        <p key= {item.id}>cantidad:{item.count}</p>
                        
                        <p key= {item.id}>subtotal: ${subtotal(item.count,item.precio)} 
                        </p>
                        <button className="eliminar" onClick={()=>removeItem(item.id)}> <a href="#"> <i class="fas fa-trash"></i> </a>   </button>
 
                        <h2 className="total" key={item.id}>Total: ${getMonto(cart)} </h2>
                        
                    </div>
                ))}

            </div>
            </>
            )}

            {cart.length === 0 && (
                <div>
                <br/>
                <h1 className="carrito">Carrito Vacio</h1>
                <h2 className="carrito"> II </h2>
                <h2 className="carrito"> V </h2>
                <Link to="/bikes" className="verProductos"> <h2  className="carrito">Ver productos</h2></Link>
                </div>
            )}

            </>
        )
}
export default Cart