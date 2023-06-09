

import React from "react";
import { useStateValue } from "../StateProvider";
import {actionTypes} from "../reducer"


export default function CheckoutCard({product:{id,title, precio, pictureUrl}}){
    const [{cart},dispatch]= useStateValue()

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
                <button className="eliminar" onClick={removeItem}> <i class="fas fa-trash"></i>   </button>

            </div>


        </>
    )
}