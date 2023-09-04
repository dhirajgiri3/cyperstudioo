import React from "react";
import styled from "styled-components";
import MagneticButton from "../Buttons/MagneticButton";
import WideButton from "../Buttons/WideButton";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  min-height: 55vh;
  max-width: 1100px;
  margin: 0 auto;
  color: #fff;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem 3rem;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    font-size: 0.9em;
    text-align: left;
  }

  .top {
    min-height: 26vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }

    .top-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      h1 {
        font-size: 3rem;
        color: #eee;
        font-family: "montreal";
        width: 100%;
        text-align: left;
        font-weight: 300;
        letter-spacing: 1.5px;
        line-height: 3.5rem;

        @media screen and (max-width: 768px) {
          font-size: 2rem;
          line-height: 2.5rem;
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  }

  .middle {
    min-height: 26vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 3rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 2rem;
    }

    .middle-right {
      display: flex;
      justify-content: start;
      align-items: flex-end;
      gap: 5rem;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
      }

      img {
        width: 100%;
        height: 10%;
        object-fit: cover;
        transition: all 0.5s ease-in-out;

        @media screen and (max-width: 768px) {
          width: 100px;
          height: 100px;
        }

        &:hover {
          opacity: 1;
          border-radius: 30%;
        }
      }
    }
  }

  .bottom {
    min-height: 26vh;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3rem;
    }

    .bottom-left {
      display: flex;
      gap: 2rem;
      justify-content: flex-start;
      align-items: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        justify-content: flex-start;
        align-items: flex-start;
      }

      h1 {
        font-size: 1rem;
        color: #ffffff99;
        font-family: "montreal";
        width: 100%;
        text-align: left;
        white-space: nowrap;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: flex-start;
        letter-spacing: 1.1px;

        a {
          text-decoration: none;
          color: #ffffff99;
          font-family: "montreal";

          button {
            cursor: pointer;
            position: relative;
            border: none;
            background: none;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 0.5s;
            transition-property: color;
            font-size: 1.1rem;
            font-weight: 700;
            color: #ddd;
          }

          button:focus,
          button:hover {
            color: #fff;
          }

          button:focus:after,
          button:hover:after {
            width: 100%;
            left: 0%;
          }

          button:after {
            content: "";
            pointer-events: none;
            bottom: -2px;
            left: 50%;
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: #fff;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 0.5s;
            transition-property: width, left;
          }
        }
      }
    }

    .bottom-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      .title {
        h1 {
          font-size: 1rem;
          color: #ffffff99;
          font-family: "montreal";
          width: 100%;
          text-align: left;
          white-space: nowrap;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
      }

      .socials {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        @media screen and (max-width: 768px) {
          gap: 1rem;
        }

        a {
          text-decoration: none;
          button {
            font-size: 1rem;
            color: #fff;
            font-family: "montreal";
            font-weight: 500;
            cursor: pointer;
            position: relative;
            border: none;
            background: none;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 0.5s;
            transition-property: color;
            letter-spacing: 1.1px;
          }

          button:focus,
          button:hover {
            color: #fff;
          }

          button:focus:after,
          button:hover:after {
            width: 100%;
            left: 0%;
          }

          button:after {
            content: "";
            pointer-events: none;
            bottom: -2px;
            left: 50%;
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: #fff;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 0.5s;
            transition-property: width, left;
          }
        }
      }
    }
  }
`;

function Footer() {
  return (
    <div>
      <FooterContainer>
        <div className="top">
          <div className="top-left">
            <div className="top-left-top">
              <h1>Have An Idea?</h1>
            </div>
            <div className="top-left-bottom">
              <h1>Let's Talk About It!</h1>
            </div>
          </div>
          <div className="top-right">
            <Link to="/contact">
              <MagneticButton
                label="Lets Talk"
                height="180px"
                width="180px"
                background="#222"
                frontbg="#5065f9"
                color="#fff"
                hoverbg="#222"
                hoverColor="#fff"
                mobileHeight="100px"
                mobileWidth="100px"
              />
            </Link>
          </div>
        </div>
        <div className="middle">
          <div className="middle-left">
            <a href="mailto:business.cyperstudio@gmail.com">
              <WideButton
                text="business.cyperstudio@gmail.com"
                paddingx="3rem"
                paddingy="1.5rem"
                mpaddingx="1rem"
                mpaddingy="1rem"
                fontsize="1rem"
                mfontsize=".8rem"
                color="#eee"
                bg="#222"
                hoverbg="#5465f6"
                hovercolor="#eee"
                bordercolor="#2c2c2c"
              />
            </a>
          </div>
          <div className="middle-right">
            <a href="tel:+919904392992">
              <WideButton
                text="+91 9904392992"
                paddingx="3rem"
                paddingy="1.5rem"
                mpaddingx="1rem"
                mpaddingy="1rem"
                fontsize="1rem"
                mfontsize=".8rem"
                color="#eee"
                bg="#222"
                hoverbg="#5465f6"
                hovercolor="#eee"
                bordercolor="#2c2c2c"
              />
            </a>
            {/* <img src={logo_full} alt="Cyper Studio" /> */}
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <h1>©2023 Copyright Reserved</h1>
            <h1>
              Designed By
              <a href="https://www.linkedin.com/in/dhirajgiri/" target="_blank">
                <button>Dhiraj Giri</button>
              </a>
            </h1>
          </div>
          <div className="bottom-right">
            <div className="title">
              <h1>Socials</h1>
            </div>

            <div className="socials">
              <a href="https://www.linkedin.com/company/cyper-studio/?viewAsMember=true" target="_blank">
                <button>Linkedin</button>
              </a>
              <a href="https://www.facebook.com/cyperstudioo/" target="_blank">
                <button>Facebook</button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+919904392992" target="_blank">
                <button>Whatsapp</button>
              </a>
              <a href="https://www.instagram.com/cyperstudioo/" target="_blank">
                <button>Instagram</button>
              </a>
            </div>
          </div>
        </div>
      </FooterContainer>
    </div>
  );
}

export default Footer;
