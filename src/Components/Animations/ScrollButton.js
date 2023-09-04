import React from "react";
import styled from "styled-components";

const ScrollButtonContainer = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  height: 1.5rem;
  width: 1.5rem;
  background: #00000070;
  backdrop-filter: blur(50px);
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    opacity: 0.7;
  }

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

const ScrollButton = ({ direction, onClick, disabled }) => {
  const handleButtonClick = () => {
    onClick(direction);
  };

  return (
    <ScrollButtonContainer
      direction={direction}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {direction === "left" ? "<" : ">"}
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
