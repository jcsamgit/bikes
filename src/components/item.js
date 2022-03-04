// hijo de itemList >> itemListContainer >> app
// padre de itemDetailContainer

import { Link } from "react-router-dom";


const initial=1
export default function Item(props){
    return(
        <ul className="tarjetas">
            <li> <img src= {props.pictureUrl} width="298px" height="180px"/></li>
            <li>{props.title}</li>
            <li>Precio: ${props.precio}</li>
            <Link to= {`/item/${props.id}`} style={{display:""}} >
            <b>Ver detalles...</b>
            </Link> 

        </ul>
    )
}



















