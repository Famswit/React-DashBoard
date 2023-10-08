import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)

    const toggleUser = () => setIsLogged(prev => !prev)

    const value = {
        LoggedIn: isLogged,
        toggleUser
    }

    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const values = useContext(UserContext)
    return values
}
