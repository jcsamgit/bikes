


export default function FormBuyer(props){

    return(
        <div className="form">
            <form >
            <label>
                Nombre:
                <input type="text" />
            </label>
            {/* <br/> */}
            <label>
                Email: 
                <input type="text"   />
            </label>
            {/* <br/> */}
            <label>
                Telefono: 
                <input type="number"   />
            </label>
            {/* <br/> */}
            {/* <button onClick={props.finCompras} className="finCompra">Finalizar compra</button> */}
            {/* <input className="finCompra" onClick={props.finCompras} type="submit" value="Terminar compra" /> */}
            </form>
      
        </div>
    )
}