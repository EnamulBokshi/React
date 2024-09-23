import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState ({children}){
    const [theme,setTheme] = useState('dark')
    return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>
}
export default GlobalState;