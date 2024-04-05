'use client'
import { createContext, useContext, useState, useMemo } from 'react'

const defaultContext = {
    theme: 'dark'
}
const BaseContext = createContext(null)

export const useBaseContext = () => (useContext(BaseContext))

export const Providers = ({ children }) => {
    const [state, setState] = useState(defaultContext)
    const contextValue = useMemo(() => ({ state, setState }), [state, setState])
    return (
        <BaseContext.Provider value={contextValue}>{children}</BaseContext.Provider>
    )
}