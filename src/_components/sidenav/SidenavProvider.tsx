import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useIsMobile } from "@/_hooks/useIsMobile";

interface SidenavTypes {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SidenavContext = createContext<SidenavTypes | undefined>(undefined);

export function SidenavContextProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  return <SidenavContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidenavContext.Provider>;
}

export function useSidenav() {
  const context = useContext(SidenavContext);
  if (!context) {
    throw new Error("SidenavContext must be utilized within the SidenavContext Provider.");
  }
  return context;
}
