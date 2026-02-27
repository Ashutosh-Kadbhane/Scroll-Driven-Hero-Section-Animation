import { useEffect, useState } from "react";
import Headline from "./Headline";
import Stats from "./Stats";
import CanVisual from "./CanVisual";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center px-6">
      {/* Headline fades in on load */}
      <div
        className={`transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Headline />
      </div>

      <CanVisual scrollY={scrollY} />

      <div
        className={`transition-all duration-700 delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Stats />
      </div>


      <p className="text-center text-gray-600 text-xs tracking-widest mt-16 animate-bounce">
        ↓ SCROLL DOWN
      </p>
    </div>
  );
}

export default HeroSection;
