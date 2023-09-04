import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import MagneticButton from "../Common/Buttons/MagneticButton";
import { motion } from "framer-motion";

const mobileHeight = "120px";
const mobileWidth = "120px";

const floatingAnimation = keyframes`
  0% {
    transform: translate(0, 0);
    rotate: -10deg;
  }
  25% {
    transform: translate(-5px, 5px);

  }
  50% {
    transform: translate(5px, -5px);
    rotate: 10deg;
  }
  75% {
    transform: translate(-5px, 5px);
  }
  100% {
    transform: translate(0, 0);
    rotate: -10deg;
  }
`;

const LinkAnimation = ({
  text,
  fontsize,
  fontweight,
  color,
  hovercolor,
  img_src,
  src,
}) => {
  const Links = styled(motion.a)`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 0 10px;
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    transition: all 1s ease;
    cursor: pointer;
    width: 100%;
    position: relative;
    z-index: 10;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 2rem;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1rem;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
      }

      h1 {
        font-size: ${fontsize};
        font-weight: ${fontweight};
        color: ${color};
        transition: all 1s ease;
        font-family: "montreal";
        letter-spacing: 2px;
        line-height: 3rem;
        mix-blend-mode: difference;
        &:hover {
          color: ${hovercolor};
        }

        @media (max-width: 1000px) {
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.5rem;
        }
      }
    }

    .img_src {
      min-height: 200px;
      height: 100%;
      width: 0;
      object-fit: contain;
      border: 1px solid #1a1a1a;
      transition: all 1s ease;
      display: none;
      max-width: 500px;
      max-height: 500px;

      @media (max-width: 1000px) {
        display: block;
      }
    }

    &:hover {
      transform: scale(1.02);
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: "";
      position: absolute;
      scale: 1.1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: contain;
      object-fit: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(${(props) => props.image});
      background-clip: border-box;
      opacity: 0;
      z-index: -1;
      transition: all 0.7s ease, transform 0.3s ease;
      transform: translate(0%, 0%);
      height: 200px;
      width: 300px;
      display: block;
      @media screen and (max-width: 1000px) {
        opacity: 1;
        transform: translate(-50%, -50%) scale(2);
        animation: ${floatingAnimation} 5s ease-in-out infinite;
        display: none;
        background-size: cover;
        object-fit: cover;
      }
    }
    &:hover::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(2);
      animation: ${floatingAnimation} 5s ease-in-out infinite;
      backdrop-filter: blur(50px);
    }
  `;

  const easing = [0.3, 0.7, 0.5, 0.9];

  return (
    <Links href={src} image={img_src} target="_blank">
      <div className="top">
        <motion.img
          className="img_src"
          src={img_src}
          alt="Cyper Studio"
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.5, ease: easing, delay: 1 }}
          layoutId="main_img"
        />
      </div>
      <div className="bottom">
        <h1>{text}</h1>
        <a href={src} target="_blank">
          <MagneticButton
            label="View Project"
            height="180px"
            width="180px"
            background="#111"
            frontbg="#5065f9"
            color="#fff"
            hoverbg="#222"
            hoverColor="#fff"
            mobileHeight={mobileHeight}
            mobileWidth={mobileWidth}
          />
        </a>
      </div>
    </Links>
  );
};

LinkAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default LinkAnimation;
