import { useSidenav } from "@/_components/sidenav/SidenavProvider";

export function SidenavTrigger() {
  const { isOpen, setIsOpen } = useSidenav();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleToggle}>
      {isOpen ? "Close" : "Open"}
    </button>
  );
}
