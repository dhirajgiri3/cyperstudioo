import React from "react";
import styled from "styled-components";
import bgVideo from "../../Assests/video/bg-main.mov";
import { motion } from "framer-motion";
import prism from "../../.././src/Assests/prism.png";
import MagneticButton from "../Common/Buttons/MagneticButton";
import { Link } from "react-router-dom";

const mobileHeight = "140px";
const mobileWidth = "140px";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #000;
  padding: auto 0.5rem;
  padding-top: 3rem;
  padding-bottom: 2rem;

  .company_desc {
    position: absolute;
    top: 45vh;
    left: 8vw;
    z-index: 6;
    width: 40vw;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;

    @media screen and (max-width: 1000px) {
      gap: 2rem;
    }

    .top {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 5rem;
      margin-top: 4rem;

      @media screen and (max-width: 300px) {
        gap: 1.5rem;
      }

      a {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      @media screen and (max-width: 769px) {
        margin-top: 2rem;
      }

      h1 {
        
        letter-spacing: 1.5px;
        background: -webkit-linear-gradient(#eee, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        font-size: 2.5rem;
        transition: all 0.5s ease-in-out;
        font-family: 'circular';

        @media screen and (min-width: 1600px) {
          font-size: 3.5rem;
        }

        &:hover {
          
          letter-spacing: 2px;
          filter: drop-shadow(
            0 0 5px rgba(0, 0, 0, 0.5)
          ); /* Add drop shadow effect */
          transition: all 0.5s ease-in-out; /* Smoother transition */
          /* animation: stretchAnimation 1s ease-in-out infinite alternate; */
        }
      }

      h2 {
        font-family: "oregon";
        letter-spacing: 2px;
        background: -webkit-linear-gradient(#eee, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        font-size: 2rem;

      }
    }

    @media screen and (max-width: 1000px) and (min-width: 601px) {
      width: 100vw;
      left: 4vw;
      top: 58vh;
      max-width: 400px;

      h1 {
        font-size: 2rem;
        line-height: 2.5rem;
        color: #eee;
      }
    }

    @media screen and (max-width: 600px) and (min-width: 381px) {
      left: 4vw;
      top: 45vh;
      width: 100vw;

      h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        color: #eee;
      }
    }

    @media screen and (max-width: 380px) {
      left: 4vw;
      top: 45vh;
      width: 100vw;

      h2 {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }

  .contact_button {
    position: absolute;
    top: 14vh;
    right: 15vw;
    z-index: 7;

    a {
      text-decoration: none;
    }

    @media screen and (max-width: 1000px) {
      top: 72vh;
      right: 10vw;
      display: none;
    }
    @media screen and (max-width: 500px) {
      top: 67vh;
      right: 7vw;
      display: none;
    }
  }

  .bg_img {
    position: absolute;
    top: 17vh;
    right: 8vw;
    z-index: 4;
    animation: rotate 40s infinite ease-in-out;

    img {
      height: 70vh;
      width: 40vw;
      object-fit: contain;

      @media screen and (max-width: 1000px) {
        height: 100vh;
        width: 70vw;
      }
    }

    @media screen and (max-width: 1000px) {
      top: 5vh;
      right: 1rem;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg) translateY(50px);
        opacity: 0.5;
      }

      25% {
        opacity: 1;
      }

      50% {
        transform: rotate(360deg) translateY(0);
        opacity: 1;
      }

      100% {
        transform: rotate(0deg) translateY(50px);
        opacity: 0.5;
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  z-index: 4;
  color: #fff;
  max-width: 2000px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
  @media screen and (max-width: 380px) {
    top: 35%;
    left: 50%;
    transform: translate(-50%, -65%);
  }
`;

const Main = styled.h1`
  display: block;
  overflow: hidden;
  height: 100%;
  position: relative;
  left: -12vw;
  top: 18vh;

  span {
    font-size: 10rem;
    font-weight: 700;
    display: block;
    transform: translateY(100%);
    width: 100%;
    text-align: center;
    font-family: "gilroy-extrabold";
    letter-spacing: 3px;
    text-transform: uppercase;
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1250px) {
    left: -15vw;
    top: 15vh;

    span {
      font-size: 12rem;
    }
  }
  @media screen and (max-width: 1000px) {
    left: -10vw;
    top: 15vh;

    span {
      font-size: 10rem;
    }
  }
  @media screen and (max-width: 710px) {
    left: -12vw;

    span {
      font-size: 8rem;
    }
  }
  @media screen and (max-width: 541px) {
    left: -13vw;
    top: 0vh;

    span {
      font-size: 6rem;
    }
  }
  @media screen and (max-width: 480px) {
    left: -7vw;
    top: 5vh;

    span {
      font-size: 5.5rem;
    }
  }
  @media screen and (max-width: 376px) {
    left: -2vw;
    top: -3vh;

    span {
      font-size: 5.5rem;
    }
  }
  @media screen and (max-width: 300px) {
    left: -5vw;

    span {
      font-size: 4rem;
    }
  }
`;
const Main2 = styled.h1`
  display: block;
  overflow: hidden;
  height: 100%;
  position: relative;
  left: 10vw;
  top: 15vh;

  span {
    font-size: 10rem;
    font-weight: 700;
    display: block;
    transform: translateY(100%);
    width: 100%;
    text-align: center;
    font-family: "gilroy-extrabold";
    letter-spacing: 3px;
    text-transform: uppercase;
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #eee;
    animation: text-gradient 5s ease infinite;

    @keyframes text-gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    span {
      font-size: 12rem;
    }
  }
  @media screen and (max-width: 1000px) {
    left: 22vw;
    top: 15vh;

    span {
      font-size: 10rem;
    }
  }
  @media screen and (max-width: 710px) {
    left: 6vw;
    top: -29vh;

    span {
      font-size: 8rem;
    }
  }
  @media screen and (max-width: 541px) {
    left: 20vw;
    top: 0vh;

    span {
      font-size: 6rem;
    }
  }
  @media screen and (max-width: 480px) {
    left: 20vw;
    top: 5vh;

    span {
      font-size: 5.5rem;
    }
  }
  @media screen and (max-width: 376px) {
    left: 12vw;
    top: -5vh;

    span {
      font-size: 5.5rem;
    }
  }

  @media screen and (max-width: 300px) {
    left: 20vw;

    span {
      font-size: 4rem;
    }
  }
`;

const Video = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #010101;
  backdrop-filter: blur(40px) saturate(100%);
  z-index: 3;
`;

function Hero() {
  return (
    <div>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 0.5,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              ease: [0.17, 0.87, 0.54, 0.89],
            },
          }}
          className="bg_img"
        >
          <img src={prism} alt="Cyper Studio Prism" />
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
              duration: 1,
              delay: 0.5,
            },
          }}
          className="contact_button"
        >
          <Link to="/contact">
            <MagneticButton
              label="See Our Work"
              height="210px"
              width="210px"
              mobileHeight={mobileHeight}
              mobileWidth={mobileWidth}
              background="#222"
              frontbg="#5065f9"
              color="#fff"
              hoverbg="#222"
              hoverColor="#fff"
            />
          </Link>
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
              duration: 1,
              delay: 0.5,
            },
          }}
          className="company_desc"
        >
          <div className="top">
            <svg
              right
              arrow
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              style={{ fill: "#aaa" }}
            >
              <path d="M 38.035156 13.988281 C 37.628906 13.980469 37.257813 14.222656 37.09375 14.59375 C 36.933594 14.96875 37.015625 15.402344 37.300781 15.691406 L 45.277344 24 L 2.023438 24 C 1.664063 23.996094 1.328125 24.183594 1.148438 24.496094 C 0.964844 24.808594 0.964844 25.191406 1.148438 25.503906 C 1.328125 25.816406 1.664063 26.003906 2.023438 26 L 45.277344 26 L 37.300781 34.308594 C 36.917969 34.707031 36.933594 35.339844 37.332031 35.722656 C 37.730469 36.105469 38.363281 36.09375 38.746094 35.691406 L 49.011719 25 L 38.746094 14.308594 C 38.5625 14.109375 38.304688 13.996094 38.035156 13.988281 Z"></path>
            </svg>
          </div>
          <div className="bottom">
            <h2> Building bridges between</h2>
            <h1> you and your customers.</h1>
          </div>
        </motion.div>
        <MagneticButton label="Click me!" />
        <Video
          autoPlay
          loop
          playsInline
          muted
          src={bgVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <BlurOverlay />
        <Content>
          <Main>
            <motion.span
              initial={{ opacity: 0.8, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              Cyper
            </motion.span>
          </Main>
          <Main2>
            <motion.span
              initial={{ opacity: 0.8, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              Studio
            </motion.span>
          </Main2>
        </Content>
      </Container>
    </div>
  );
}

export default Hero;
