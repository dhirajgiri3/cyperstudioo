import React, { useRef, useState, useEffect } from "react";
import { ScrollContainer, ParallaxImage } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import "../../css/Locomotive.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import styled from "styled-components";
import Hero from "../../Components/CyperCaseComponent/Hero";
import Header from "../../Components/Common/Header/Pc/Header";
import Information from "../../Components/CyperCaseComponent/Information";
import PageLoader from "./../../Components/Loaders/PageLoader";
import Problem from "../../Components/CyperCaseComponent/Problem";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: #fff;
  background-color: #151617;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
  max-width: 100vw;
  overflow-x: hidden;
  margin-bottom: 2vh;

  @media screen and (max-width: 1000px) {
    gap: 5vh;
  }
`;

function CyperCase() {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            lerp: 0.05,
            multiplier: 0.7,
            smartphone: {
              smooth: true,
              lerp: 0.05,
              multiplier: 0.7,
            },
            tablet: {
              smooth: true,
              lerp: 0.05,
              multiplier: 0.7,
            },
            reloadOnContextChange: false,
          }}
          watch={[]}
          containerRef={ref}
        >
          <Header bg="#151617" />
          <Container ref={ref} data-scroll-container>
            <div data-scroll-section>
              <div data-scroll>
                <Hero />
              </div>
            </div>
            <div data-scroll-section>
              <div data-scroll>
                <Information />
              </div>
            </div>
            <div data-scroll-section>
              <div data-scroll>
                <Problem />
              </div>
            </div>
          </Container>
        </LocomotiveScrollProvider>
      )}
    </div>
  );
}

export default CyperCase;
