import React from "react";
import Cubertovideo from "../../Assests/video/cyper-intro.mp4";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const StyledVideo = styled(motion.video)`
  width: 10vw;
  height: 10vh;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 350px;
  transition: all 0.5s ease-in-out;
  &::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  @media screen and (max-width: 768px) {
    border-radius: 300px;
    width: 30vw;
    height: 30vh;
    animation: none;
  }
`;

function Video() {
  // Check the viewport width to determine if it's a mobile device
  const isMobile = window.innerWidth <= 768;

  // Define the width and height values based on the device type
  const width = isMobile ? "90vw" : "80vw";
  const height = isMobile ? "50vh" : "90vh";

  return (
    <div>
      <Container>
        <StyledVideo
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            width: width,
            height: height,
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              delay: 0.2,
              duration: 1,
              type: "just",
              stiffness: 100,
              damping: 10,
              ease: "linear",
            },
          }}
          autoPlay
          loop
          muted
        >
          <source src={Cubertovideo} type="video/mp4" />
        </StyledVideo>
      </Container>
    </div>
  );
}

export default Video;
