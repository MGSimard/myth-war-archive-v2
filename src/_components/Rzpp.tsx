import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch";
import { Minus, Plus, RotateCcw } from "lucide-react";

export function Rzpp({ children }: { children: React.ReactNode }) {
  return (
    <TransformWrapper>
      <RzppControls />
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
}

function RzppControls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="rzpp-controls">
      <button type="button" onClick={() => zoomIn()} aria-label="Zoom in">
        <Plus aria-hidden="true" strokeWidth={4} />
      </button>
      <button type="button" onClick={() => zoomOut()} aria-label="Zoom out">
        <Minus aria-hidden="true" strokeWidth={4} />
      </button>
      <button type="button" onClick={() => resetTransform()} aria-label="Reset zoom">
        <RotateCcw aria-hidden="true" strokeWidth={4} />
      </button>
    </div>
  );
}
