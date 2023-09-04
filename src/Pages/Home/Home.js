import React, { useRef, useEffect, useState } from "react";
import Hero3 from "../../Components/HomeComponent/Hero3";
import Hero from "../../Components/HomeComponent/Hero";
import Introduction from "../../Components/HomeComponent/Introduction";
import "../../css/Locomotive.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Loader from "../../Components/Loaders/Loader";
import Header from "../../Components/Common/Header/Pc/Header";
import styled from "styled-components";
import Footer from "../../Components/Common/Footer/Footer";
import Blog from "../../Components/HomeComponent/Work";
import Video from "./../../Components/HomeComponent/Video";
import Intro1 from "../../Components/HomeComponent/Intro1";

const Container = styled.div`
  background-color: #111;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  color: #eee;
  overflow-x: hidden;

  .div {
    padding: 3rem 10rem;
    min-height: 50vh;

    @media screen and (max-width: 768px) {
      padding: 1rem 1rem;
    }
  }

  .texts {
    color: #ffffff80;
    margin: 2rem 0;
  }

  .video {
    width: 100%;
    height: 100%;
    background: #111;
  }

  .footer {
    width: 100%;
    min-height: 70vh;
    background: #111;
    margin-top: 2rem;

    .content {
      width: calc(100%);
      min-height: 70vh;
      padding: 2rem 3rem;
      background: #151617;
      color: #1e1e1e;
      border-top-right-radius: 100px;
      border-top-left-radius: 100px;

      @media screen and (max-width: 768px) {
        padding: 1.5rem 1rem;
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
      }
    }
  }
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header headerBg="#151617" />
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
            containerRef={ref}
          >
            <Container ref={ref} data-scroll-container>
              <div data-scroll-section>
                <div data-scroll>
                  <Hero3 />
                </div>
              </div>
              <div>
                <Intro1 />
              </div>
              <div data-scroll-section>
                <div className="video" data-scroll>
                  <Video />
                </div>
              </div>

              <div data-scroll-section className="div">
                <div className="texts">Our Projects</div>
                <div data-scroll>
                  <Blog />
                </div>
              </div>

              <div data-scroll-section className="footer">
                <div data-scroll className="content">
                  <Footer />
                </div>
              </div>
            </Container>
          </LocomotiveScrollProvider>
        </>
      )}
    </>
  );
};

export default Home;
