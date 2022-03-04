const estilo= {fontSize:"20px", padding:"5px", width:"30px"}
export default function ButtonCantidad(props) {
    return(
        <button style={estilo} onClick={() => props.onAddd()} > {props.text} </button>
    );
};