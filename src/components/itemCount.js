import React, {useEffect,useState} from "react";
import { actionTypes } from "../reducer";
import ButtonCantidad from "./buttonCant";
import { useStateValue } from "../context/stateProvider";


const estiloBoton= {fontSize:"16px",margin:"10px 0px", display:"inline"}

export default function ItemCantidad({stock,initial,onAdd, productDetail:{id, title,precio,categoryId, pictureUrl,descripcion}}){
    const [cantidad, setCantidad]= useState(initial);

    
    const [{carrito}, dispatch]= useStateValue();

    const onAddd= () =>{
        if (cantidad<stock){
            setCantidad(cantidad+1)
        }      
    }
    const noNegativo= () =>{
        if(cantidad<0){
            setCantidad(cantidad=0)
        }
        
        if (cantidad>0){
            setCantidad(cantidad-1)
        }      
    }
    const addToCarrito=()=>{
        dispatch({
            type: actionTypes.ADD_TO_CARRITO,
            item: {
                id,
                title,
                precio,
                // stock,
                categoryId,
                pictureUrl,
                descripcion,

                
            }
        })
    }

    return(

        <>
        <h3>Cantidad:  </h3>
        <ButtonCantidad text="+" onAddd={onAddd} > </ButtonCantidad>
        <span style={{width:"40px", display:"inline-block", textAlign:"center"}}>
            {cantidad}
        </span>
        <ButtonCantidad text=" - " onAddd={noNegativo} > </ButtonCantidad>

        <br/>

        <button style={estiloBoton} onClick={addToCarrito}>Añadir al carrito
        </button>
        {/* <button style={estiloBoton} onClick={()=>{
            onAdd(cantidad)}}>Añadir al carrito
        </button> */}


        </>
    )


}