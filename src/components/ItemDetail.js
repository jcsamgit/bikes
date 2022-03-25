
import React from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";
import CartWidget from "./CartWidget";
import {useStateValue} from "../StateProvider"


export default function ItemDetail(props){
    // const [{basket}, dispatch]= useStateValue();
    
    // const addToBasket= ()=> {
    //     dispatch({
    //         type: actionTypes.ADD_TO_BASKET,
    //         item: {
    //             id,
    //             title,
    //             stock,
    //             precio,
    //             pictureUrl,
    //             descripcion,
    //         }
    //     })
    // }

    return( 
        <>
            <div style={{display:"flex",margin:"30px"}}>

                <div className="detalls"> 
                        <img src={props.pictureUrl} width="600px"/>
                </div>
                <div style={{margin:"40px 100px", lineHeight:"1.7"}}>

                    <ul >
                        <h2>{props.title}</h2>
                        <li>ID: {props.id}</li>
                        <li>Stock: {props.stock}</li>
                        <li>$ {props.precio}</li>
                        <li>Descripcion: {props.descripcion}</li>
                    </ul>
                </div>
                </div>


        {/* <ul className="tarjetas">
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

        </ul> */}
        </>
    )
}