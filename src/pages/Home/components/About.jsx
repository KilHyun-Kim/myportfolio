import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import AboutItems from "./AboutItems";

const K = {
  Container: styled.div`
    width: 100%;
    padding: 1rem 0 0;
    margin: 0 auto;
    height: 100%;
    background-color: #ffffff;
  `,

  Header: styled.div`
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Ubuntu", sans-serif;
  `,
  BlackLine: styled.div`
    margin: 1rem auto;
    width: 5%;
    height: 3px;
    background-color: black;
  `,
};

const About = ({ footerScroll, className }) => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
  };
  return (
    <K.Container className={className}>
      <K.Header {...animatedItem[0]}>
        <h1>about</h1>
        <K.BlackLine />
      </K.Header>
      <AboutItems footerScroll={footerScroll} />
    </K.Container>
  );
};

export default About;
