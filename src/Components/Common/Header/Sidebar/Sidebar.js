import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomCursor from "../../../Cursor/CustomCursor";
import logo from "../../../../Assests/cyper-white-transparent-05.png";
import prism from "../../../../Assests/prism.png";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import whitelogo from "../../../../Assests/cyper-white-logo.png";

const Sidebar = ({ isOpen }) => {
  const SidebarContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    padding-top: 10rem;
    padding-left: 10rem;
    overflow-y: auto;
    gap: 2rem;
    overflow-x: hidden;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      padding-top: 8rem;
      padding-left: 2rem;
    }

    .left {
      width: calc(50% - 3rem);
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      @media screen and (max-width: 1000px) {
        margin-left: 0rem;
        width: calc(100% - 1rem);
      }

      .bg_img {
        position: absolute;
        top: 0vh;
        right: 0vw;
        z-index: -1;
        display: none;

        img {
          height: 70vh;
          width: 40vw;
          object-fit: contain;
          opacity: 0.7;

          @media screen and (max-width: 1000px) {
            height: 100vh;
            width: 70vw;
          }
        }

        @media screen and (max-width: 1000px) {
          display: block;
        }
      }

      .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.5rem;
      }

      .bottom {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        ///// remove disable after adding link to blog

        .disable {
          cursor: not-allowed;
          font-size: 1rem;
          color: #aaa;
          font-family: "gilroy-extrabold";
          font-weight: 400;
          transition: all 0.3s ease-in-out;
          letter-spacing: 2px;
        }

        .secondary_link {
          text-decoration: none;

          h2 {
            font-size: 1rem;
            color: #aaa;
            font-family: "gilroy-extrabold";
            font-weight: 400;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            letter-spacing: 2px;
          }

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    .right {
      width: calc(50%);
      display: flex;
      flex-direction: column;
      gap: 4rem;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
      margin: 0;
      margin-left: 5rem;
      position: relative;
      z-index: 0;

      @media screen and (max-width: 1000px) {
        margin-left: 1rem;
        width: calc(100% - 1rem);
        margin: 0;
        padding: 1rem;
        gap: 2rem;
      }

      .cyperlogo {
        position: fixed;
        top: 3rem;
        left: 13rem;
        background: transparent;

        img {
          height: 3rem;
          width: 3rem;
          object-fit: contain;
        }

        @media screen and (max-width: 1000px) {
          top: 2rem;
          left: 2rem;
        }
      }

      .bg_img {
        position: absolute;
        top: 0vh;
        right: 0vw;
        z-index: -1;

        img {
          height: 70vh;
          width: 40vw;
          object-fit: contain;
          opacity: 0.7;

          @media screen and (max-width: 1000px) {
            height: 100vh;
            width: 70vw;
          }

          @media screen and (max-width: 1000px) {
            display: none;
          }
        }
      }

      .first {
        p {
          font-size: 1rem;
          color: #bbb;
          font-family: "circular";
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.05em;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-family: "circular";
          font-weight: 100;
          letter-spacing: 0.05em;
        }
      }
      .second {
        p {
          font-size: 1rem;
          color: #bbb;
          font-family: "circular";
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.05em;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-family: "circular";
          font-weight: 100;
          letter-spacing: 0.05em;
        }
      }

      .third {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
          font-size: 1rem;
          color: #bbb;
          font-family: "circular";
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.05em;
        }

        .icons {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;

          a {
            opacity: 1;
            transition: all 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
              opacity: 0.7;
              scale: 1.3;
            }
          }
        }
      }

      .fourth {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        a {
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  `;

  const TextLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    button {
      outline: 0;
      border: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: auto;
      height: 50px;
      overflow: hidden;
      background: #00000000;
      cursor: pointer;
    }

    button div {
      transform: translateY(0px);
      width: 100%;
    }

    button,
    button div {
      transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    button div span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      height: 50px;
    }

    button:hover div {
      transform: translateY(-50px);
    }

    button h1 {
      font-size: 2rem;
      font-weight: 900;
      color: #eee;
      font-family: "gilroy-extrabold";
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
      white-space: nowrap;

      @media screen and (max-width: 1000px) {
        font-size: 2.2rem;
      }
    }
    button h2 {
      font-size: 1.5rem;
      font-weight: 900;
      color: #aaa;
      font-family: "gilroy-extrabold";
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    button:active {
      transform: scale(0.95);
    }

    @media screen and (max-width: 1000px) {
      button h1 {
        font-size: 2.2rem;
      }
    }
  `;

  return (
    <div>
      <SidebarContainer>
        <div className="left">
          <div className="bg_img">
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.6,
              }}
              src={prism}
              alt="cyper studio"
            />
          </div>
          <div className="top">
            <TextLink to="/" className="link text-link">
              <button>
                <div>
                  <span>
                    <motion.h1
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 50,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    >
                      Home
                    </motion.h1>
                  </span>
                </div>
                <div>
                  <span>
                    <h2>Our Story Begins</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="75"
                      height="75"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffffff" }}
                    >
                      <g fill-rule="evenodd">
                        <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                        <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </button>
            </TextLink>
            {/* <TextLink to="/work" className="link text-link">
              <div className="top">
                <button>
                  <div>
                    <span>
                      <motion.h1
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          y: isOpen ? 0 : 50,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        Work
                      </motion.h1>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h2>Passion & Craftsmanship</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="75"
                        height="75"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffffff" }}
                      >
                        <g fill-rule="evenodd">
                          <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                          <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </TextLink> */}
            <TextLink to="/service" className="link text-link">
              <button>
                <div>
                  <span>
                    <motion.h1
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 50,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.7,
                      }}
                    >
                      Service
                    </motion.h1>
                  </span>
                </div>
                <div>
                  <span>
                    <h2>Empowering Your Vision</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="75"
                      height="75"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffffff" }}
                    >
                      <g fill-rule="evenodd">
                        <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                        <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </button>
            </TextLink>
            <TextLink to="/contact" className="link text-link">
              <button>
                <div>
                  <span>
                    <motion.h1
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 50,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                    >
                      Let's Connect
                    </motion.h1>
                  </span>
                </div>
                <div>
                  <span>
                    <h2>contacts</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="75"
                      height="75"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffffff" }}
                    >
                      <g fill-rule="evenodd">
                        <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                        <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </button>
            </TextLink>
            {/* <TextLink to="/about" className="link text-link">
              <button>
                <div>
                  <span>
                    <motion.h1
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 50,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.9,
                      }}
                    >
                      Who We Are?
                    </motion.h1>
                  </span>
                </div>
                <div>
                  <span>
                    <h2>about us</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="75"
                      height="75"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffffff" }}
                    >
                      <g fill-rule="evenodd">
                        <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                        <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </button>
            </TextLink> */}
          </div>
          <div className="bottom">
            {/* <Link className="secondary_link link" to="/blog"> */}
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="disable"
            >
              {" "}
              Blog
            </motion.h2>
            {/* </Link> */}
            {/* <Link className="secondary_link link" to="/misson"> */}
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.6,
              }}
              className="disable"
            >
              Mission
            </motion.h2>
            {/* </Link> */}
            {/* <Link className="secondary_link link" to="/Prinsiple"> */}
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.7,
              }}
              className="disable"
            >
              {" "}
              Our Principle{" "}
            </motion.h2>
            {/* </Link> */}
          </div>
        </div>
        <div className="right">
          <Link to="/" className="cyperlogo">
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.5,
              }}
              src={whitelogo}
              alt="cyper studio"
            ></motion.img>
          </Link>
          <div className="bg_img">
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.6,
              }}
              src={prism}
              alt="cyper studio"
            />
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 50,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.9,
            }}
            className="first"
          >
            <p>Email</p>
            <h3>
              <a href="mailto:business.cyperstudio@gmail.com">
                business.cyperstudio@gmail.com
              </a>
            </h3>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 50,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.9,
            }}
            className="second"
          >
            <p>Phone</p>
            <h3>
              <a href="tel:+919904392992">+91 9904392992</a>
            </h3>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 50,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.9,
            }}
            className="third"
          >
            <p>Socials</p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.9,
              }}
              className="icons"
            >
              {/* <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.6,
                }}
                href="https://dribbble.com/dhirajgiri7"
                className="link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <circle cx="24" cy="24" r="19.375" fill="#ed3675"></circle>
                  <path
                    fill="#bd1949"
                    fill-rule="evenodd"
                    d="M24,4C12.959,4,4,12.959,4,24c0,11.041,8.959,20,20,20	c11.02,0,20-8.959,20-20C44,12.959,35.02,4,24,4z M37.21,13.219c2.386,2.907,3.818,6.616,3.861,10.629	c-0.564-0.108-6.204-1.258-11.887-0.542c-0.13-0.282-0.239-0.586-0.369-0.889c-0.347-0.824-0.738-1.67-1.128-2.473	C33.978,17.384,36.842,13.696,37.21,13.219z M24,6.95c4.338,0,8.308,1.627,11.323,4.295c-0.304,0.434-2.885,3.883-8.959,6.16	c-2.798-5.141-5.9-9.349-6.377-10C21.267,7.102,22.612,6.95,24,6.95z M16.733,8.555c0.455,0.607,3.492,4.837,6.334,9.87	c-7.983,2.126-15.033,2.083-15.792,2.083C8.382,15.215,11.961,10.811,16.733,8.555z M6.907,24.022c0-0.174,0-0.347,0-0.521	c0.738,0.022,9.024,0.13,17.549-2.43c0.499,0.954,0.954,1.931,1.388,2.907c-0.217,0.065-0.456,0.13-0.672,0.195	c-8.807,2.842-13.492,10.607-13.883,11.258C8.577,32.417,6.907,28.403,6.907,24.022z M24,41.093c-3.948,0-7.592-1.345-10.477-3.601	c0.304-0.629,3.774-7.31,13.406-10.672c0.043-0.022,0.065-0.022,0.109-0.043c2.408,6.226,3.384,11.453,3.644,12.95	C28.62,40.616,26.364,41.093,24,41.093z M33.523,38.165c-0.174-1.041-1.085-6.03-3.319-12.169	c5.358-0.846,10.043,0.542,10.629,0.738C40.096,31.484,37.362,35.583,33.523,38.165z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.7,
                }}
                href="https://dribbble.com/dhirajgiri7"
                target="_blank"
                className="link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  style={{ fill: "#fff" }}
                >
                  <path d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z"></path>
                </svg>
              </motion.a> */}
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.8,
                }}
                href="https://www.linkedin.com/company/cyper-studio/?viewAsMember=true"
                target="_blank"
                className="link"
              >
                <LinkedInIcon
                  style={{
                    fontSize: 28,
                    color: "#fff",
                  }}
                />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.8,
                }}
                href="https://www.facebook.com/cyperstudioo/"
                target="_blank"
                className="link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  style={{ fill: "#fff" }}
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.9,
                }}
                href="https://www.instagram.com/cyperstudioo/"
                target="_blank"
                className="link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#304ffe"
                    d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1 l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52 c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0 c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07 c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03 l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19 c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42 c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49 c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27 c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03 c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87 C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"
                  ></path>
                  <path
                    fill="#4928f4"
                    d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45 c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0 c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19 c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71 c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26 c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"
                  ></path>
                  <path
                    fill="#6200ea"
                    d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59 l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36 c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32 c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26 c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7 c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61 l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64 c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03 c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28 C42,15.68,42,15.84,42,16z"
                  ></path>
                  <path
                    fill="#673ab7"
                    d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9 c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2 c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43 c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03 c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18 c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38 c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18 L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85 c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48 c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"
                  ></path>
                  <path
                    fill="#8e24aa"
                    d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33 c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04 c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16 l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0 c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07 c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83 l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02 c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41 C41.86,21.18,41.94,21.26,42,21.35z"
                  ></path>
                  <path
                    fill="#c2185b"
                    d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32 c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5 c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01 l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74 l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4 c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24 c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49 c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"
                  ></path>
                  <path
                    fill="#d81b60"
                    d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01 c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91 c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14 c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99 c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03 l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0 c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41 c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2 c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"
                  ></path>
                  <path
                    fill="#f50057"
                    d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6 c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15 c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15 l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05 l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31 c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23 c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5 c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"
                  ></path>
                  <path
                    fill="#ff1744"
                    d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04 c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18 l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2 l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94 c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24 c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07 c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58 c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"
                  ></path>
                  <path
                    fill="#ff5722"
                    d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34 c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04 l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3 c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4 c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56 c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1 c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79 c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46 c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01 C38.36,38.22,38.39,38.82,38.39,39.42z"
                  ></path>
                  <path
                    fill="#ff6f00"
                    d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3 c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68 c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04 l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18 c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01 c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89 c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01 c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45 c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99 c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35 C36.28,37.99,36.33,38.7,36.33,39.42z"
                  ></path>
                  <path
                    fill="#ff9800"
                    d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16 h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01 c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03 c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32 c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01 c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39 c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63 c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24 c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48 l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36 c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09 c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6 c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54 c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49 c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03 c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15 c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"
                  ></path>
                  <path
                    fill="#ffd54f"
                    d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07 c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18 c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33 c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1 c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51 c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87 c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59 c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"
                  ></path>
                  <path
                    fill="#ffe082"
                    d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16 c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9 c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4 c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1 c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47 c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53 C28.1,39.2,28.11,39.36,28.11,39.52z"
                  ></path>
                  <path
                    fill="#ffecb3"
                    d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88 c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37 c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02 c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0 c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0 c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69 c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"
                  ></path>
                  <g>
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"
                    ></path>
                    <circle cx="31" cy="16" r="1" fill="#fff"></circle>
                  </g>
                  <g>
                    <circle
                      cx="24"
                      cy="24"
                      r="6"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></circle>
                  </g>
                </svg>
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 1,
                }}
                href="https://api.whatsapp.com/send?phone=+919904392992"
                target="_blank"
                className="link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  style={{ fill: "#fff" }}
                >
                  <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </SidebarContainer>
      <CustomCursor />
    </div>
  );
};

export default Sidebar;
