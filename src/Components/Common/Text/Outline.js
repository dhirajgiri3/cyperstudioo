import React from "react";
import styled from "styled-components";

const Hero2Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8rem;

  .outline {
    color: white; 
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    letter-spacing: 3px;
    padding: 10px;
    display: inline-block;
  }


  @supports ((-webkit-text-stroke: 1px #fff) or (text-stroke: 1px #fff)) {
    .outline {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      text-stroke: 1px #fff;
      text-shadow: none;
    }
  }
`;

function Outline() {
  return (
    <div>
      <Hero2Container>
        <h1 className="outline">Cyper</h1>
      </Hero2Container>
    </div>
  );
}

export default Outline;
