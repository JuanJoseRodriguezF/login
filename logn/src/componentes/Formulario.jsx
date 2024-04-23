import './Formulario.css'
import { useState } from 'react'

export function Formulario({setUser}){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if(nombre == "" || contraseña == ""){
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }

    return(
        <section>
            <h1>Login</h1>
            <form className='formulario' onSubmit={handleSubmit}>
                <input type="text" value={nombre} onChange={event => setNombre(event.target.value)}/>
                <input type="password" value={contraseña} onChange={event => setContraseña(event.target.value)}/>
                <button>Iniciar Sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}