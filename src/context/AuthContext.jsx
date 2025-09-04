import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(true);

    return <AuthContext value={{user, setUser}}>
        {children}
    </AuthContext>
}