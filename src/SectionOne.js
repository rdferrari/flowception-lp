import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin-top: 650px;

  @media only screen and (min-width: 768px) {
    margin-top: 400px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 600px;
  }
`;

const ContentContainer = styled.div`
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Box = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0;
  position: relative;
  width: 100%;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const VideoEl = styled.video`
  object-fit: cover;
  width: 100%;
  height: 400px;
  position: absolute;
  z-index: 7;

  @media only screen and (min-width: 768px) {
    height: 700px;
    width: 50%;
  }
`;

const VideoMask = styled.div`
  background-color: rgb(255, 0, 245, 0.3);
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 8;

  @media only screen and (min-width: 768px) {
    height: 700px;
  }
`;

const MarginTop = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

const Title = styled.h2`
  font-family: ubuntuBold;
  font-size: 32px;
  width: 280px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    width: 355px;
    margin-left: 20px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 55px;
    margin-left: 100px;
    width: 550px;
  }
`;

const Text = styled.p`
  font-family: ubuntuLight;
  font-size: 15px;
  width: 280px;

  @media only screen and (min-width: 768px) {
    margin-left: 20px;
    width: 355px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
    margin-left: 100px;
    width: 550px;
  }
`;

const BtContainer = styled.div`
  margin-top: 30px;
  width: 280px;

  @media only screen and (min-width: 768px) {
    margin-left: 20px;
    width: 355px;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 50px;
    width: 500px;
  }
`;

function SectionOne() {
  return (
    <SectionContainer>
      <MarginTop alt="Margin top" src="/margin-section-one-top.svg" />
      <ContentContainer>
        <Box>
          <Title>
            Software <br />
            engineering
          </Title>
          <Text>
            Building React applications that are efficient, flexible and easy to
            maintain.
            <br /> <br />
            Architecting serverless backend solutions, which offer the best
            experience for your product. Integrating and evolving existing
            systems, or building a custom solution from scratch.
          </Text>
          <BtContainer>
            <a href="https://github.com/rdferrari" target="Blank">
              <img alt="Github?" src="/bt-git.svg" />
            </a>
          </BtContainer>
        </Box>
        <VideoContainer>
          <VideoEl autoPlay loop muted playsInline defaultMuted>
            <source
              src="https://flowceptionio8aa338f82a884000915b17c1e6ee133a194519-dev.s3-us-west-2.amazonaws.com/public/engineering.mp4"
              type="video/mp4"
            />{" "}
            Your browser does not support HTML5 video.{" "}
          </VideoEl>
          <VideoMask></VideoMask>
        </VideoContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

export default SectionOne;
