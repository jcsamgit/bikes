

import React, { useState } from "react";
import {useStateValue} from "../StateProvider"
import { actionTypes } from "../reducer";
import '../CSS/detallesProduct.css'

export default function ItemDetail ({items:{id, title, stock, precio, pictureUrl, descripcion}}){
    const [{basket}, dispatch]= useStateValue();
    const [cantidad, setCantidad] =useState(1)
    const [newStock, setNewStock]= useState(stock)
    console.log("stock", stock) // por alguna razon stock es undefine
    console.log("newStock", newStock)
    
    const addToBasket= ()=> {

        if(cantidad<=stock){

            dispatch({
                type: actionTypes.ADD_TO_BASKET,
                item: {
                    id,
                    title,
                    stock,
                    precio,
                    pictureUrl,
                    descripcion,
                }
            })
            setCantidad(cantidad+1)
            setNewStock(newStock-1)            
            console.log("cantidad", cantidad)
        }else{
            let boton= document.getElementById(id)
            boton.innerText=">>>sin stock"
        }
    }

    return(
        

        <div className="contenedorItemDetail">

            <div>
                <img src={pictureUrl} className="imgDetail"/>
            </div>
            <div className="contenedorDetail" >

                <ul >
                    <h2>{title}</h2>
                    <li>Stock: {stock-cantidad+1}</li>
                    {/* <li>Stock: {newStock}</li> */}
                    <li>$ {precio}</li>
                    <li>Descripcion: {descripcion}</li>

                    <li>
                        <button id={id} className='finCompra' onClick={addToBasket}>Añadir al carrito</button>
                    </li>

                </ul>
            </div>
        </div>
    )

}