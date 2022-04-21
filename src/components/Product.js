
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";
import CartWidget from "./CartWidget";
import {useStateValue} from "../StateProvider"


export default function Product({product:{id, title, stock, precio, pictureUrl, descripcion}}){
    const [{cart}, dispatch]= useStateValue();
    const [cantidad, setCantidad] =useState(1)
    const [newStock, setNewStock]= useState(stock)
    
    const addToCart= ()=> {

        if(cantidad<=stock){

            dispatch({
                type: actionTypes.ADD_TO_CART,
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
        <>
        <ul className="tarjetas">
            <li> <img src= {pictureUrl} className="tarjetas-img"/></li>
            <li className="detallesCard">{title}</li>
            <li className="detallesCard">Precio: ${precio}</li>
            <li className="detallesCard">Stock: {newStock}</li>
            <li className="linkDetalles">
            <Link to= {`/item/${id}`} >
            <b>Ver detalles...</b>
            </Link> 
            </li>
            <button id={id} className="añadirCarrito" onClick={addToCart}> <b>Añadir al <span><CartWidget/></span></b></button>

        </ul>
        </>
    )
}