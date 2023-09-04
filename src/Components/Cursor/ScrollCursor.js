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
  transition: all .5s ease-in-out;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Cursor = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #2c2c2c;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const ScrollCursor = ({ text }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const carouselElements = document.querySelectorAll(".carousel");
    const cursorCenterX = cursor.offsetWidth / 2;
    const cursorCenterY = cursor.offsetHeight / 2;
    const onMouseMove = (event) => {
        const carouselElements = document.querySelectorAll(".carousel");
        const isHoveringCarousel = Array.from(carouselElements).some((carouselItem) =>
          carouselItem.contains(event.target)
        );
      
        gsap.to(cursor, {
          duration: 0.4,
          ease: "power2.out", // Apply easing to cursor movement
          x: isHoveringCarousel ? event.clientX - cursorCenterX : -100, // Set cursor position outside of the viewport if not hovering over carousel
          y: isHoveringCarousel ? event.clientY - cursorCenterY : -100, // Set cursor position outside of the viewport if not hovering over carousel
        });
      };
      

    const onMouseEnterCarousel = (event) => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2.5,
        // mixBlendMode: "difference",
      });
      gsap.to(cursor, {
        duration: 0.4,
        opacity: 1,
        // mixBlendMode: "difference",
      });
      gsap.to(cursor, { duration: 0.4, mixBlendMode: "normal" });
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
      <Cursor>
        <p> {text}</p>
      </Cursor>
    </CursorWrapper>
  );
};

export default ScrollCursor;
