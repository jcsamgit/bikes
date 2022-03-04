import React, {useEffect,useState} from "react";
import ButtonCantidad from "./buttonCant";

const estiloBoton= {fontSize:"16px",margin:"10px 0px", display:"inline"}

export default function ItemCantidad({stock,initial,onAdd}){
    const [cantidad, setCantidad]= useState(initial);

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

    return(

        <>
        <h3>Cantidad:  </h3>
        <ButtonCantidad text="+" onAddd={onAddd} > </ButtonCantidad>
        <span style={{width:"40px", display:"inline-block", textAlign:"center"}}>
            {cantidad}
        </span>
        <ButtonCantidad text=" - " onAddd={noNegativo} > </ButtonCantidad>

        <br/>

        <button style={estiloBoton} onClick={()=>{
            onAdd(cantidad)}}>Añadir al carrito
        </button>


        </>
    )


}