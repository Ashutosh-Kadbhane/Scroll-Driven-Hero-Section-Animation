import { useEffect, useRef } from "react";

function CanVisual({ scrollY }) {
  const moveY = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 400);

  return (
    <div
      className="flex justify-center mt-10"
      style={{
        transform: `translateY(-${moveY}px)`,
        opacity: opacity,
        transition: "transform 0.1s linear",
      }}
    >
      {/* Simple can shape using divs */}
      <div className="relative flex flex-col items-center">
        {/* Can top */}
        <div className="w-20 h-3 bg-gray-300 rounded-t-full" />
        {/* Can body */}
        <div className="w-24 h-44 bg-linear-to-br from-green-400 to-green-700 rounded-sm flex flex-col items-center justify-center shadow-2xl">
          <p className="text-black font-bold text-xl tracking-widest">ITZ</p>
          <p className="text-black font-bold text-2xl tracking-widest">FIZZ</p>
          <p className="text-black text-xs tracking-widest mt-1">ENERGY</p>
        </div>
        {/* Can bottom */}
        <div className="w-20 h-3 bg-gray-400 rounded-b-full" />
      </div>
    </div>
  );
}

export default CanVisual;
