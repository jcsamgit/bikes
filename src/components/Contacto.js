import React, { useState } from 'react'
import '../CSS/contacto.css'
import { v4 as uuidv4 } from 'uuid'

export default function Contacto() {
    const [nombre, setNombre]=useState("")
    const [apellido, setApellido]=useState("")
    const [telefono, setTelefono]=useState("")
    const [email, setEmail]=useState("")
    const [textArea, setTextArea]=useState("")
    // console.log("idd",uuidv4())

    const handleNombre=(e)=>{
        const target=e.target
        // const name= target.name
        const value= target.value
        setNombre(value)
    }
    const handleApellido=(e)=>{
        const target=e.target
        // const name= target.name
        const value= target.value
        setApellido(value)
    }
    const handleTelefono=(e)=>{
        const target=e.target
        // const name= target.name
        const value= target.value
        setTelefono(value)
    }
    const handleEmail=(e)=>{
        const target=e.target
        // const name= target.name
        const value= target.value
        setEmail(value)
    }
    const handleTextArea=(e)=>{
        const target=e.target
        // const name= target.name
        const value= target.value
        setTextArea(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Su consulta fue enviada exitosamente")
    }
    console.log("nombre:", nombre)
    console.log("apellido:", apellido)
    console.log("telefono:", telefono)
    console.log("email:", email)
    
  return (
    <div>
        <h2 className='subtitulo'>Contactenos</h2>
        <form onSubmit={handleSubmit} className="form">
            <label> Nombre: <br/>
                <input required
                name='nombre'
                type="text"
                value={nombre}
                onChange={handleNombre}
                ></input> <br/>
            </label>
            <label> Apellido: <br/>
                <input required
                name='apellido'
                type="text"
                value={apellido}
                onChange={handleApellido}
                ></input> <br/>
            </label>
            <label> Telefono: <br/>
                <input required
                name='telefono'
                type="number"
                value={telefono}
                onChange={handleTelefono}
                ></input> <br/>
            </label>
            <label> Email: <br/>
                <input required
                name='email'
                type="email"
                value={email}
                onChange={handleEmail}
                ></input> <br/>
            </label>
            <label>
                Escriba su consulta: <br/>
                <textarea value={textArea} onChange={handleTextArea} rows="10" cols="40" required/>
            </label>
            
            <input className='submit' type="submit" value="Enviar" />
        </form>

    </div>
  )
}

