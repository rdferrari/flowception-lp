import React from "react";
import styled from "styled-components";
import "./App.css";
// Components
import Header from "./Header";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Footer = styled.img`
  right: 0;
  margin-top: -200px;
  position: absolute;
  z-index: 11;
`;

function App() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer atl="Flow logo" src="/footer.svg" />
    </div>
  );
}

export default App;
