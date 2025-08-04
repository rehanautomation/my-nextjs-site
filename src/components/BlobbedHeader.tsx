import React from "react";

interface BlobbedHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function BlobbedHeader({ children, className = "" }: BlobbedHeaderProps) {
  // Always use the same blob for SSR/CSR consistency
  const blob = "/blob.svg";
  return (
    <div className="relative w-fit">
      <img
        src={blob}
        alt=""
        className="absolute left-[-40%] top-1/2 -translate-y-1/2 w-[200%] h-[200%] z-0 pointer-events-none select-none"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
        draggable={false}
      />
      <h1 className={`relative z-10 ${className}`}>
        {children}
      </h1>
    </div>
  );
} 