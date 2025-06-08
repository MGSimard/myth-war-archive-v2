import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { useSidenav } from "@/_components/sidenav/SidenavProvider";
import { navLinks } from "@/_components/sidenav/nav-links";
import { SidenavTrigger } from "./SidenavTrigger";

export function Sidenav() {
  const { isOpen } = useSidenav();

  return (
    <nav id="sidenav" inert={!isOpen}>
      <div id="sidenav-inner">
        <div id="sidenav-header">
          <div id="snh-left">
            <span>Myth War Archive</span>
          </div>
          <SidenavTrigger />
        </div>
        <div id="sidenav-content">
          {navLinks.map((group) => (
            <Fragment key={group.label}>
              <label>{group.label}</label>
              <ul key={group.label}>
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
        <div id="sidenav-footer">Nav Footer</div>
      </div>
    </nav>
  );
}
