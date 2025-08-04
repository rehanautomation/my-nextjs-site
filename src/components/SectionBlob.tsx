import React from "react";

interface SectionBlobProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionBlob({ src, className = "", style }: SectionBlobProps) {
  return (
    <img
      src={src}
      alt=""
      className={`absolute z-0 pointer-events-none select-none ${className}`}
      style={style}
      aria-hidden="true"
      draggable={false}
    />
  );
} 