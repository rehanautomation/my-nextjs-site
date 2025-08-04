import React from "react";

const blobFiles = [
  "/blob.svg",
  "/blob (1).svg",
  "/blob (2).svg",
  "/blob (3).svg",
  "/blob (4).svg",
  "/blob (5).svg",
];

function getRandomBlob(excludeIndex?: number) {
  let idx = Math.floor(Math.random() * blobFiles.length);
  if (excludeIndex !== undefined && blobFiles.length > 1) {
    while (idx === excludeIndex) {
      idx = Math.floor(Math.random() * blobFiles.length);
    }
  }
  return { src: blobFiles[idx], idx };
}

export default function OrangeHeroBackground() {
  // Randomly select two different blobs for top-left and bottom-right
  const topLeft = getRandomBlob();
  const bottomRight = getRandomBlob(topLeft.idx);

  return (
    <>
      {/* Top left blob (always on border) */}
      <img
        src={topLeft.src}
        alt=""
        className="absolute top-[-60px] left-[-60px] w-[220px] h-[140px] z-0 pointer-events-none select-none"
        aria-hidden="true"
        draggable={false}
      />
      {/* Bottom right blob (always on border) */}
      <img
        src={bottomRight.src}
        alt=""
        className="absolute bottom-[-80px] right-[-60px] w-[320px] h-[200px] z-0 pointer-events-none select-none"
        aria-hidden="true"
        draggable={false}
      />
    </>
  );
} 