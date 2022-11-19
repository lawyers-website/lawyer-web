import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";

export const language = createContext<{ lang: string; setLang: Dispatch<SetStateAction<string>>  }| null>(null);

export default function LangContext({ children }:{children:React.ReactNode}) {
  const [lang,setLang] = useState("en");
  return (
    <language.Provider value={{lang, setLang}}>{children}</language.Provider>
  );
}
