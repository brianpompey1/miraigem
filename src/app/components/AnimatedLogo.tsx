// app/components/AnimatedLogo.tsx
"use client";
import { useEffect, useRef, useState } from "react";

const AnimatedLogo = ({ onAnimationEnd }: { onAnimationEnd?: () => void }) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // Add fadeOut state

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = length.toString();
    path.style.stroke = "#c8944b";
    path.style.strokeWidth = "2";
    path.style.fillOpacity = "0";

    const drawAnimation = path.animate(
      [
        { strokeDashoffset: length, fillOpacity: 0, strokeWidth: 2 },
        { strokeDashoffset: 0, fillOpacity: 0, strokeWidth: 2 },
        { strokeDashoffset: 0, fillOpacity: 1, strokeWidth: 0 },
      ],
      {
        duration: 2000,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );

    drawAnimation.onfinish = () => {
      setAnimationComplete(true);
      path.style.fillOpacity = "1";
      path.style.strokeWidth = "0";
      // Start fade-out after a short delay *after* the drawing is complete
      setTimeout(() => {
        setFadeOut(true);
        onAnimationEnd?.(); // Call the callback after fade-out starts
      }, 500); // 500ms delay before fade-out - adjust as needed
    };

    return () => {
      drawAnimation.cancel();
    };
  }, [onAnimationEnd]);

  return (
    <svg
      // Add a class based on the fadeOut state
      className={`w-[400px] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="531.22"
          y1="540"
          x2="1388.78"
          y2="540"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c8944b" />
          <stop offset="1" stopColor="#edd57c" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="url(#linear-gradient)"
        d="M702.37,454.5V625.65a7.13,7.13,0,1,1-14.26,0V476.81l-65.48,92.31a7.2,7.2,0,0,1-11.67,0l-65.48-92.31V625.65a7.13,7.13,0,1,1-14.26,0V454.5a6.68,6.68,0,0,1,4.93-6.87,6.6,6.6,0,0,1,8,2.73l72.6,102.29L689.4,450.36c2.08-2.86,4.75-3.76,8-2.73A6.69,6.69,0,0,1,702.37,454.5Zm96.79-7.13A7.08,7.08,0,0,0,792,454.5V625.65a7.13,7.13,0,1,0,14.26,0V454.5a7.1,7.1,0,0,0-7.13-7.13ZM975.43,564.19a58.56,58.56,0,0,0,34.88-99.7A56.36,56.36,0,0,0,969,447.37H903.08a7.14,7.14,0,1,0,0,14.27H969a44.34,44.34,0,1,1,0,88.68H903.08a7.08,7.08,0,0,0-7.13,7.13v68.2a7.13,7.13,0,1,0,14.26,0V564.58h46.16l60.81,65.87a6.66,6.66,0,0,0,5.18,2.33,7.08,7.08,0,0,0,7.14-6.87,6.7,6.7,0,0,0-1.82-5.06Zm232.93-112.54a6.51,6.51,0,0,0-6.48-4.28,6.77,6.77,0,0,0-6.62,4.28L1120.45,622.8a7,7,0,0,0-.13,5.44,6.64,6.64,0,0,0,3.76,3.89,7.08,7.08,0,0,0,9.47-3.63l68.33-156.23,63.92,146.25H1184a7.13,7.13,0,1,0,0,14.26h92.71a6.66,6.66,0,0,0,6-3.24,6.55,6.55,0,0,0,.65-6.74Zm178.34-2.2a7.13,7.13,0,0,0-12.18,5.05V625.65a7.13,7.13,0,1,0,14.26,0V454.5A6.85,6.85,0,0,0,1386.7,449.45Z"
      />
    </svg>
  );
};

export default AnimatedLogo;