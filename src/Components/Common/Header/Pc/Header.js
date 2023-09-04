import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../../../Assests/cyper-dark-logo.png";

const Container = styled.div`
  width: 100vw;
  height: 9vh;
  position: fixed;
  top: 2rem;
  left: 0;
  z-index: 100;
  color: #fff;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0;
  transition: all 0.3s ease-in-out, transform 0.5s ease-in-out;
  overflow: hidden;
  background: ${(props) => props.bg};
  background: #00000000;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    height: 8vh;
    top: 1rem;
  }

  .logo {
    text-decoration: none;
    mix-blend-mode: difference;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;


    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
      mix-blend-mode: difference;
      transition: all 0.3s ease-in-out;
      background: #fff;
      border-radius: 500px;
      padding: 3px;

      &:hover {
        background: #fff;
      }

      @media screen and (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  .right {
    position: fixed;
    right: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 103;

    @media screen and (max-width: 768px) {
      right: 1rem;
      gap: 1rem;
    }
  }

  .right a {
    position: relative;
  }

  .right a .button {
    padding: 7px 21px;
    border-radius: 50px;
    color: #eee;
    z-index: 1;
    background: #2e2e2e;
    position: relative;
    font-weight: 768;
    font-size: 15px;
    overflow: hidden;
    transition: all 0.5s ease;
    cursor: pointer;
    font-family: "montreal";
    letter-spacing: 1.5px;
    outline: none;
    border: none;

    @media screen and (max-width: 768px) {
      padding: 5px 15px;
      font-size: 12px;
    }
  }

  .right a .button::before,
  .right a .button::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ff5;
    z-index: -1;
    transition: all 0.5s ease;
    opacity: 0;
    outline: none;
    border: none;
  }

  .right a .button::before {
    left: 100%;
    border-radius: 15px;
    outline: none;
    border: none;
  }

  .right a .button::after {
    left: -100%;
    border-radius: 15px;
    outline: none;
    border: none;
  }

  .right a .button:hover {
    color: #1e1e1e;
    border: none;
    outline: none;
  }

  .right a .button:hover::before,
  .right a .button:hover::after {
    opacity: 1;
  }

  .right a .button:hover::before {
    left: 0;
  }

  .right a .button:hover::after {
    left: 0;
  }

  label {
    z-index: 103;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(20deg, #6065f9, #00bbff);
    padding: 0.3rem;
    mix-blend-mode: difference;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: linear-gradient(20deg, #111, #222);
    }

    @media screen and (max-width: 768px) {
      right: 1rem;
    }

    @media screen and (max-width: 500px) {
      &:hover {
        scale: 1.1;
      }
    }
  }

  .hamburger {
    cursor: pointer;
    mix-blend-mode: difference;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3rem;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (max-width: 768px) {
      height: 2.3rem;
    }

    @media screen and (max-width: 350px) {
      height: 2rem;
    }
  }

  .line {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 1s;
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
    stroke-dashoffset: 0;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const Sidebars = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(37deg, #000, #111);
  display: flex;
  flex-direction: column;
  z-index: 102;
  transition: transform 0.5s cubic-bezier(0.5, 0.05, 0.1, 0.9);
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition-delay: ${(props) => (props.open ? "0s" : "0.5s")};

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

function Header({ bg }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container bg={bg} open={isOpen}>
      <Link className="logo" to="/">
        <img src={logo} alt="Cyper Studio" />
      </Link>

      <div className="right">
        <Link to="/">
          <div className="button">Home</div>
        </Link>

        <label className="hamburger">
          <input type="checkbox" checked={isOpen} onChange={handleToggle} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>

      <Sidebars open={isOpen}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Sidebars>
    </Container>
  );
}

export default Header;
