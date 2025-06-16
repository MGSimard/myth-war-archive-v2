import { Fragment, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useSidenav } from "@/_components/sidenav/SidenavProvider";
import { navLinks } from "@/_components/sidenav/nav-links";
import { SidenavTrigger } from "./SidenavTrigger";
import { useIsMobile } from "@/_hooks/useIsMobile";

export function Sidenav() {
  const { isOpen, setIsOpen } = useSidenav();
  const isMobile = useIsMobile();
  const sidenavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobile, setIsOpen]);

  // Make the main content inert when sidenav is open on mobile
  useEffect(() => {
    const sidenavInset = document.getElementById("sidenav-inset");
    if (!sidenavInset) return;

    if (isOpen && isMobile) {
      sidenavInset.setAttribute("inert", "");
    } else {
      sidenavInset.removeAttribute("inert");
    }

    // Cleanup on unmount
    return () => {
      sidenavInset.removeAttribute("inert");
    };
  }, [isOpen, isMobile]);

  return (
    <nav id="sidenav" inert={!isOpen} ref={sidenavRef}>
      <div id="sidenav-inner">
        <div id="sidenav-header">
          <div id="snh-left">
            <span className="heading">Myth War Archive</span>
          </div>
          <SidenavTrigger />
        </div>
        <div id="sidenav-content">
          {navLinks.map((group) => (
            <section key={group.label}>
              <h2>{group.label}</h2>
              <ul key={group.label}>
                {group.items.map((item) =>
                  item.isOutside ? (
                    <li key={item.title}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item.title}>
                      <Link to={item.url} onClick={() => isMobile && setIsOpen(false)}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </nav>
  );
}
