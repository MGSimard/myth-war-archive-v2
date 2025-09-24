import { useEffect, useRef, useCallback, useState } from "react";
import html2canvas from "html2canvas";

interface WaterRippleProps {
  children: React.ReactNode;
}

export function WaterRipple({ children }: WaterRippleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Double buffering system (like ripple_buffer1 and ripple_buffer2)
  const currentBufferRef = useRef<Float32Array | null>(null);
  const previousBufferRef = useRef<Float32Array | null>(null);
  const baseTextureRef = useRef<ImageData | null>(null);

  // Wave physics parameters
  const width = useRef(0);
  const height = useRef(0);
  const bufferSize = useRef(0);

  const isInitialized = useRef(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const newWidth = Math.ceil(rect.width);
    const newHeight = Math.ceil(rect.height);

    if (newWidth !== width.current || newHeight !== height.current) {
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, []);

  // Initialize ripple system
  const initRipple = useCallback(() => {
    if (!canvasRef.current) return false;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    width.current = Math.ceil(rect.width);
    height.current = Math.ceil(rect.height);
    bufferSize.current = width.current * height.current;

    // Set canvas size
    canvas.width = width.current;
    canvas.height = height.current;

    // Initialize buffers with zeros
    currentBufferRef.current = new Float32Array(bufferSize.current);
    previousBufferRef.current = new Float32Array(bufferSize.current);

    isInitialized.current = true;
    return true;
  }, []);

  // Clear ripple buffers
  const clearRipple = useCallback(() => {
    if (!currentBufferRef.current || !previousBufferRef.current) return;

    currentBufferRef.current.fill(0);
    previousBufferRef.current.fill(0);
  }, []);

  // Drop stone (create disturbance) at position
  const dropStone = useCallback((x: number, y: number, stoneSize: number = 8, stoneWeight: number = 64) => {
    if (!currentBufferRef.current || !isInitialized.current) return;

    const size = Math.floor(stoneSize);
    const weight = stoneWeight;

    // Check bounds
    if (x + size > width.current || y + size > height.current || x - size < 0 || y - size < 0) return;

    // Create circular disturbance
    for (let posx = x - size; posx < x + size; posx++) {
      for (let posy = y - size; posy < y + size; posy++) {
        const dx = posx - x;
        const dy = posy - y;
        if (dx * dx + dy * dy < size * size) {
          const index = posy * width.current + posx;
          if (index >= 0 && index < bufferSize.current) {
            currentBufferRef.current![index] = -weight;
          }
        }
      }
    }
  }, []);

  // Wave physics simulation (equivalent to spread_ripple) - optimized
  const spreadRipple = useCallback(() => {
    if (!currentBufferRef.current || !previousBufferRef.current || !isInitialized.current) return;

    const current = currentBufferRef.current;
    const previous = previousBufferRef.current;
    const w = width.current;

    // Pre-calculate damping factor for better performance
    const dampingFactor = 0.96875; // Equivalent to >> 5 (divide by 32)

    // Wave energy spread (4-directional averaging) - optimized loop
    for (let i = w; i < bufferSize.current - w; i++) {
      // Skip edges to avoid boundary issues (left and right edges)
      if (i % w === 0 || (i + 1) % w === 0) continue;

      // Ripple energy spread: average of 4 neighbors (optimized calculation)
      const neighbors = (previous[i - 1] + previous[i + 1] + previous[i - w] + previous[i + w]) * 0.25;

      // Store new value with optimized calculation
      current[i] = (neighbors - current[i]) * dampingFactor;
    }

    // Swap buffers
    const temp = currentBufferRef.current;
    currentBufferRef.current = previousBufferRef.current;
    previousBufferRef.current = temp;
  }, []);

  // Render ripple effect (equivalent to render_ripple) - optimized
  const renderRipple = useCallback(() => {
    if (!canvasRef.current || !baseTextureRef.current || !previousBufferRef.current || !isInitialized.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const baseTexture = baseTextureRef.current;
    const waveBuffer = previousBufferRef.current;
    const w = width.current;
    const h = height.current;

    // Get image data for manipulation
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    // Apply ripple distortion with optimized loop
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const bufferIndex = y * w + x;

        // Calculate offset (like original xoff/yoff calculation)
        const xoff = waveBuffer[bufferIndex - 1] - waveBuffer[bufferIndex + 1];
        const yoff = waveBuffer[bufferIndex - w] - waveBuffer[bufferIndex + w];

        // Check bounds and apply offset
        const sourceX = x + xoff;
        const sourceY = y + yoff;

        if (sourceX >= 0 && sourceX < w && sourceY >= 0 && sourceY < h) {
          const sourceIndex = Math.round(sourceY) * w + Math.round(sourceX);
          const targetIndex = bufferIndex * 4;

          // Copy pixel data from distorted position
          const sourcePixelIndex = sourceIndex * 4;
          data[targetIndex] = baseTexture.data[sourcePixelIndex]; // R
          data[targetIndex + 1] = baseTexture.data[sourcePixelIndex + 1]; // G
          data[targetIndex + 2] = baseTexture.data[sourcePixelIndex + 2]; // B
          data[targetIndex + 3] = baseTexture.data[sourcePixelIndex + 3]; // A
        }
      }
    }

    // Put the distorted image data back to canvas
    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Performance tracking
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Animation loop with performance optimization
  const animate = useCallback(() => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTimeRef.current;

    // Limit updates to ~60fps (16.67ms per frame)
    if (deltaTime >= 16.67) {
      spreadRipple();
      renderRipple();

      lastTimeRef.current = currentTime;
      frameCountRef.current++;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [spreadRipple, renderRipple]);

  // Capture base content
  const captureBaseTexture = useCallback(async () => {
    if (!canvasRef.current || !containerRef.current || !isInitialized.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Temporarily hide canvas to capture content underneath
    const originalDisplay = canvas.style.display;
    canvas.style.display = "none";

    try {
      const contentCanvas = await html2canvas(document.body, {
        width: width.current,
        height: height.current,
        scale: window.devicePixelRatio || 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        removeContainer: true,
        logging: false,
        imageTimeout: 0,
      });

      // Draw the captured content to our canvas
      ctx.drawImage(contentCanvas, 0, 0, width.current, height.current);

      // Get the image data
      const imageData = ctx.getImageData(0, 0, width.current, height.current);
      baseTextureRef.current = imageData;
    } catch (error) {
      console.warn("Failed to capture content with html2canvas, using fallback:", error);

      // Fallback: create a simple background pattern
      const imageData = ctx.createImageData(width.current, height.current);
      const data = imageData.data;

      // Create a more sophisticated background pattern
      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width.current;
        const y = Math.floor(i / 4 / width.current);

        // Create a subtle gradient background
        const intensity = (x / width.current + y / height.current) * 0.3;
        const noise = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 50;

        data[i] = Math.floor(30 + intensity * 200 + noise); // R
        data[i + 1] = Math.floor(40 + intensity * 150 + noise); // G
        data[i + 2] = Math.floor(60 + intensity * 180 + noise); // B
        data[i + 3] = 255; // A
      }

      baseTextureRef.current = imageData;
    }

    // Restore canvas display
    canvas.style.display = originalDisplay;
  }, []);

  // Mouse tracking
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isInitialized.current) return;

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = Math.floor(event.clientX - rect.left);
      const y = Math.floor(event.clientY - rect.top);

      // Create ripple disturbance
      dropStone(x, y, 8, 64);
    },
    [dropStone]
  );

  // Setup effect
  useEffect(() => {
    if (!initRipple()) return;

    // Capture base texture
    captureBaseTexture();

    // Start animation loop
    animate();

    // Add mouse event listener
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [initRipple, captureBaseTexture, animate, handleMouseMove, handleResize]);

  // Handle dimension changes (resize)
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Reinitialize with new dimensions
      if (initRipple()) {
        captureBaseTexture();
        clearRipple();
      }
    }
  }, [dimensions, initRipple, captureBaseTexture, clearRipple]);

  return (
    <div
      ref={containerRef}
      className="water-ripple-container"
      style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Base content */}
      <div className="water-ripple-content" style={{ width: "100%", height: "100%" }}>
        {children}
      </div>

      {/* Ripple canvas overlay */}
      <canvas
        ref={canvasRef}
        className="water-ripple-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "normal", // Use normal blending for better visual effect
          opacity: 0.8, // Slight transparency for subtle effect
        }}
      />
    </div>
  );
}
