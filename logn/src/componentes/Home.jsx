export function Home({user, setUser}){
    const handleLogout = () => {
        setUser([])
    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={handleLogout}>cerrar sesión</button>
        </div>
    )
}