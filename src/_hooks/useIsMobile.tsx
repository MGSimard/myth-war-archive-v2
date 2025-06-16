import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const setMobileState = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    mql.addEventListener("change", setMobileState);

    setMobileState(); // Safeguard if resizing during render

    return () => {
      mql.removeEventListener("change", setMobileState);
    };
  }, []);

  return isMobile;
}
