import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

//3.crear une hook para usar el contexto en la autenticación

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider')
    }

    return context
}