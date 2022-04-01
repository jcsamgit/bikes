
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";
import CartWidget from "./CartWidget";
import {useStateValue} from "../StateProvider"


export default function Product({product:{id, title, stock, precio, pictureUrl, descripcion}}){
    const [{basket}, dispatch]= useStateValue();
    const [cantidad, setCantidad] =useState(1)
    const [newStock, setNewStock]= useState(stock)
    
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
            // alert("Se acabo el stock")
            let boton= document.getElementById(id)
            // let boton= document.getElementsByClassName("añadirCarrito")
            boton.innerText=">>>sin stock"
        }
    }

    return( 
        <>
        <ul className="tarjetas">
            <li> <img src= {pictureUrl} width="298px" height="180px"/></li>
            <li className="detallesCard">{title}</li>
            <li className="detallesCard">Precio: ${precio}</li>
            <li className="detallesCard">Stock: {newStock}</li>
            <li>
                <button id={id} className="añadirCarrito" onClick={addToBasket}> <b>Añadir al <span><CartWidget/></span></b></button>
            </li>
            <Link to= {`/item/${id}`} >
            <b className="linkDetalles">Ver detalles...</b>
            </Link> 

        </ul>
        </>
    )
}