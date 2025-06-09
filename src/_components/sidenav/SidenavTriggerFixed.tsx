import { SidenavTrigger } from "@/_components/sidenav/SidenavTrigger";
import { useSidenav } from "@/_components/sidenav/SidenavProvider";

export function FixedTrigger() {
  const { isOpen } = useSidenav();

  if (isOpen) return null;

  return <SidenavTrigger fixed />;
}
