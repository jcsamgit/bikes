// hijo de item >> itemList >> itemListContainer >> app

import ItemDetail from "./itemDetail";
import { useContext, useEffect, useState } from "react";
import { productsDetail } from "./mercaderia";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CartProvider } from "../context/cartContext";
import productContext from "../context/productContext";



export default function ItemDetailContainer(){
    const {id}= useParams()
  
  const [itemss,setItemss]= useState([])
//   const {products}= useContext(productContext)
  useEffect(()=>{
      var promesa= new Promise((resolve,reject)=>{
          
          setTimeout(()=>{
              resolve(productsDetail)
            //   resolve(products)
          },0)
      })
      promesa.then((respuesta)=>{
          const encontrado=respuesta.find(item=> item.id===id)
          setItemss(encontrado)
      
      }).catch((error)=>{
          console.log(error)
      })

  },[])

    return(
        // <CartProvider>

        <>

        <div className="catalogo">


          <ItemDetail {... itemss} />
        </div>

        </>
        // {/* </CartProvider> */}
    )
}