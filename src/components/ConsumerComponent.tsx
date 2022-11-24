import React from 'react'
import { useNewContext } from '../hooks/ContextProvider'

export const ConsumerComponent = () => {
    const { val, toggleVal } = useNewContext()
    return (
        <>
            {val ? <h1>True</h1> : <h1>False</h1>}
            <button onClick={() => toggleVal()}>Toggle</button>
        </>
    )
}