
import React from "react";
import Product from "./Product";
import '../CSS/main.css'
import { productsDetail } from "./mercaderia";


export default function Products(){
    return(
        <>
        <h2 className="tituloMain">Visite nuestro catalogo</h2>
        <section>
        <h3 className="modelos">Modelos del año:</h3>
        <div className="catalogo"> 
            <div className="contenedorTarjetas"> 
                {
                    productsDetail.map(product=> (
                        
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>


        </div>
      </section>
        </>
    )
}