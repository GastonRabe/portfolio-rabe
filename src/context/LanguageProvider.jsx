import React, { useState } from 'react'
import { LanguageContext } from "./LanguageContext.jsx"

export const LanguageProvider = ({children}) => {

    // const language = "english";

    const [language, setLanguage] = useState("english");


  return (
    <LanguageContext.Provider value={{language, setLanguage}}>

        {children}

    </LanguageContext.Provider>
  )
}
