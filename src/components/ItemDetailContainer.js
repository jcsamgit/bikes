
import ItemDetail from "./ItemDetail";
import { productsDetail } from "./mercaderia";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";



export default function ItemDetailContainer(){
    const {id}= useParams()
  
  const [items,setItems]= useState([])
  useEffect(()=>{
      var promesa= new Promise((resolve,reject)=>{
          
          setTimeout(()=>{
              resolve(productsDetail)
          },500)
      })
      promesa.then((respuesta)=>{
          const encontrado=respuesta.find(item=> item.id===id)
          setItems(encontrado)
      
      }).catch((error)=>{
          console.log(error)
      })

  },[])

    return(
        <>

        <div className="catalogo">


          <ItemDetail items={items}  />
        </div>

        </>
    )
}