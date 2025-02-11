import { createContext, useContext, useReducer, useState } from "react";

export const Context = createContext(null)

export const ContextProvider = ({children, initialValue, reducer}) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    return <Context.Provider value={{state, dispatch}} >{children}</Context.Provider>
}

export const useContextValue = () => useContext(Context)