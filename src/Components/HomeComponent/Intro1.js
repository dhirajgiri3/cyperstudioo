import React from "react";
import styled from "styled-components";
import SplitReveal from "../Animations/SplitReveal";

const Intro1Container = styled.div`
  .empty-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    @media screen and (max-width: 768px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 350px) {
      margin-top: 18rem;
      margin-bottom: 3rem;
    }

    .empty {
      background: linear-gradient(43deg, #202020, #202020);
      max-height: 100vh;
      width: 80vw;
      height: 100%;
      border-radius: 500px;
      display: flex;
      justify-content: start;
      align-items: center;
      text-align: left;
      padding: 3rem;
      font-family: "oregon";
      transition: all 0.5s ease-in-out;
      color: #eee;
      margin: 10rem 0;
      margin-top: 15rem;

      @media screen and (max-width: 1000px) {
        max-height: 100vh;
        height: 100%;
        width: 95vw;
        padding: 2rem;
        align-items: flex-start;
        border-radius: 50px;
        margin-bottom: 3rem;
        margin-top: 0rem;
      }

      @media screen and (max-width: 768px) {
        border-radius: 10px;
      }
      @media screen and (max-width: 380px) {
        margin-top: 1rem;
      }
    }
  }
`;

function Intro1() {
  return (
    <Intro1Container>
      <div className="empty-container" data-scroll-section>
        <div data-scroll className="empty">
          <SplitReveal
            width="100%"
            fontsize="1.5rem"
            lineheight="1.3"
            fontweight="100"
            letterSpace=".5px"
            tfont="2rem"
            mfont="1.5rem"
            text="Discover Cyper Studio Where design, development, 
                    and captivating user experiences converge to enhance conversions
                     and make a remarkable impression. Our rising force fuels growth,
                      delivering exceptional results that users will discover and love. 
                      Let us bring your business dreams to life."
          />
        </div>
      </div>
    </Intro1Container>
  );
}

export default Intro1;
