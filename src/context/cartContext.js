
import {createContext} from "react"
import { useContext,useState } from "react";
import { productsDetail } from "../components/mercaderia";



export const cartContext= createContext({})

export const CartProvider= ({children,count}) =>{ 
    const [cart,setCart]=useState([]); 
    // const[cantidadEditada,setCantidadEditada]=useState(cantidadSeleccionada)

    const isInCart = (id) => {
        console.log("cart.some",cart.some((item)=> item.id===id))
        return cart.some((item) => item.id === id);
    };

    // const addItem=(item,count)=>{
    //     if(isInCart(item.id)){
    //         const cartEditado = cart.map(product => product.id === item.id ? item : product);
    //         // item.push({prueba:13})
    //         setCart(cartEditado)
    //         // setCantidadSeleccionada(cantidadSeleccionada)
    //         console.log("cartEditado si repite", cartEditado)
    //       } else {
    //         setCart([...cart, item]);
    //         console.log("si no repite",[...cart,item])
    //       }
    // }
    const addItem=(item,count)=>{
        if(isInCart(item.id)){
            console.log("item inicial",item)
            const cartDraft = [...cart];
            const cartEditado = cartDraft.find(product => product.id === item.id); 
            item.count = item.count;   
            console.log("item..." , item)
            console.log("cartEditado.count",cartEditado.count)
            console.log("item.count",item.count)
            console.log("cartdraft...", cartDraft)
            console.log("cartEditado...", cartEditado)
            setCart(cartDraft); 
          } else {
            console.log("item inicial falso", item)
            setCart([...cart, item]);
            // setCart([...cart].push(item));
            // setCart({...cart.push(item)});
          }

    }


    const removeItem=(itemId)=>{
        const cartDraft=[...cart]
        const cleanCart= cartDraft.filter(item=>item.id!=productsDetail.id)
        setCart(cleanCart)
    }

    return(

        <cartContext.Provider 
            value={{cart, addItem, removeItem,count}}>
            {children}
        </cartContext.Provider>
    )
}









