import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const MagneticButton = ({
  label,
  height,
  width,
  color,
  hoverColor,
  mobileHeight,
  mobileWidth,
  background,
  hoverbg,
  frontbg,
}) => {
  const Button = styled.div`
    margin-top: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
    min-width: 150px;
    width: ${width};
    height: ${height};
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    color: ${color};
    background: ${background};
    cursor: pointer;
    transition: all ease-out 0.3s;
    border-radius: 50%;
    overflow: hidden;
    transform-origin: bottom center;
    transition: background-position 1.5s;
    background-image: linear-gradient(transparent 50%, ${frontbg} 50%);
    background-size: 100% 200%;
    background-position: 0% 100%;

    @media screen and (max-width: 768px) {
      height: ${mobileHeight};
      width: ${mobileWidth};
      min-height: 50px;
      min-width: 50px;
    }

    h1 {
      transition: all 0.3s ease-in-out;
      font-size: 0.8rem;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
    }

    &:hover {
      background-color: ${hoverbg};
      scale: 1.1;
      color: ${hoverColor};
      background-position: 0% 0%;

      svg {
        fill: ${hoverColor};
      }

      h1 {
        display: none;
      }
    }

    &:active {
      transform: scale(0.9);
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
      color: ${color};
      font-family: "circular";
      font-weight: 100;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      position: relative;
      z-index: 1;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      .lable {
        font-size: 1.2rem;
        font-weight: 100;
        transition: all ease-in-out 0.3s;

        @media (max-width: 768px) {
          font-size: 0.8rem;
          margin-top: -0.8rem;
        }
        @media (max-width: 600px) {
          font-size: 0.8rem;
          margin-top: -0.8rem;
        }
      }

      svg {
        fill: ${color};
        transition: all ease-in-out 0.3s;
      }

      &:hover {
        svg {
          fill: ${hoverColor};
        }

        h1 {
          display: none;
        }
      }
    }
  `;

  const buttonRef = useRef(null);
  const [hoverWidth, setHoverWidth] = useState(0);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (event) => {
      const buttonRect = button.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      const offsetX = (x - buttonRect.left - buttonRect.width / 2) / 2;
      const offsetY = (y - buttonRect.top - buttonRect.height / 2) / 2;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      button.style.transition = "all 0.5s ease-out"; // Add transition property
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    const resetTransform = () => {
      const buttonElement = buttonRef.current;
      buttonElement.style.transform = "none";
    };

    const handleMouseLeave = () => {
      resetTransform();
      setHoverWidth(0);
    };

    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Button ref={buttonRef}>
      <button
        style={{ width: hoverWidth, transition: "width 0.3s ease-in-out" }}
      >
        <h1 className="lable">{label}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <g fill-rule="evenodd">
            <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
            <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
          </g>
        </svg>
      </button>
    </Button>
  );
};

export default MagneticButton;
