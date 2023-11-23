
import React, {useEffect, useState} from "react";
import Product from "./Product";
import '../CSS/main.css'
import { productsDetail } from "./mercaderia";
import { useParams } from "react-router-dom";


export default function Products(){

    const [items,setItems]= useState([])
    let { categoryId } = useParams();
  
    useEffect(()=>{
        var promesa= new Promise((resolve,reject)=>{
            
            setTimeout(()=>{
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


    //   buscador
    const[busqueda, setbusqueda]= useState("") //buscador

    const handleChange=e=> {
        setbusqueda(e.target.value)
        filtrar(e.target.value)
    }
    const filtrar=(terminoBusqueda)=>{
        var resultadoBusqueda= productsDetail.filter((elemento)=>{
            if(elemento.title.toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento
            }
        })
        setItems(resultadoBusqueda)
    }
    // fin buscador

    return(
        <>
        <h2 className="tituloMain">Catalogo</h2>
        <section>
            {/* buscador */}
        <div className="searchContainer">
            <input type="text" id="buscador" 
            placeholder='Buscar por nombre' 
            value={busqueda} onChange={handleChange} >
            </input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div style={{textAlign:"center"}}>
            {items?.length===0?
            <h2>No hay resultado</h2>: null}
        </div>

        <div className="catalogo" id="catalogo"> 
            <div className="contenedorTarjetas"> 
                {
                    items.map(product=> (
                        
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
        {/* fin del buscador */}

        {/* <h3 className="modelos">Productos de calidad:</h3>
        <div className="catalogo"> 
            <div className="contenedorTarjetas"> 
                {
                    items.map(product=> (
                        
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>


        </div> */}
      </section>
        </>
    )
}