import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  position: relative;
  width: 400px;
  border-radius: 50%;
  transform: rotate(-50deg);
`;

const CircleText = styled.h1`
  font-size: 26px;
  font-family: Monaco, MonoSpace;
  height: 200px;
  position: absolute;
  width: 20px;
  left: 0;
  top: 0;
  transform-origin: bottom center;
`;

const CircleChar = styled.span`
  transform: rotate(${props => props.deg}deg);
`;

const CircularText = ({ text }) => {
  const chars = text.split('');
  const deg = 360 / chars.length;
  return (
    <CircleContainer>
      <CircleText>
        {chars.map((char, index) => (
          <CircleChar
            key={index}
            deg={deg * index}
          >
            {char}
          </CircleChar>
        ))}
      </CircleText>
    </CircleContainer>
  );
};

export default CircularText;
