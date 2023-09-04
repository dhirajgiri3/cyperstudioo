import React, { useState, useRef } from "react";
import styled from "styled-components";
import ScrollButton from "./ScrollButton";
import ScrollCursor from "../Cursor/ScrollCursor";

const colors = ["#FCE38A", "#096ff3", "#FCCCCF", "#F55FF5", "#1CF3C1"];

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  color: #fff;
  background: #2a2a2a;
  transition: all 0.5s ease-in-out;
  cursor: auto;
  width: 100%;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CarouselItem = styled.img`
  flex-shrink: 0;
  width: 30%;
  height: 25rem;
  object-fit: cover;
  margin-right: 2rem;
  padding: 3rem 2rem;
  background: ${(props) => colors[Math.floor(Math.random() * colors.length)]}25;
  transition: all 0.5s ease-in-out;
  max-width: 30rem;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 820px) {
    width: 85%;
  }
`;

const ImageCarousel = ({ images }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth;
    const containerWidth = carousel.clientWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollPercentage = (containerWidth / scrollWidth) * 100;

    let newScrollLeft;
    if (direction === "left") {
      newScrollLeft = scrollLeft - scrollPercentage * 2;
      if (newScrollLeft < 0) {
        newScrollLeft = 0;
      }
    } else {
      newScrollLeft = scrollLeft + scrollPercentage * 2;
      if (newScrollLeft > maxScrollLeft) {
        newScrollLeft = maxScrollLeft;
      }
    }

    carousel.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    setScrollLeft(newScrollLeft);
  };

  return (
    <div>
      <CarouselContainer ref={carouselRef} id="carousel" className="carousel">
        {images?.map((image, index) => (
          <CarouselItem key={index} src={image} alt={`Image ${index}`} />
        ))}
       
      </CarouselContainer>
      <ScrollButton
        direction="left"
        onClick={handleScroll}
        disabled={scrollLeft === 0}
      >
        &lt;
      </ScrollButton>
      <ScrollButton
        direction="right"
        onClick={handleScroll}
        disabled={scrollLeft === carouselRef.current?.scrollWidth}
      >
        &gt;
      </ScrollButton>
      {/* <ScrollCursor text={"Scroll"} /> */}
    </div>
  );
};

export default ImageCarousel;
