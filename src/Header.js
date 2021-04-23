import React from "react";
import styled from "styled-components";

const HeaderBackground = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
`;

const Logo = styled.img`
  margin: 10px;
  width: 185px;

  // @media only screen and (min-width: 768px) {
  //   margin: 20px 60px;
  // }

  // @media only screen and (min-width: 1200px) {
  //   margin: 20px 100px;
  // }
`;

const CenterBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin: 40px 10px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1200px) {
    margin: 80px 100px;
    width: 1000px;
  }
`;

const Title = styled.h1`
  font-size: 38px;

  @media only screen and (min-width: 1200px) {
    font-size: 60px;
  }
`;

const Tagline = styled.p`
  font-size: 15px;
  margin: 20px 20px 40px 0;
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 355px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 25px;
    width: 500px;
  }
`;

const Partners = styled.img`
  margin-top: 40px;
  width: 250px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 25px;
    margin-left: 50px;
    width: 450px;
  }
`;

function Header() {
  return (
    <div>
      <HeaderBackground atl="Header background" src="/header-background.svg" />
      <HeaderContainer>
        <Logo atl="Logo" src="/logo-flow.svg" />
        <CenterBox>
          <ContentContainer>
            <div>
              <Title>
                Crafting digital <br />
                experiences.
              </Title>
              <Tagline>
                Flowception is the flow of perceptions about my software
                engineering, designer and researcher experience.{" "}
              </Tagline>
              <img atl="Let´s chat?" src="/bt-lets-chat.svg" />
            </div>
            <div>
              <Partners atl="Partners" src="/partners.png" />
            </div>
          </ContentContainer>
        </CenterBox>
      </HeaderContainer>
    </div>
  );
}

export default Header;
