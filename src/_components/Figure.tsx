import { useState } from "react";
import { Modal } from "@/_components/Modal";

interface FigureProps {
  figureSrc: string;
  fullSrc: string;
  caption: string;

  children: React.ReactNode;
}
export function Figure({ caption, figureSrc, fullSrc, children }: FigureProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <figure onClick={handleOpen} tabIndex={0} role="button" aria-label={"Expand image"}>
        <img src={figureSrc} />
        <figcaption>{caption}</figcaption>
      </figure>
      {open && (
        <Modal title={caption} isOpen={open} onClose={handleClose}>
          <div className="papyrus">{children}</div>
        </Modal>
      )}
    </>
  );
}
