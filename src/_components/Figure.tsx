import { useState } from "react";
import { Modal } from "@/_components/Modal";

interface FigureProps {
  figureSrc: string;
  fullSrc: string;
  caption: string;
}
export function Figure({ caption, figureSrc, fullSrc }: FigureProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <figure onClick={handleOpen}>
        <img src={figureSrc} />
        <figcaption>{caption}</figcaption>
      </figure>
      {open && (
        <Modal title={caption} isOpen={open} onClose={handleClose}>
          <div className="papyrus">Modal content</div>
        </Modal>
      )}
    </>
  );
}
