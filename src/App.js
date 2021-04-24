import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import "./App.css";
// Components

const Header = lazy(() => import("./Header"));
const SectionOne = lazy(() => import("./SectionOne"));
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));

const Footer = styled.img`
  right: 0;
  margin-top: -200px;
  position: absolute;
  z-index: 11;
`;

const LoadingContainer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <LoadingContainer>
            <img src="/loading.svg" alt="Loading" />
          </LoadingContainer>
        }
      >
        <Header />
      </Suspense>
      <Suspense
        fallback={
          <LoadingContainer>
            <img src="/loading.svg" alt="Loading" />
          </LoadingContainer>
        }
      >
        <SectionOne />
      </Suspense>
      <Suspense
        fallback={
          <LoadingContainer>
            <img src="/loading.svg" alt="Loading" />
          </LoadingContainer>
        }
      >
        <SectionTwo />
      </Suspense>
      <Suspense
        fallback={
          <LoadingContainer>
            <img src="/loading.svg" alt="Loading" />
          </LoadingContainer>
        }
      >
        <SectionThree />
      </Suspense>
      <Footer alt="Flow logo" src="/footer.svg" />
    </div>
  );
}

export default App;
