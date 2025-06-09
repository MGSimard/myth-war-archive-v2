import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { useSidenav } from "@/_components/sidenav/SidenavProvider";
import { navLinks } from "@/_components/sidenav/nav-links";
import { SidenavTrigger } from "./SidenavTrigger";

export function Sidenav() {
  const { isOpen, setIsOpen } = useSidenav();

  return (
    <nav id="sidenav" inert={!isOpen}>
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
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link to={item.url} onClick={() => setIsOpen(false)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </nav>
  );
}
