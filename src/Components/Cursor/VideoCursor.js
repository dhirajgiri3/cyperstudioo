import React, { useState } from "react";
import styled from "styled-components";
import throttle from "lodash.throttle"; // Import the throttle function from lodash

// Define the custom cursor as a styled component
const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.cursorColor || "#fff"}; // Set the cursor color based on the prop or use default color
  opacity: 0.7;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: ${(props) => props.cursorAnimation || "all 0.2s cubic-bezier(0.42, 0, 0.58, 1)"}; // Set your desired cursor animation or use default animation
  z-index: 9999; // Set a high z-index to make sure the custom cursor is on top of other elements
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: difference;
`;

const VideoCursor = ({ customCursorColor, cursorAnimation }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // State to track if video is being hovered

  // Update cursor position on mouse move with throttle
  const handleMouseMove = throttle((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, 16); // Update at 60fps (1000ms / 60 ≈ 16ms)

  // Show custom cursor and set hovering state to true on video hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.style.cursor = "none"; // Hide default cursor
  };

  // Hide custom cursor and set hovering state to false on video leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.style.cursor = "auto"; // Show default cursor
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {/* Render your video component here */}
      
      {isHovering && (
        <CustomCursor
          cursorColor={customCursorColor}
          cursorAnimation={cursorAnimation}
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        >
          Play
        </CustomCursor>
      )}
    </div>
  );
};

export default VideoCursor;
