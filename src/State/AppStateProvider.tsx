import React, { useState, useContext } from 'react'

interface ContextType {
    state: number;
    Increment: () => void
    Decrement: () => void
}

export const AppContext = React.createContext<ContextType>(null!);

export default function AppStateProvider({ children }: any) {
    const [counter, setCounter] = useState(0);

    const Increment = () => setCounter(counter + 1);
    const Decrement = () => counter != 0 ? setCounter(counter - 1) : setCounter(0);

    var contextObj = {
        state: counter,
        Increment,
        Decrement
    };

    return (
        <AppContext.Provider value={{ ...contextObj }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppState() {
    const context = useContext(AppContext);

    return context;
}
