"use client";
import { useEffect, useRef, useState } from "react";

interface CustomCursorProps {
  onTitleMouseEnter: () => void;
  onTitleMouseLeave: () => void;
}

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const [isCursorBig, setIsCursorBig] = useState(false);
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);

  const handleCursorHover = () => {
    setIsCursorHovering(true);
  };

  const handleCursorLeave = () => {
    setIsCursorHovering(false);
  };

  const handleMouseEnterTitle = () => {
    setIsCursorBig(true);
  };

  const handleMouseLeaveTitle = () => {
    setIsCursorBig(false);
  };

  useEffect(() => {
    let animationFrameId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = () => {
      const transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = transform;
      }

      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = transform;
      }

      animationFrameId = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (animationFrameId === 0) {
        animationFrameId = window.requestAnimationFrame(updateCursorPosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const titleElements = document.querySelectorAll(".zig");
    const clickableElements = document.querySelectorAll("a, button");

    titleElements.forEach((titleElement) => {
      titleElement.addEventListener("mouseover", handleMouseEnterTitle);
      titleElement.addEventListener("mouseout", handleMouseLeaveTitle);
    });

    clickableElements.forEach((clickableElement) => {
      clickableElement.addEventListener("mouseenter", handleCursorHover);
      clickableElement.addEventListener("mouseleave", handleCursorLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }

      titleElements.forEach((titleElement) => {
        titleElement.removeEventListener("mouseover", handleMouseEnterTitle);
        titleElement.removeEventListener("mouseout", handleMouseLeaveTitle);
      });

      clickableElements.forEach((clickableElement) => {
        clickableElement.removeEventListener("mouseenter", handleCursorHover);
        clickableElement.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerCursorRef}
        className={`mouseCursor cursor-outer ${
          isCursorHovering ? "cursor-hover" : ""
        } ${isCursorBig ? "cursor-big" : ""}`}
      />
      <div
        ref={innerCursorRef}
        className={`mouseCursor cursor-inner ${
          isCursorHovering ? "cursor-hover" : ""
        } ${isCursorBig ? "cursor-big" : ""}`}
      >
        <span>Drag</span>
      </div>
    </>
  );
};

export default CustomCursor;
