import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkAnimation from "../Animations/LinkAnimation";
import fad from "../../Assests/work-section/fad.png";
import tesla from "../../Assests/work-section/tesla.png";
import crypto from "../../Assests/work-section/crypto.png";
import dn from "../../Assests/work-section/dnnews.png";
import praise from "../../Assests/work-section/praise.png";
import su from "../../Assests/work-section/su.png";
import regem from "../../Assests/work-section/regem.png";
import regemai from "../../Assests/work-section/regemai.png";
import fastguide from "../../Assests/work-section/fastguide-mockup.png";
import shipexmini from "../../Assests/work-section/shipexlogo.png";
import avanti from "../../Assests/work-section/avanti-mockups.png";

const BlogContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  .links {
    padding: 2rem 1rem;
    border-top: 0.5px solid #aaaaaa50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 80px;
    gap: 10vw;
    transition: all 0.5s ease-in-out;

    a {
      text-decoration: none;
    }

    @media screen and (max-width: 768px) {
      gap: 1rem;
      padding: inherit 0;
    }
  }
`;

function Blog() {
  return (
    <BlogContainer>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="Shipex Inida - A logistic company - website coming soon"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={shipexmini}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="FAD - A New Generation Social Media Platform Landing Page"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={fad}
          src="https://fadfashion.vercel.app/"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="Regem Enterprise"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={regem}
          src="https://regem.in/"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="University Exam Attendance App - Launching Soon On Playstore"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={su}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="RegemAi - An Ai Based SAAS Platform"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={regemai}
          src="regemai.com"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="DN News - A News And Blog Website"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={dn}
          src="dnnews.com"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="Complete LMS for Avanti Vidhya Mandir"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={avanti}
          src="https://play.google.com/store/apps/details?id=com.piccozone.avm"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="FastGuide - A Learning App"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={fastguide}
          src="https://play.google.com/store/apps/details?id=com.fastguide.fastguide"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="Tesla Clone with React Js And Several React Libraries"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={tesla}
          src="https://teslas-clones.netlify.app/"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="CryptoKn. - A Website For Crypto Lovers"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={crypto}
          src="https://cryptokn.vercel.app/"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.5,
          repeat: false,
        }}
        className="links"
      >
        <LinkAnimation
          text="Praise - A Blog website"
          fontsize="1.5rem"
          fontweight="500"
          color="#fff"
          hovercolor="#eee"
          img_src={praise}
          src="praise.vercel.app"
        />
      </motion.div>
    </BlogContainer>
  );
}

export default Blog;
