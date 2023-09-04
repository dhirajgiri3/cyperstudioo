import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Container1 from "./Container1";

const BottomContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

function Bottom() {
  return (
    <BottomContainer>
      <Container1 />
    </BottomContainer>
  );
}

export default Bottom;
