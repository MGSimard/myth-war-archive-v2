import { useState } from "react";
import { Modal } from "@/_components/Modal";
import { Rzpp } from "@/_components/RZPP";

interface FigureProps {
  figureSrc: string;
  fullSrc: string;
  caption: string;
}
export function Figure({ caption, figureSrc, fullSrc }: FigureProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
            {isLoading && <div className="soulstone-loader" />}
            <Rzpp>
              <img
                src={fullSrc}
                draggable={false}
                alt={`Fullscreen view of ${caption}`}
                onLoad={() => setIsLoading(false)}
              />
            </Rzpp>
          </div>
        </Modal>
      )}
    </>
  );
}
