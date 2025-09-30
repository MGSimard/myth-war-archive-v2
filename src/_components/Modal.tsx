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
  // Manual showModal() is required for focus trapping & ::backdrop access
  useEffect(() => {
    if (!dialogRef.current || !isOpen) return;
    dialogRef.current.showModal();
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose}>
      <div className="dialog-inner">
        <img className="topleft-decor" src="/assets/decor_top-left.png" alt="" aria-hidden="true" />
        <img className="bottomright-decor" src="/assets/decor_bottom-right.png" alt="" aria-hidden="true" />
        <div className="dialog-header">
          <div className="dh-left">
            <span className="heading">{title}</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close dialog">
            <img src="/assets/x.svg" alt="" aria-hidden="true" />
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </dialog>,
    document.querySelector("#portal")!
  );
}
