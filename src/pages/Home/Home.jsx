import React from "react";
import { About, Geography, Project } from "./components";
import styled from "styled-components";
import FixedContainer from "./components/FixedContainer";

const TestDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      {/* <TestDiv /> */}
      <About />
      <Geography />
      <Project />
      <FixedContainer />
    </>
  );
};

export default Home;
