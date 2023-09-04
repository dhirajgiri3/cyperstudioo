import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MagneticButton from "../Common/Buttons/MagneticButton";
// import { ScrollContainer, ParallaxImage } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import { motion } from "framer-motion";

const InformationWrapper = styled.div`
  width: 100%;
  height: 100%;

  .informationwrapper {
    width: 100%;
    height: 100%;
    position: relative;

    .img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      overflow: hidden;
      background: #1f1f1f;
      background: #151617;
      margin: 0;
      padding: 0;
    }

    .magneticButton {
      position: absolute;
      top: -7rem;
      right: 5rem;

      @media screen and (max-width: 1000px) {
        top: -5rem;
        right: 1rem;
      }
    }
  }
`;

function InfoFirstDiv() {
  return (
    <div>
      <InformationWrapper>
        <div className="informationwrapper">
          <div className="img">
            <motion.img
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
              data-Scroll
              data-scroll-speed="2"
              src="https://dennissnellenberg.com/media/pages/work/base-create/6f57a8fab4-1680180571/case-header-base-v2.jpg"
              alt="Cyper Music"
            />
            <div data-scroll-section className="magneticButton">
              <Link to="/contact" data-scroll data-scroll-speed="2">
                <MagneticButton
                  label="Visit Site"
                  height="180px"
                  width="180px"
                  background="#222"
                  frontbg="#5065f9"
                  color="#fff"
                  hoverbg="#222"
                  hoverColor="#fff"
                  mobileHeight="80px"
                  mobileWidth="80px"
                />
              </Link>
            </div>
          </div>
        </div>
      </InformationWrapper>
    </div>
  );
}

export default InfoFirstDiv;
