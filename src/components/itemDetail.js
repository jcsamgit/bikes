import { Link } from "react-router-dom"
import { useParams } from "react-router"
import ItemCantidad from "./itemCount"
import { productsDetail } from "./mercaderia"
import { useState, useEffect, useContext } from "react"
import {cartContext} from "../context/cartContext"
import Item from "./item"

const initial=1
const estiloBoton= {fontSize:"16px",margin:"10px", display:"inline"}
export default function ItemDetail(props){
    const [cantidadSeleccionada,setCantidadSeleccionada]= useState(0)

    const {cart, addItem}= useContext(cartContext)

    const onAdd= (count,item)=>{
        setCantidadSeleccionada(count)

        addItem(...cart,{titulo: props.title, imagen:props.pictureUrl, precio:props.precio,count})
        // addItem({...cart},{titulo: props.title,precio:props.precio,count})
        // addItem([item,count])

        console.log("Final!",cart)
        console.log("sera string?",count)

    }      

    return(
        

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
                    <li>
                        {cantidadSeleccionada > 0?(
                        <>
                        <ItemCantidad stock={props.stock} initial={initial} onAdd={onAdd} style={{display:"inline-block"}} />
                        <button style={estiloBoton}> 
                        <Link to="/cart" style={{textDecoration:"none",color:"black"}}>Terminar compra</Link>
                        </button>
                        </>):

                        (<ItemCantidad stock={props.stock} initial={initial} onAdd={onAdd} />)}
                    </li>
                    <li>Descripcion: {props.descripcion}</li>
                </ul>
            </div>
        </div>
    )

}