
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function Product({product:{id, title, precio, pictureUrl, descripcion}}){
    return( 
        <>
        <ul className="tarjetas">
            <li> <img src= {pictureUrl} width="298px" height="180px"/></li>
            <li>{title}</li>
            <li>Precio: ${precio}</li>
            <li>
                <button>Añadir al <CartWidget/></button>
            </li>
            <Link to= {`/item/${id}`} >
            <b>Ver detalles...</b>
            </Link> 

        </ul>
        </>
    )
}