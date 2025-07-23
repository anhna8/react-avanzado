import { createContext, useState, useEffect } from 'react'

//1. crear el contexto
const AuthContext = createContext()

//2.crear el provider del contexto

function AuthProvider({ children }) {
//logica de autenticación
    const [isAuth, setIsAuth] = useState(false) //estouy autenticado??
    const [userPayload, setUserPayload] = useState(null) //información del usuario autenticado

    const login = (data) => {
        localStorage.setItem('userData', JSON.stringify(data)) //almacenar el token en localStorage
        setUserPayload(data) //actualizar el estado con la información del usuario
        setIsAuth(true) //actualizar el estado de autenticación
    }

    const logout = () => {
        localStorage.removeItem('userData') //eliminar el token del localStorage
        setUserPayload(null) //limpiar la información del usuario
        setIsAuth(false)
    }

    useEffect(() => {
        //al cargar la aplicacion, verificar si hay datos en el localstorage
        const userData = localStorage.getItem('userData')
        if (userData) {
            setUserPayload(JSON.parse(userData)) //si hay datos, actualizar el estado
            setIsAuth(true) //y marcar como autenticado
        }
    }, [])

    //Aqui voy a colocar los datos que voy a compartir de forma global
    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }