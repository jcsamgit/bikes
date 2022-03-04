// hijo de itemListContainer >>app
import { Link } from "react-router-dom";
import Item from "./item";
import "./itemList.css"


const initial=1
export default function ItemList({items}){
 
    return(
        <div className="contenedorTarjetas">
            {items.map((item)=> (
                <div>
            <Item  {...item}/>

            </div>
            
            ))}


        </div>
    )

}