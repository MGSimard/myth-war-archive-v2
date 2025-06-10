import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (!isOpen) return null;

  // Manual showModal() is required for focus trapping & ::backdrop access
  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current.showModal();
  }, []);

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose}>
      <div className="dialog-header">
        <div className="dh-left">
          <span className="heading">{title}</span>
        </div>
        <button onClick={onClose} aria-label="Close dialog">
          <img src="/assets/x.svg" alt="" aria-hidden="true" />
        </button>
      </div>
      <div className="dialog-content">{children}</div>
    </dialog>,
    document.querySelector("#portal")!
  );
}
