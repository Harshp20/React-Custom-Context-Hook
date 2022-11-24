import React, { useContext, createContext, useState } from 'react'

interface NewContextProps {
    val: boolean
    toggleVal: () => void
}

type ChildrenProps = { children: React.ReactNode }

export const NewContext = createContext({} as NewContextProps)

export const useNewContext = () => {
    return useContext(NewContext)
}

export const ContextProvider = ({ children }: ChildrenProps) => {
    const [val, setVal] = useState(true)

    const toggleVal = () => {
        setVal((prevVal => !prevVal))
    }

    return (
        <NewContext.Provider value={{ val, toggleVal }}>
            {children}
        </NewContext.Provider>
    )
}