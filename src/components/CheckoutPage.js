
import React from "react";
import CheckoutCard from "./CheckoutCard";
import '../CSS/carrito.css'
import Products from "./Products";
// import {useStateValue} from 
// import CheckoutCard from 
// import Total from
import { productsDetail } from "./mercaderia";
import Total from "./Total";

const CheckoutPage = ()=>{
    // const [{basket}, dispatch]= useStateValue()


    // function FormRow(){
    //     return(
    //         <>
    //             {productsDetail.map((product)=>(
    //                 <div> 
    //                     <CheckoutCard key={product.id} product={product} />
    //                 </div>
    //             ))}
    //         </>
    //     )
    // }
    return(
        <>
            <h1 className="carrito">Carrito</h1>
            <Total/>
            
            <hr></hr>

            <div className="contenedorCarrito">
                {/* <FormRow/> */}
                {productsDetail.map((product)=>(
                    <div className="tarjetasCarrito"> 
                        <CheckoutCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default CheckoutPage;