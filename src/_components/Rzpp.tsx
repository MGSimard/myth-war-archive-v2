import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Plus, Minus, RotateCcw } from "lucide-react";

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
      <button onClick={() => zoomIn()} aria-label="Zoom in">
        <Plus aria-hidden="true" strokeWidth={4} />
      </button>
      <button onClick={() => zoomOut()} aria-label="Zoom out">
        <Minus aria-hidden="true" strokeWidth={4} />
      </button>
      <button onClick={() => resetTransform()} aria-label="Reset zoom">
        <RotateCcw aria-hidden="true" strokeWidth={4} />
      </button>
    </div>
  );
}
