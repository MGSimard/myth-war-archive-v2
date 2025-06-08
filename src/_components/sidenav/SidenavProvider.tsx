import { createContext, useState, useContext, useEffect, type Dispatch, type SetStateAction } from "react";

interface SidenavTypes {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SidenavContext = createContext<SidenavTypes | undefined>(undefined);

export function SidenavContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return <SidenavContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidenavContext.Provider>;
}

export function useSidenav() {
  const context = useContext(SidenavContext);
  if (!context) {
    throw new Error("SidenavContext must be utilized within the SidenavContext Provider.");
  }
  return context;
}
