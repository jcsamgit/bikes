// import React, { useState } from 'react'
// import '../CSS/contacto.css'
// import { v4 as uuidv4 } from 'uuid'

// export default function OrdenDeCompra() {
//     const [nombre, setNombre]=useState("")
//     const [apellido, setApellido]=useState("")
//     const [telefono, setTelefono]=useState("")
//     const [email, setEmail]=useState("")

//     const handleNombre=(e)=>{
//         const target=e.target
//         const value= target.value
//         setNombre(value)
//     }
//     const handleApellido=(e)=>{
//         const target=e.target
//         const value= target.value
//         setApellido(value)
//     }
//     const handleTelefono=(e)=>{
//         const target=e.target
//         const value= target.value
//         setTelefono(value)
//     }
//     const handleEmail=(e)=>{
//         const target=e.target
//         const value= target.value
//         setEmail(value)
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         alert("Hemos enviado las intrucciones de pago por email \nEn caso de no encontrarlo no olvide revisar la seccion de spam")
//     }
//     console.log("nombre:", nombre)
//     console.log("apellido:", apellido)
//     console.log("telefono:", telefono)
//     console.log("email:", email)
    
//   return (
//     <div>
//          {/* el archivo css para esta pagina es contacto.css */}
//          <div className='notiContainer'>
//         <h3 className='noti'>La orden de compra se genero exitosamente con el id: <span>{uuidv4()}</span>  </h3>
//         <h4>Por favor complete los siguientes datos, en su email recibira las instrucciones de pago</h4>
//          </div>
//         <form onSubmit={handleSubmit} className="form">
//             <label> Nombre: <br/>
//                 <input required
//                 name='nombre'
//                 type="text"
//                 value={nombre}
//                 onChange={handleNombre}
//                 ></input> <br/>
//             </label>
//             <label> Apellido: <br/>
//                 <input required
//                 name='apellido'
//                 type="text"
//                 value={apellido}
//                 onChange={handleApellido}
//                 ></input> <br/>
//             </label>
//             <label> Telefono: <br/>
//                 <input required
//                 name='telefono'
//                 type="number"
//                 value={telefono}
//                 onChange={handleTelefono}
//                 ></input> <br/>
//             </label>
//             <label> Email: <br/>
//                 <input required
//                 name='email'
//                 type="email"
//                 value={email}
//                 onChange={handleEmail}
//                 ></input> <br/>
//             </label>

            
//             <input className='submit' type="submit" value="Enviar" />
//         </form>

//     </div>
//   )
// }

