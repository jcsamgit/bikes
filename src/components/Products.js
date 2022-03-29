
import React, {useEffect, useState} from "react";
import Product from "./Product";
import '../CSS/main.css'
import { productsDetail } from "./mercaderia";
import { useParams } from "react-router-dom";


export default function Products(){

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
            <div className="contenedorTarjetas"> 
                {
                    items.map(product=> (
                        
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>


        </div>
      </section>
        </>
    )
}