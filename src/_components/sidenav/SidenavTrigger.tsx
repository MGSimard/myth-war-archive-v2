import { useSidenav } from "@/_components/sidenav/SidenavProvider";

export function SidenavTrigger({ fixed }: { fixed?: boolean }) {
  const { isOpen, setIsOpen } = useSidenav();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleToggle} className={fixed ? "trigger-fixed" : undefined}>
      {isOpen ? "Close" : "Open"}
    </button>
  );
}
