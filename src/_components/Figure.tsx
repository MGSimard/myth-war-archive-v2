import { useState } from "react";
import { Modal } from "@/_components/Modal";

export function Figure({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <figure onClick={handleOpen}>
        {children}
        <figcaption>Caption</figcaption>
      </figure>
      {open && (
        <Modal title="Modal Dialog" isOpen={open} onClose={handleClose}>
          <p>Modal Content</p>
        </Modal>
      )}
    </>
  );
}
