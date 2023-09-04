import React from "react";
import styled from "styled-components";
import MagneticButton from "../Common/Buttons/MagneticButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SplitReveal from "../Animations/SplitReveal";

const mobileHeight = "140px";
const mobileWidth = "140px";

const Hero2Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #151617;
  padding: 0 3rem;
  padding-top: 15vh;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }

    .left {
      width: 60%;
      padding: 2rem 1rem;

      @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 0;
      }

      h1 {
        font-size: 4vw;
        color: #fff;
        font-family: "oregon";
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: 1px;
        white-space: pre-wrap;
        text-align: left;

        span {
          font-family: "gilroy-extrabold";
          font-weight: 300;
          background: -webkit-linear-gradient(57deg, #5065f9, #aa77ff, #eb455f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: gradientchange 5s ease infinite;
          animation: gradientchange 5s ease-in-out infinite;

          @keyframes gradientchange {
            0% {
              background: -webkit-linear-gradient(
                0deg,
                #5065f9,
                #aa77ff,
                #eb455f
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            33% {
              background: -webkit-linear-gradient(
                120deg,
                #5065f9,
                #aa77ff,
                #eb455f
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            66% {
              background: -webkit-linear-gradient(
                240deg,
                #5065f9,
                #aa77ff,
                #eb455f
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            100% {
              background: -webkit-linear-gradient(
                360deg,
                #5065f9,
                #aa77ff,
                #eb455f
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
      }
    }

    .right {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;
      }

      .top {
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem 0rem;

        @media screen and (max-width: 1000px) {
          height: 100%;
          width: 100%;
          padding: 1rem 0rem;
          justify-content: flex-end;
        }
      }

      .bottom {
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 2rem;
        text-align: left;

        p {
          font-family: "gilroy";
          font-weight: 300;
          font-size: 3vw;
          line-height: 1.5;
          letter-spacing: 1.2px;
          color: #fff;
          text-align: left;
        }

        @media screen and (max-width: 1600px) {
          height: 100%;
          width: 100%;
          padding: 1rem 0rem;

          p {
            font-size: 1vw;
          }
        }
        @media screen and (max-width: 1000px) {
          height: 100%;
          width: 100%;
          padding: 1rem 0rem;

          p {
            font-size: 3vw;
          }
        }
      }
    }
  }
`;

function Hero2() {
  return (
    <div>
      <Hero2Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          }}
        >
          <div className="content">
            <div className="left">
              <SplitReveal
                width="100%"
                fontsize="5vw"
                lineheight="1.3"
                fontweight="400"
                text="At Cyper Studio,
              we strive to understand your needs 
              and exceed your expectations with our innovative solutions."
              />
            </div>
            <div className="right">
              <div className="top">
                <motion.div
                  drag
                  dragConstraints={{ left: 5, right: 5, top: 5, bottom: 5 }}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 0.2,
                    },
                  }}
                >
                  <Link to="/contact" data-scroll data-scroll-speed="5">
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
              </div>

              <div className="bottom">
                <p>
                  We are a team of creative designers and developers who are
                  passionate about creating beautiful and functional websites
                  and applications.
                </p>
              </div>
            </div>{" "}
          </div>
        </motion.div>
      </Hero2Container>
    </div>
  );
}

export default Hero2;
