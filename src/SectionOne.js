import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin-top: 100vh;

  @media only screen and (min-width: 768px) {
    margin-top: 400px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 700px;
  }
`;

const Background = styled.img`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
  }
`;

function SectionOne() {
  return (
    <SectionContainer>
      <Background src="/section-1-backgroung.svg" alt="Background" />
    </SectionContainer>
  );
}

export default SectionOne;
