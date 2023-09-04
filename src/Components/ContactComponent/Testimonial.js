import React from "react";
import styled from "styled-components";
import svg from "../../Assests/first.svg";
import { motion } from "framer-motion";

const Testimonials = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15rem;
  justify-content: center;
  align-items: center;
  position: relative;
  position: 1;

  svg {
    position: absolute;
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      top: 18vh;
      left: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    width: 35%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      position: relative;
      z-index: 3;
      color: #eee;
      font-size: 3rem;
      mix-blend-mode: difference;
    }

    img {
      width: 600px;
      height: 600px;
      transform: rotate(180deg);
      position: absolute;
      top: -300px;
      left: 0;
      z-index: 2;

      @media screen and (max-width: 768px) {
        width: 450px;
        height: 450px;
        top: -100px;
        left: -40px;
        transform: rotate(-120deg);
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .right {
    width: 100%;
    color: #eee;
    position: relative;
    z-index: 1;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    padding: 0 2rem;
    scroll-behavior: smooth;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 1rem;
    }

    .card {
      position: relative;
      background: #222;
      color: #ddd;
      padding: 1rem;
      min-height: 500px;
      min-width: 370px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      border-radius: 30px;
      transition: all 0.2s ease-in-out;
      max-width: 450px;
      max-height: 600px;
      height: 100%;
      width: 100%;
      overflow-y: hidden;

      @media screen and (max-width: 768px) {
        padding: inherit 0;
      }

      .card_top {
        text-align: left;
        width: 100%;

        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #aaaaaa99;
        }
      }

      .card_mid {
        width: 100%;

        p {
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 1.7px;
          line-height: 2.1rem;
          text-align: left;
          color: #eee;
          font-family: "montreal";
        }
      }

      .card_bottom {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.2rem;

        h3 {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.8rem;
          text-align: left;
          color: #aaa;
          font-family: "montreal";
        }

        h5 {
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 2px;
          line-height: 1.8rem;
          text-align: left;
          color: #aaaaaa99;
          font-family: "montreal";
        }
      }
    }
  }
`;

function Testimonial() {
  return (
    <div>
      <Testimonials>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="150px"
          height="150px"
          viewBox="0 0 50 50"
          style={{ fill: "#bbb", mixBlendMode: "difference" }}
        >
          <path d="M 38.035156 13.988281 C 37.628906 13.980469 37.257813 14.222656 37.09375 14.59375 C 36.933594 14.96875 37.015625 15.402344 37.300781 15.691406 L 45.277344 24 L 2.023438 24 C 1.664063 23.996094 1.328125 24.183594 1.148438 24.496094 C 0.964844 24.808594 0.964844 25.191406 1.148438 25.503906 C 1.328125 25.816406 1.664063 26.003906 2.023438 26 L 45.277344 26 L 37.300781 34.308594 C 36.917969 34.707031 36.933594 35.339844 37.332031 35.722656 C 37.730469 36.105469 38.363281 36.09375 38.746094 35.691406 L 49.011719 25 L 38.746094 14.308594 C 38.5625 14.109375 38.304688 13.996094 38.035156 13.988281 Z"></path>
        </svg>
        <div className="left">
          <h1>Testimonials</h1>
          <img className="svg_first" src={svg} alt="Dhiraj Giri's Portfolio" />
        </div>
        <div className="right">
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="card"
          >
            <div className="card_top">
              <h1>5.0</h1>
            </div>
            <div className="card_mid">
              <p>
                Dhiraj is a very talented developer. He is very professional and
                has a great work ethic. He is very knowledgeable and has a great
                eye for design. He is very easy to work with and is very
                responsive. I would highly recommend him for any project.
              </p>
            </div>
            <div className="card_bottom">
              <h3>Tejashvi Khanna</h3>
              <h5>Sharda University</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="card"
          >
            <div className="card_top">
              <h1>5.0</h1>
            </div>
            <div className="card_mid">
              <p>
                Dhiraj is a very talented developer. He is very professional and
                has a great work ethic. He is very knowledgeable and has a great
                eye for design. He is very easy to work with and is very
                responsive. I would highly recommend him for any project.
              </p>
            </div>
            <div className="card_bottom">
              <h3>Tejashvi Khanna</h3>
              <h5>Sharda University</h5>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="card"
          >
            <div className="card_top">
              <h1>5.0</h1>
            </div>
            <div className="card_mid">
              <p>
                Dhiraj is a very talented developer. He is very professional and
                has a great work ethic. He is very knowledgeable and has a great
                eye for design. He is very easy to work with and is very
                responsive. I would highly recommend him for any project.
              </p>
            </div>
            <div className="card_bottom">
              <h3>Tejashvi Khanna</h3>
              <h5>Sharda University</h5>
            </div>
          </motion.div>
          
        </div>
      </Testimonials>
    </div>
  );
}

export default Testimonial;
