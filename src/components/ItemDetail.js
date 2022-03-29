

import React from "react"
import {useStateValue} from "../StateProvider"
import { actionTypes } from "../reducer";

export default function ItemDetail ({items:{id, title, stock, precio, pictureUrl, descripcion}}){
    // const [cantidadSeleccionada,setCantidadSeleccionada]= useState(0)
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
        

        <div style={{display:"flex", flexWrap:"wrap",margin:"30px"}}>

            <div>
                <img src={pictureUrl} width="550px"/>
            </div>
            <div style={{margin:"40px 100px", lineHeight:"1.7"}}>

                <ul >
                    <h2>{title}</h2>
                    {/* <li>ID: {props.id}</li> */}
                    <li>Stock: {stock}</li>
                    <li>$ {precio}</li>
                    <li>Descripcion: {descripcion}</li>

                    <li>
                        <button className='finCompra' onClick={addToBasket}>Añadir al carrito</button>
                    </li>

                </ul>
            </div>
        </div>
    )

}