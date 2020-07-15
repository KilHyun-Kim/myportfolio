import React from "react";
import { Main, About, Geography, Project, Footer, Fixed } from "./components";
import FixedContainer from "./containers/FixedContainer";
import styled from "styled-components";

const TestDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Geography />
      <Project />
      <Footer />
      <FixedContainer />
    </>
  );
};

export default Home;
