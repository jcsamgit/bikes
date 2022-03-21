

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function CheckoutCard({product:{id, title, precio, pictureUrl, descripcion}}){
    return( 
        <>
            {/* <div> */}
            <img src= {pictureUrl} width="198px" height="109px"/>
            <p key={id}>{title}</p>
            <p key= {id}>precio: ${precio}</p>
            {/* <p key= {id}>cantidad:{count}</p> */}
            
            <p key= {id}>
            {/* subtotal: ${subtotal(count,precio)}  */}
            </p>
            <button className="eliminar" > <a href="#"> <i class="fas fa-trash"></i> </a>   </button>
            {/* </div> */}





        {/* <ul className="tarjetas">
            <li> <img src= {pictureUrl} width="298px" height="180px"/></li>
            <li>{title}</li>
            <li>Precio: ${precio}</li>
            <li>
                <button>Añadir al <CartWidget/></button>
            </li>
            <Link to= {`/item/${id}`} >
            <b>Ver detalles...</b>
            </Link> 

        </ul> */}
        </>
    )
}