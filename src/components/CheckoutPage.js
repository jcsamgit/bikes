
import React from "react";
import CheckoutCard from "./CheckoutCard";
import '../CSS/carrito.css'
// import Products from "./Products";
// import Total from
// import { productsDetail } from "./mercaderia";
import Total from "./Total";
import { useStateValue } from "../StateProvider";


const CheckoutPage = ()=>{

    const [{basket}, dispatch] = useStateValue()
    // const [{basket}, dispatch]= useStateValue()

    return(
        <>
            <h1 className="carrito">Carrito</h1>
            <Total/>
            
            <hr></hr>

            <div className="contenedorCarrito">
                {/* <FormRow/> */}
                {basket?.map((item)=>(
                    <div className="tarjetasCarrito"> 
                        <CheckoutCard key={item.id} product={item} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default CheckoutPage;