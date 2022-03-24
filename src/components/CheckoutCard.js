

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CartWidget from "./CartWidget";
import {actionTypes} from "../reducer"


export default function CheckoutCard({product:{id,title, precio, pictureUrl}}){
    const [{basket},dispatch]= useStateValue()

    const removeItem= ()=> dispatch({
        type: actionTypes.REMOVE_ITEM,  
        id:id,
    })
    return( 
        <>
            {/* <div> */}
            <img src= {pictureUrl} width="198px" height="109px"/>
            <p>{title}</p>
            <p >precio: ${precio}</p>
            {/* <p key= {id}>cantidad:{count}</p> */}
            
            <p >
            {/* subtotal: ${subtotal(count,precio)}  */}
            </p>
            <button className="eliminar" onClick={removeItem}> <a href="#"> <i class="fas fa-trash"></i> </a>   </button>
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