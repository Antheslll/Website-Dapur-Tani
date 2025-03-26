import { createContext, useContext, useState } from "react";
const ButtonContext = createContext();

export function ButtonProvider({ children }) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <ButtonContext.Provider value={{ activeButton, setActiveButton }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButtonContext() {
  return useContext(ButtonContext);
}
