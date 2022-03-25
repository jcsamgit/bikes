
import React, { useEffect, useState } from "react";
// import Product from "./Product";
import '../CSS/main.css'
import { productsDetail } from "./mercaderia";
import {useStateValue} from "../StateProvider"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(){
    // const [{basket}, dispatch]= useStateValue();
    
    const {id}= useParams()
    
  
    const [itemss,setItemss]= useState([])
    // const {products}= useContext(productContext)
    useEffect(()=>{
        var promesa= new Promise((resolve,reject)=>{
            
            setTimeout(()=>{
                resolve(productsDetail)
            },0)
        })
        promesa.then((respuesta)=>{
            const encontrado=respuesta.find(item=> item.id===id)
            setItemss(encontrado)
            console.log("respuesta", respuesta)
        
        }).catch((error)=>{
            console.log(error)
        })
  
    },[])
    

    return(
        <>
        <div className="catalogo">
            <h1>Detalles</h1>


        <ItemDetail {... itemss} />
        
        </div>
        </>
    )
}