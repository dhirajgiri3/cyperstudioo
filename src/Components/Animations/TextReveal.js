import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function TextReveal() {
  const TextContainer = styled.div`
    height: 100%;
    overflow: hidden;
    display: block;

    .main {
      .span1 {
        display: inline-block; // Updated from "iblock"
        font-size: 1.2rem;
      }
    }
  `;

  return (
    <div>
      <TextContainer>
        <div>
          <h1 className="main">
            <motion.span
              className="span1"
              initial={{ opacity: 0, y: -20 }} // Added initial animation
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              CYPER STUDIO
            </motion.span>
          </h1>
        </div>
      </TextContainer>
    </div>
  );
}

export default TextReveal;
