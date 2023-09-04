import React, { useState } from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import WideButton from "../Common/Buttons/WideButton";

const Forms = styled.div`
  width: 100%;
  height: 100%;

  form {
    :focus {
      outline: 0;
      border: none;
      border-radius: 30px;
    }

    .mydict .title {
      h2 {
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        font-size: 1rem;
        line-height: 3rem;
        color: #aaa;
        margin-bottom: 2rem;
      }
    }

    .mydict div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5rem;
      border-radius: 30px;
    }

    .mydict label input {
      border-radius: 30px;
      transition: all 0.3s ease-in-out;
    }

    .mydict input[type="radio"] {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
      border-radius: 30px;
    }

    .mydict input[type="radio"]:checked + span {
      background-color: transparent;
      z-index: 1;
      color: #eee;
      border-radius: 30px;
      border: none;
      background: #5065f6;
      box-shadow: 0 0 0 0.0625em #ffffff00;
    }

    label span {
      display: block;
      cursor: pointer;
      background-color: transparent;
      position: relative;
      margin-left: 0.0625em;
      box-shadow: 0 0 0 0.0625em #ffffff30;
      letter-spacing: 0.05em;
      color: #fff;
      text-align: center;
      transition: background-color 0.5s ease;
    }

    label span {
      border-radius: 50px;
      padding: 1rem 2rem;
      border: none;

      @media screen and (max-width: 768px) {
        padding: 1rem 1.5rem;
      }
    }

    .bottoms {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 0%;
      width: 100%;

      @media screen and (max-width: 768px) {
        margin-top: 3rem;
      }

      .input {
        background: transparent;
        border: none;
        border-bottom: 1px solid #ffffff40;
        width: 80%;
        padding: 1rem 0.5rem;
        margin-top: 3rem;
        font-size: 1rem;
        color: #ddd;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.5px;
        transition: all 0.2s ease-in-out;

        &::placeholder {
          color: #aaaaaa99;
        }

        &:focus {
          outline: none;
          border-bottom: 1px solid #ffffff99;

          &::placeholder {
            color: #bbbbbb99;
          }
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      textarea {
        background: transparent;
        border: 1px solid #ffffff40;
        min-height: 300px;
        width: 80%;
        padding: 2rem 1.5rem;
        margin-top: 3rem;
        font-size: 1rem;
        color: #ddd;
        font-family: "montreal";
        font-weight: 300;
        letter-spacing: 1.8px;
        transition: all 0.2s ease-in-out;
        border-radius: 30px;
        line-height: 1.8rem;

        &::placeholder {
          color: #aaaaaa99;
        }

        &:focus {
          outline: none;
          border: 1px solid #ffffff99;

          &::placeholder {
            color: #bbbbbb99;
          }
        }

        @media screen and (max-width: 768px) {
          width: 100%;
          min-height: 300px;
        }
      }
    }
    .buttons {
      background: transparent;
      border: none;
      outline: none;
      margin: 2rem 0.5rem;
    }
  }
`;

const CustomDialogBox = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: fixed;
  bottom: -3.5rem;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  flex-direction: column;
  background: #141516;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #151617;
  }
`;

const DialogContent = styled.div`
  padding: 2rem;
  border-radius: 30px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #eee;
  transition: all 0.3s ease-in-out;
`;

const DialogMessage = styled.span`
  margin-bottom: 10px;
`;

const DialogCloseButton = styled.button`
  background-color: #5065f9;
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 100px;
  cursor: pointer;
  width: 30%;
  align-self: center;
  outline: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5055f7;
  }
`;


function Form() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        showDialog("Thanks for reaching out! I'll get back to you soon.");
      } else {
        showDialog("Oops! Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      showDialog("Oops! Something went wrong.");
    }
  };
  

  const showDialog = (message) => {
    setDialogMessage(message);
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
    window.location.reload();
  };

  return (
    <div>
      <Forms>
        <form
          action="https://formspree.io/f/myyalyaj"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mydict">
            <div className="title">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                {" "}
                I Am Interested In...
              </motion.h2>
            </div>
            <div className="tops">
              <label>
                <motion.input
                  type="radio"
                  name="Need"
                  value="Site From Scratch"
                />
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Site From Scratch
                </motion.span>
              </label>
              <label>
                <input type="radio" name="Need" value="App From Scratch" />
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  App From Scratch
                </motion.span>
              </label>
              <label>
                <input type="radio" name="Need" value="Wordpress" />
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Wordpress
                </motion.span>
              </label>
              <label>
                <input type="radio" name="Need" value="Maintenance" />
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Maintenance
                </motion.span>
              </label>
            </div>
            <div className="bottoms">
              <motion.input
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                className="input"
                type="text"
                name="Name"
                placeholder="Your Name"
              />
              <motion.input
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                className="input"
                type="email"
                name="Email"
                placeholder="Your Email"
              />
              <motion.input
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                className="input"
                type="text"
                name="Phone"
                placeholder="Your Phone"
              />
              <textarea
                style={{
                  resize: "none",
                }}
                name="Message"
                placeholder="Tell Us About Your Requirements"
              />
            </div>
          </div>
          <button className="buttons" type="submit">
            <WideButton
              text="Send Me"
              paddingx="2rem"
              paddingy=".8rem"
              mpaddingx="1rem"
              mpaddingy=".6rem"
              fontsize="1.3rem"
              mfontsize="1.1rem"
              color="#ddd"
              bg="#5065f9"
              hoverbg="#222"
              hovercolor="#eee"
              bordercolor="#111"
            />
          </button>
        </form>

        <CustomDialogBox visible={dialogVisible}>
          <DialogContent>
            <DialogMessage>{dialogMessage}</DialogMessage>
            <DialogCloseButton onClick={handleCloseDialog}>
              Close
            </DialogCloseButton>
          </DialogContent>
        </CustomDialogBox>
      </Forms>
    </div>
  );
}

export default Form;
