import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import AboutItem from "./AboutItem";
import AboutMe from "./AboutMe";

const K = {
  Container: styled.div`
    width: 80%;
    margin: 2rem auto;
    height: 130%;
    background-color: #ffffff;
  `,

  Header: styled.div`
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
  `,
  BlackLine: styled.div`
    margin: 1.5rem auto;
    width: 5%;
    height: 3px;
    background-color: black;
  `,
};

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
  };
  return (
    <K.Container>
      <K.Header {...animatedItem[0]}>
        <h1>about</h1>
        <K.BlackLine />
      </K.Header>
      <AboutItem />
      <AboutMe />
    </K.Container>
  );
};

export default About;
