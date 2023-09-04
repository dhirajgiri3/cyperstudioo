import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AskContainer = styled.div`
  background: #101010;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    gap: 2.5rem;

    @media screen and (max-width: 1000px) {
      gap: 2rem;
      width: 95%;
    }

    .heading {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-size: 3rem;
        font-weight: 500;
        font-family: "montreal-mid";
        color: #fff;
        letter-spacing: 1px;
      }

      p {
        font-size: 1rem;
        color: #bbb;
        text-align: center;
      }

      @media (max-width: 1000px) {
        gap: 0.7rem;
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 0.75rem;
        }
      }
    }

    input {
      width: 90%;
      height: 4rem;
      border: 2px solid #6090ff;
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      font-family: "montreal";
      color: #fff;
      letter-spacing: 1px;
      background: #191919;
      border-radius: 100px;
      transition: all 0.3s ease-in-out;

      &:focus,
      &:active,
      &:hover {
        border: 2px solid #6090ff99;
      }

      @media (max-width: 1000px) {
        width: 95%;
        height: 3rem;
        font-size: 1rem;
      }
    }

    textarea {
      width: 90%;
      height: 22rem;
      border: none;
      padding: 2rem;
      font-size: 1rem;
      border-radius: 50px;
      background: #191919;
      resize: none;
      font-weight: 500;
      font-family: "montreal";
      color: #fff;
      letter-spacing: 1px;
      line-height: 1.5;

      @media screen and (max-width: 1000px) {
        height: 18rem;
        font-size: 0.9rem;
        width: 95%;
      }
    }

    textarea:focus,
    textarea:active,
    textarea:hover {
      border: none;
    }

    button {
      position: relative;
      overflow: hidden;
      border: none;
      outline: none;
      color: #fff;
      display: inline-block;
      font-size: 15px;
      line-height: 15px;
      padding: 18px 35px;
      text-decoration: none;
      cursor: pointer;
      background: #4568dd;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      border-radius: 100px;
      transition: all 0.3s ease-in-out;

      &:active {
        scale: 0.9;
      }
    }

    button span:first-child {
      position: relative;
      transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 10;
    }

    button span:last-child {
      color: white;
      display: block;
      position: absolute;
      bottom: 0;
      transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 100;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateY(225%) translateX(-50%);
      height: 14px;
      line-height: 13px;
    }

    button:after {
      content: "";
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background: #6065ff;
      transform-origin: bottom center;
      transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
      transform: skewY(9.3deg) scaleY(0);
      z-index: 50;
    }

    button:hover:after {
      transform-origin: bottom center;
      transform: skewY(9.3deg) scaleY(2);
    }

    button:hover span:last-child {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
    }
  }
`;

const SidebarContainer = styled.div`
  background: #151515;
  width: 300px;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
  font-family: "montreal";
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    display: none;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  li {
    font-size: 1rem;
    margin-bottom: 10px;
    border-top: 1px solid #333;
    padding: 1rem .5rem;
    width: 100%;
  }
`;

function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const [questionHistory, setQuestionHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingAnswer(true);
  
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: question,
          max_tokens: 500,
          temperature: 0.9,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: ["\n", " Human:", " AI:"],
          n: 1,
          stream: false,
          logprobs: null,
          echo: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );
  
      if (response && response.data.choices && response.data.choices.length > 0) {
        const generatedAnswer = response.data.choices[0].text;
        setAnswer(generatedAnswer);
        setQuestionHistory([...questionHistory, question]);
      } else {
        console.error("Error: Invalid response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    setIsLoadingAnswer(false);
  };
  

  return (
    <div>
      <AskContainer>
        <SidebarContainer>
          <h2>Question History</h2>
          <ul>
            {questionHistory.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </SidebarContainer>
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <h1>Tell Your Problem</h1>
            <p>
              Share the problem you are currently facing, and I will provide you
              with a story that can help you overcome it.
            </p>
          </div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Tell Your Problem"
          />
          <textarea
            defaultValue={isLoadingAnswer ? "Generating answer..." : answer}
            readOnly
            placeholder={
              isLoadingAnswer
                ? "Generating answer..."
                : "Answer will be displayed here..."
            }
          />

          <button>
            <span className="text">Click to Get wisdom</span>
            <span>Let Me Help!</span>
          </button>
        </form>
      </AskContainer>
    </div>
  );
}

export default Ask;
