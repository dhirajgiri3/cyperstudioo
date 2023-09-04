import React, { useRef } from "react";
import Header from "../../Components/Common/Header/Pc/Header";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import "../../css/Locomotive.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import video from "../../Assests/video/Services.mp4";
import Bottom from "../../Components/Service/Bottom";

const ServiceContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #f7f7f7;
  padding: 9rem 3rem;
  padding-bottom: 0;
  color: #2e2e2e;
  overflow-y: auto;
  backdrop-filter: blur(20px);

  @media screen and (max-width: 768px) {
    padding: 7rem 1rem;
    padding-bottom: 0;
  }

  .layer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;

    .top {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0 5rem;
      width: 70%;

      @media screen and (max-width: 768px) {
        padding: 0;
      }

      h1 {
        font-size: 3rem;
        font-family: "montreal";
        font-weight: 700;
        color: #2e2e2e;
        line-height: 1.5;
        letter-spacing: 1px;

        @media screen and (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1rem;
        font-family: "montreal";
        font-weight: 400;
        color: #3e3e3e;
        line-height: 1.5;
        letter-spacing: 1px;

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    .middle {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 3rem;

      @media screen and (max-width: 768px) {
        padding: 0;
      }

      video {
        width: 90vw;
        height: 90vh;
        object-fit: cover;
        border-radius: 500px;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
`;

function Service() {
  const containerRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <>
      <Header />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 0.7,
          lerp: 0.1,

          smartphone: {
            smooth: false,
          },

          tablet: {
            smooth: false,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <ServiceContainer ref={containerRef} data-scroll-container>
          <div className="layer" data-scroll-section>
            <div className="top" data-scroll>
              <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                Welcome to Cyber Studio – Elevating Your Digital Presence
              </motion.h1>
              <motion.p
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                At Cyber Studio, we're not just a digital agency; we're your
                dedicated partners in the world of online success. Our mission
                is to empower your business with tailored solutions that cut
                through the digital noise and resonate with your target
                audience. We believe in crafting digital experiences that leave
                a lasting impact, and we're here to help you thrive in the
                ever-evolving landscape of the digital world.
              </motion.p>
            </div>
            <div className="middle" data-scroll data-scroll-speed="3">
              <motion.video
                variants={variants}
                initial="hidden"
                whileInView="visible"
                autoPlay
                loop
                muted
                src={video}
              ></motion.video>
            </div>
            <div className="bottom" data-scroll>
              <Bottom />
            </div>
          </div>
        </ServiceContainer>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Service;
