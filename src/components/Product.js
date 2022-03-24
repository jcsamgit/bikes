
import React from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";
import CartWidget from "./CartWidget";
import {useStateValue} from "../StateProvider"


export default function Product({product:{id, title, stock, precio, pictureUrl, descripcion}}){
    const [{basket}, dispatch]= useStateValue();
    
    const addToBasket= ()=> {
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
    }

    return( 
        <>
        <ul className="tarjetas">
            <li> <img src= {pictureUrl} width="298px" height="180px"/></li>
            <li className="detallesCard">{title}</li>
            <li className="detallesCard">Precio: ${precio}</li>
            <li className="detallesCard">Stock: {stock}</li>
            <li>
                <button className="añadirCarrito" onClick={addToBasket}> <b>Añadir al <span><CartWidget/></span></b></button>
            </li>
            <Link to= {`/item/${id}`} >
            <b className="linkDetalles">Ver detalles...</b>
            </Link> 

        </ul>
        </>
    )
}