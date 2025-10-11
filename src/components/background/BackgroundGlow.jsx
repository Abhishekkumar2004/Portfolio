import React, { useEffect, useRef } from "react";
import "../background/BackgroundGlow.css"; // import your CSS

const BackgroundGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      // Center the glow
      glow.style.transform = `translate3d(${currentX - 200}px, ${
        currentY - 200
      }px, 0)`;
      // 200 = half the width/height

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="background-glow" ref={glowRef}></div>;
};

export default BackgroundGlow;
