import React, { useMemo } from "react";

const blobFiles = [
  "/blob.svg",
  "/blob (1).svg",
  "/blob (2).svg",
  "/blob (3).svg",
  "/blob (4).svg",
  "/blob (5).svg",
];

const sizeOptions = [
  { w: 180, h: 120 },
  { w: 220, h: 140 },
  { w: 260, h: 180 },
  { w: 320, h: 200 },
];

const rotationOptions = [0, 45, 90, 135, 180, 225, 270, 315];
const flipOptions = ["", "scale-x-[-1]", "scale-y-[-1]", "scale-x-[-1] scale-y-[-1]"];

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface OrangeBlobBackgroundProps {
  position: Position;
}

export default function OrangeBlobBackground({ position }: OrangeBlobBackgroundProps) {
  // Only randomize once per mount
  const { blob, size, rotation, flip } = useMemo(() => {
    return {
      blob: getRandom(blobFiles),
      size: getRandom(sizeOptions),
      rotation: getRandom(rotationOptions),
      flip: getRandom(flipOptions),
    };
  }, []);

  // Positioning
  let posClass = "";
  if (position === "top-left") posClass = `top-[-60px] left-[-60px]`;
  else if (position === "top-right") posClass = `top-[-60px] right-[-60px]`;
  else if (position === "bottom-left") posClass = `bottom-[-60px] left-[-60px]`;
  else if (position === "bottom-right") posClass = `bottom-[-60px] right-[-60px]`;

  return (
    <img
      src={blob}
      alt=""
      className={`absolute ${posClass} z-0 pointer-events-none select-none`}
      style={{
        width: `${size.w}px`,
        height: `${size.h}px`,
        transform: `${flip} rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
      draggable={false}
    />
  );
} 