import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../Components/Common/Header/Pc/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../../css/Locomotive.css";
import Form from "../../Components/ContactComponent/Form";
import Social from "../../Components/ContactComponent/Social";
import Testimonial from "../../Components/ContactComponent/Testimonial";
import PageLoader from "../../Components/Loaders/PageLoader";

const ContactContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #111;
  padding: 2rem 0;
  padding-top: 17vh;
  overflow-x: hidden;

  .wrapper {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      gap: 3rem;
    }

    .section {
      min-height: 20vh;
      height: 100%;
      width: 100%;
    }

    .top {
      height: 14rem;
      overflow-y: hidden;
      h1 {
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        font-size: 3rem;
        line-height: 4.5rem;
        color: #ddd;
        transform: translateY(15rem);

        @media screen and (max-width: 768px) {
          font-size: 2rem;
          line-height: 3rem;
        }
      }
    }

    .bottom {
      width: 100%;
      height: 100%;
    }
  }
`;

function Contact() {
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div>
          <Header bg="#111" />
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              lerp: 0.05,
              multiplier: 0.7,
              smartphone: {
                smooth: false,
                lerp: 1,
                multiplier: 1,
              },
              tablet: {
                smooth: false,
                breakpoint: 0,
              },
              reloadOnContextChange: false,
            }}
            watch={[]}
            containerRef={containerRef}
          >
            <ContactContainer data-scroll-container>
              <div className="wrapper">
                <motion.div className="top section" data-scroll-section>
                  <motion.h1
                    initial={{ opacity: 0, y: "15rem" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    Hey👋🏻 <br />
                    Let's Work Together <br />& Build Your Dream
                  </motion.h1>
                </motion.div>

                <div className="bottom section" data-scroll-section>
                  <Form />
                </div>
                <div className="section" data-scroll-section>
                  <Testimonial />
                </div>
                <div data-scroll-section>
                  <Social />
                </div>
              </div>
            </ContactContainer>
          </LocomotiveScrollProvider>
        </div>
      )}
    </>
  );
}

export default Contact;
