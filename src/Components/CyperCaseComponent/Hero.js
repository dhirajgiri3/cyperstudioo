import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vh 0;
  padding-top: 20vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10vh;
  background: #151617;

  @media screen and (max-width: 1000px) {
    gap: 10vh;
    padding-top: 15vh;
  }

  .tops {
    width: 100%;
    height: 100%;
    padding: 3vh 5vw;
    h1 {
      font-size: 5vw;
      font-family: "montreal";
      font-weight: 300;
      letter-spacing: 1.5px;
      color: #eee;

      @media screen and (max-width: 1000px) {
        font-size: 15vw;
      }
    }
  }

  .bottoms {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 15vw;
    padding: 3vh 5vw;

    @media screen and (max-width: 1000px) {
      gap: 5vw;
    }

    .first {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2vh;

      h1 {
        font-size: 3vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;

        @media screen and (max-width: 1600px) {
          font-size: 2.7vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 6.5vw;
        }
      }

      h3 {
        font-size: 1.5vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        opacity: 0.5;

        @media screen and (max-width: 1600px) {
          font-size: 1vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 3.5vw;
        }
      }
    }

    .second {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2vh;

      h1 {
        font-size: 3vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;

        @media screen and (max-width: 1600px) {
          font-size: 2.7vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 6.5vw;
        }
      }

      h3 {
        font-size: 1.5vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        opacity: 0.5;

        @media screen and (max-width: 1600px) {
          font-size: 1vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 3.5vw;
        }
      }
    }

    .third {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2vh;

      h1 {
        font-size: 3vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;

        @media screen and (max-width: 1600px) {
          font-size: 2.7vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 6.5vw;
        }
      }

      h3 {
        font-size: 1.5vw;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        opacity: 0.5;

        @media screen and (max-width: 1600px) {
          font-size: 1vw;
        }

        @media screen and (max-width: 1000px) {
          font-size: 3.5vw;
        }
      }
    }
  }
`;

function Hero() {
  return (
    <div>
      <HeroContainer>
        <div className="tops">
          <h1>Cyper Music</h1>
        </div>
        <div className="bottoms">
          <div className="first">
            <h1>Service</h1>
            <hr
              style={{
                width: "100%",
                height: "1px",
                background: "#ffffff30",
                border: "none",
                margin: "0",
                padding: "0",
                color: "#ffffff30",
              }}
            />
            <h3>Website Development</h3>
          </div>
          <div className="second">
            <h1>Location</h1>
            <hr
              style={{
                width: "100%",
                height: "1px",
                background: "#ffffff30",
                border: "none",
                margin: "0",
                padding: "0",
                color: "#ffffff30",
              }}
            />
            <h3>Delhi, India</h3>
          </div>
          <div className="third">
            <h1>Year</h1>
            <hr
              style={{
                width: "100%",
                height: "1px",
                background: "#ffffff30",
                border: "none",
                margin: "0",
                padding: "0",
                color: "#ffffff30",
              }}
            />
            <h3>2023</h3>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
}

export default Hero;

// https://dennissnellenberg.com/media/pages/work/base-create/6f57a8fab4-1680180571/case-header-base-v2.jpg
