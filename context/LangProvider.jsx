import { createContext, useState } from "react";


const LangContext = createContext('ru');

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('ru');

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            { children }
        </LangContext.Provider>
    )
}

export default LangContext;