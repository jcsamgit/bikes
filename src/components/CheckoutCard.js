

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
            <img src= {pictureUrl} width="198px" height="109px"/>
            <p>{title}</p>
            <p >precio: ${precio}</p>
            <div className="tachoContent">
                <button className="eliminar" onClick={removeItem}> <a href="#"> <i class="fas fa-trash"></i> </a>   </button>

            </div>


        </>
    )
}