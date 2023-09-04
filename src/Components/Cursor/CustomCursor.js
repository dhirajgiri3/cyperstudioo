import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

// Styled components
const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: normal; /* Set the initial mix-blend-mode */

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  transition: all 0.3s ease-in-out; 
  display: flex;
  justify-content: center;
  align-items: center; /* Add this line to center the text vertically */

  /* Add any additional styles for the text, such as font size, color, etc. */
  color: #fff;
  font-size: 14px;
`;


const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const carouselElements = document.querySelectorAll(".link");
    const cursorCenterX = cursor.offsetWidth / 2;
    const cursorCenterY = cursor.offsetHeight / 2;

    const onMouseMove = (event) => {
      gsap.to(cursor, {
        duration: 0.4,
        x: event.clientX - cursorCenterX,
        y: event.clientY - cursorCenterY,
      });
    };

    const onMouseEnterCarousel = (event) => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2.5,
        mixBlendMode: "difference",
      });
      gsap.to(cursor, {
        duration: 0.4,
        opacity: 1,
        mixBlendMode: "difference",
      });
      gsap.to(cursor, { duration: 0.4, mixBlendMode: "difference" });
    };

    const onMouseLeaveCarousel = (event) => {
      gsap.to(cursor, { duration: 0.3, scale: 1 });
      gsap.to(cursor, { duration: 0.4, opacity: 1 });
      gsap.to(cursor, { duration: 0.4, mixBlendMode: "normal" });
    };

    window.addEventListener("mousemove", onMouseMove);
    carouselElements.forEach((carouselItem) => {
      carouselItem.addEventListener("mouseenter", onMouseEnterCarousel);
      carouselItem.addEventListener("mouseleave", onMouseLeaveCarousel);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      carouselElements.forEach((carouselItem) => {
        carouselItem.removeEventListener("mouseenter", onMouseEnterCarousel);
        carouselItem.removeEventListener("mouseleave", onMouseLeaveCarousel);
      });
    };
  }, []);

  return (
    <CursorWrapper ref={cursorRef}>
      <Cursor />
    </CursorWrapper>
  );
};

export default CustomCursor;
