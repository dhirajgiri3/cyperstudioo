import { easeInOut, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const LoadCotainer = styled.div`
  background: #111;
  width: 100%;
  height: 100vh;

  .first {
    width: 100%;
    height: 100vh;
    background: linear-gradient(28deg, #fff, #eee);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 5rem;
      font-weight: 500;
      color: #333;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: "montreal";

      @media screen and (max-width: 1000px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 600px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 360px) {
        font-size: 1.2rem;
      }
    }
  }
`;

function PageLoader() {
  return (
    <LoadCotainer>
      <motion.div
        initial={{ height: "100vh", scaleY: 1 }}
        animate={{ height: "0vh", scaleY: 1}}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0.97, 0.52, 0.83, 0.6],
        }}
        className="first"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5, ease: "easeInOut" }}
        >
          Innovate. Craft. Succeed.
        </motion.h1>
      </motion.div>
    </LoadCotainer>
  );
}

export default PageLoader;
