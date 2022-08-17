
import React from "react";
import CheckoutCard from "./CheckoutCard";
import '../CSS/carrito.css'
import Total from "./Total";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";


const CheckoutPage = ()=>{

    const [{cart}, dispatch] = useStateValue()

    return(
        <>
            {cart.length === 0 && (
                <div>
                <br/>
                <h1 className="carrito">Carrito Vacio</h1>
                <h2 className="carrito"> II </h2>
                <h2 className="carrito"> V </h2>
                <Link to="/bikes" > <h2  className="carrito">Ver productos</h2></Link>
                </div>
            )}

            {cart.length > 0 && (
                <>
                <h1 className="carrito">Carrito</h1>
                <Total/>
                
                <hr></hr>

                <div className="contenedorCarrito">

                    {cart?.map((item)=>(
                        <div className="tarjetasCarrito"> 
                            <CheckoutCard key={item.id} product={item} />
                        </div>
                    ))}
                </div>
                </>
            )}
        </>
    )
}
export default CheckoutPage;