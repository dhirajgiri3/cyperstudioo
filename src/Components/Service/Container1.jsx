import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container1Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
  }

  .left {
    flex: 1;
    position: sticky;
    top: 0;
    overflow: hidden;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #2e2e2e;
    }
  }

  .right {
    flex: 1;

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        font-size: 0.9rem;
        color: #3e3e3e;
        font-weight: 500;
        line-height: 1.5;

        strong {
          font-size: 1rem;
          color: #2e2e2e;
        }

        @media screen and (max-width: 768px) {
          font-size: 1rem;

          strong {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;

function Container1() {
  const listItems = [
    {
      heading: "Innovation",
      description:
        "We are relentless in our pursuit of innovation, continuously exploring new technologies and strategies to stay at the forefront of the digital revolution.",
    },
    {
      heading: "Quality",
      description:
        "We are committed to delivering nothing but excellence. Every project we undertake is held to the highest standards to ensure it not only meets but exceeds your expectations.",
    },
    {
      heading: "Collaboration",
      description:
        "Your success is our success. We work closely with you, taking the time to understand your goals, challenges, and unique vision, and together, we develop solutions that drive remarkable results.",
    },
    {
      heading: "Transparency",
      description:
        "Open and honest communication is the cornerstone of our partnerships. We keep you informed and engaged throughout every step of our journey together.",
    },
    {
      heading: "Adaptability",
      description:
        "In the fast-paced world of digital, we stay adaptable, ready to pivot and evolve to meet new challenges head-on.",
    },
  ];
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
  const listVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Container1Style>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="left"
      >
        <h1>Our Values</h1>
      </motion.div>
      <div className="right">
        <motion.ul>
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ delay: index * 0.1 }}
            >
              <strong>{item.heading}:</strong> {item.description}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container1Style>
  );
}

export default Container1;
