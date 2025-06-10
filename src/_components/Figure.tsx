import { useState } from "react";
import { Modal } from "@/_components/Modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
      <figure onClick={handleOpen} tabIndex={0} role="button" aria-label={"Expand image"}>
        <img src={figureSrc} />
        <figcaption>{caption}</figcaption>
      </figure>
      {open && (
        <Modal title={caption} isOpen={open} onClose={handleClose}>
          <div className="papyrus">
            <TransformWrapper>
              <TransformComponent>
                <img src={fullSrc} alt={`Fullscreen view of ${caption}`} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </Modal>
      )}
    </>
  );
}
