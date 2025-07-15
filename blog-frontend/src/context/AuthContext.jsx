import { creatContext } from 'react'

//1. crear el contexto
const AuthContext = createContext()

//2.crear el provider del contexto

function AuthProvider({ children }) {
    //Aqui voy a colocar los datos que voy a compartir de forma global
    const data = {

    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }