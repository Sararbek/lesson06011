import { createContext, useContext, useState } from "react";

export const Context = createContext(null)

export const ContextProvider = ({children}) => {

    const [headerHeight, setHeaderHeight] = useState(null)

    const value = {
        headerHeight, 
        setHeaderHeight
    }

    return <Context.Provider value={value} >{children}</Context.Provider>
}

export const useContextValue = () => useContext(Context)