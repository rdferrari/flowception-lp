import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin-top: 0;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 0;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Box = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
  position: relative;
  width: 100%;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
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
  background-color: rgb(255, 216, 0, 0.5);
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 8;

  @media only screen and (min-width: 768px) {
    height: 700px;
  }
`;

const MarginTop = styled.img`
  margin-top: -90px;
  object-fit: cover;
  height: 300px;
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

const VideoMargin = styled.img`
  margin-top: -190px;
  object-fit: cover;
  height: 200px;
  position: absolute;
  width: 100%;
  z-index: 9;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
function SectionTwo() {
  return (
    <SectionContainer>
      <MarginTop src="/margin-section-two-top.svg" />
      <ContentContainer>
        <VideoContainer>
          <VideoEl autoPlay loop muted playsInline>
            <source
              src="https://flowceptionio8aa338f82a884000915b17c1e6ee133a194519-dev.s3-us-west-2.amazonaws.com/public/designer.mp4"
              type="video/mp4"
            />{" "}
            Your browser does not support HTML5 video.{" "}
          </VideoEl>
          <VideoMask></VideoMask>
          <VideoMargin alt="Github?" src="/margin-video-two-bottom.svg" />
        </VideoContainer>

        <Box>
          <Title>
            UI / UX <br />
            designer
          </Title>
          <Text>
            Designing easy-to-use mobile and web products that meet your
            business and users needs. <br />
            <br /> As a developer, I ensure that my designs are technically
            feasible within the constraints of the project.
          </Text>
          <BtContainer>
            <img alt="Github?" src="/bt-explore.svg" />
          </BtContainer>
        </Box>
      </ContentContainer>
    </SectionContainer>
  );
}

export default SectionTwo;
