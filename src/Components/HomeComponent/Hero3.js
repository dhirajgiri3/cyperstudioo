import React from "react";
import styled from "styled-components";
import MagneticButton from "../Common/Buttons/MagneticButton";
import { Link } from "react-router-dom";
import yellowbg from "../../Assests/yellow-bg.png";
import colorimg from "../../Assests/color-img.png";
import firsrtmockup from "../../Assests/cyper-mus-mock.png";
import { motion } from "framer-motion";

const Hero3Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  color: #1e1e1e;
  padding: 0 10rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    padding: 0 3rem;
    padding-top: 6rem;
    gap: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 6rem;
    gap: 3rem;
    min-height: 105vh;
  }

  .first {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      p {
        font-size: 1.5rem;
        font-family: "montreal";

        span {
          font-family: "montreal-mid";
          font-weight: 700;
          color: transparent;
          background: -webkit-linear-gradient(#5065f9, #00ccff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.5rem;
        }

        @media screen and (max-width: 1000px) {
          font-size: 2rem;

          span {
            font-size: 2rem;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 1.7rem;

          span {
            font-size: 1.7rem;
          }
        }
      }
    }

    .button {
      position: relative;
      right: 5rem;

      @media screen and (max-width: 1000px) {
        top: 4rem;
        right: 2rem;
      }
    }
  }

  .second {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 5;
    margin-top: 2rem;
  }

  .third {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 2rem;

    @media screen and (max-width: 1000px) {
      margin-top: 0;
    }

    .bg {
      width: 100%;
      height: 600px;
      border-radius: 50px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      object-fit: cover;

      @media screen and (max-width: 1000px) {
        height: 400px;
      }
    }

    .colorimg {
      position: absolute;
      top: -12rem;
      left: 0;
      z-index: 3;

      @media screen and (max-width: 1000px) {
        height: 400px;
        top: -8rem;
      }
    }

    .firstmockup {
      position: absolute;
      top: -2rem;
      right: 1rem;
      z-index: 3;
      width: 25rem;

      @media screen and (max-width: 1000px) {
        height: 25rem;
        right: 0;
      }
    }
  }

  .third {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #000;

    .bg {
      width: 100%;
      height: 30rem;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      z-index: 2;
      border-radius: 100px;

      @media screen and (max-width: 768px) {
        height: 17rem;
        border-radius: 20px;
      }
    }

    .colorimg {
      position: absolute;
      top: -12rem;
      object-fit: cover;
      z-index: 2;
      height: auto;

      @media screen and (max-width: 768px) {
        width: 80vw;
        top: -2rem;
      }
    }

    .firstmockup {
      position: absolute;
      top: 0;
      width: 20vw;
      height: auto;
      right: 1rem;
      z-index: 3;

      @media screen and (max-width: 850px) {
        width: 40vw;
        right: 0;
      }
    }
  }
`;

const OutlineTxt = styled.h1`
  color: transparent;
  -webkit-text-stroke: 1.1px #1e1e1e;
  background-image: url("path/to/transparent-image.png");
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: none;
  font-size: 4rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    -webkit-text-stroke: 1px #ff5505; /* Adjust the text stroke for smaller screens */
  }
  @media screen and (max-width: 376px) {
    font-size: 3.2rem;
    -webkit-text-stroke: 0.8px #ff5505; /* Further reduce the text stroke for very small screens */
  }

  &:hover {
    color: #ffffff10;
    -webkit-text-stroke: 1px #ff5505;
    transition: all 0.3s ease-in-out;
    letter-spacing: 2px;
  }

  &::after {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 20%;
    width: 300px;
    height: 300px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: -1;
    border-radius: 100%;
    animation: rotate 5s linear infinite;
    transition: all 0.5s ease-in-out;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @media screen and (max-width: 768px) {
      width: auto;
      height: auto;
      top: -50%;
    }
  }
`;

function Hero3() {
  return (
    <div data>
      <Hero3Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="first"
        >
          <div className="text">
            <p>
              We Are <span> Cyper Studio, </span> <br />
            </p>
            <p>We do</p>
          </div>
          <div data-scroll data-scroll-speed="3" className="button">
            <Link to="/contact">
              <MagneticButton
                label="Contact Us"
                height="180px"
                width="180px"
                mobileHeight="100px"
                mobileWidth="100px"
                background="#5065f9"
                frontbg="#1e1e1e"
                color="#fff"
                hoverbg="#5065f9"
                hoverColor="#fff"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="second"
        >
          <OutlineTxt
            url={
              "https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/643e66819b44204fd2e9eae4_Moons%20Juice-p-800.png"
            }
          >
            Development
          </OutlineTxt>
          <OutlineTxt
            url={
              "https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/643e66786dac3f5b6783153a_Gloriuos_Jewerly-p-1080.png"
            }
          >
            Branding
          </OutlineTxt>
          <OutlineTxt
            url={
              "https://uploads-ssl.webflow.com/643cf94fbda65134c5d3cc54/643e6cb94f04dc26f9f161a7_Norway-p-1080.png"
            }
          >
            Marketing
          </OutlineTxt>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,

            transition: {
              delay: 0.7,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="third"
        >
          <img
            data-scroll
            data-scroll-speed="3"
            src={yellowbg}
            className="bg"
            alt="yellowbg"
          />
          <img
            data-scroll
            data-scroll-speed="3"
            src={colorimg}
            className="colorimg"
            alt="colorimg"
          />
          <img src={firsrtmockup} className="firstmockup" alt="firstmockup" />
        </motion.div>
      </Hero3Container>
    </div>
  );
}

export default Hero3;
