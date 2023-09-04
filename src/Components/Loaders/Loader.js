import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { delay, motion } from "framer-motion";

const greetings = [
  // Array of languages and their corresponding greetings
  { language: "English", greeting: "Hello" },
  { language: "Chinese", greeting: "你好" },
  { language: "Spanish", greeting: "Hola" },
  { language: "Hindi", greeting: "नमस्ते" },
  { language: "Bengali", greeting: "হ্যালো" },
  { language: "Portuguese", greeting: "Olá" },
  { language: "Russian", greeting: "Привет" },
  { language: "Japanese", greeting: "こんにちは" },
  { language: "Punjabi", greeting: "ਹੈਲੋ" },
  { language: "German", greeting: "Hallo" },
];

const LoaderContainer = styled.div`
  background-color: #111;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
`;

const GreetingText = styled.h1`
  font-size: 40px;
  color: #fff;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const Loader = () => {
  const greetingRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    let revealAnimation;
    let hideAnimation;

    const revealGreeting = () => {
      if (revealAnimation) revealAnimation.kill();
      hideAnimation = gsap.to(greetingRef.current, {
        scaleX: 0,
        scaleY: 1,
        opacity: 0,
        duration: 0.1,
        ease: "power3.in",
        onComplete: () => {
          setCurrentGreetingIndex(
            (prevIndex) => (prevIndex + 1) % greetings.length
          );
          revealAnimation = gsap.fromTo(
            greetingRef.current,
            { scaleX: 0, scaleY: 1, opacity: 0 },
            {
              scaleX: 1,
              scaleY: 1,
              opacity: 1,
              duration: 0.4,
              ease: "elastic.out(1.2, 0.4)",
            }
          );
        },
      });
    };

    revealGreeting();

    const repeatInterval = setInterval(revealGreeting, 400);

    setTimeout(() => {
      clearInterval(repeatInterval);
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(repeatInterval);
      if (revealAnimation) revealAnimation.kill();
      if (hideAnimation) hideAnimation.kill();
    };
  }, []);

  return (
    <LoaderContainer>
      {isLoading ? (
        <GreetingText ref={greetingRef}>
          {greetings[currentGreetingIndex].greeting}
        </GreetingText>
      ) : null}
    </LoaderContainer>
  );
};

export default Loader;
