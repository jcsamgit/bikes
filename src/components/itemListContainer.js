// hijo de app
import "./main.css"
import ItemList from "./itemList"
import { productsDetail } from "./mercaderia";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import productContext from "../context/productContext";


export default function ItemListContainer(){
  
  const [items,setItems]= useState([])
  // const {products}= useContext(productContext)
  let { categoryId } = useParams();

  useEffect(()=>{
      var promesa= new Promise((resolve,reject)=>{
          
          setTimeout(()=>{
              // resolve(products)
              resolve(productsDetail)
          },0)
      })
      promesa.then((items)=>{
        if (categoryId) {
            const filteredItems = items.filter(
              (item) => item.categoryId === categoryId
            );
            setItems(filteredItems);
          } else {
            setItems(items);
          }
      
      }).catch((error)=>{
          console.log(error)
      })

    },[categoryId])

    return(
        <>

        <h2 className="tituloMain">Visite nuestro catalogo</h2>
        <section>
        <h3 className="modelos">Modelos del año:</h3>
        <div className="catalogo">

          <ItemList items={items} />
        </div>
      </section>

        </>
    )
}