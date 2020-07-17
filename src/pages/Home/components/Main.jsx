import React from "react";
import styled from "styled-components";
import mainBack from "../../../images/mainBackground.jpg";
import { useScrollFadeIn } from "../../../hooks";

const K = {
  MainContainer: styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${mainBack});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    font-family: "Ubuntu", sans-serif;
  `,
  MainWrapper: styled.div`
    width: 40%;
    height: 50%;
    top: 35%;
    left: 10%;
    display: flex;
    flex-direction: column;
    /* background: #eee; */
    position: absolute;
    font-weight: bold;
    text-align: left;
  `,
  MainH1: styled.h1`
    width: 80%;
    margin: 0 auto;
    font-size: 3.5rem;
  `,
  MainP: styled.p`
    width: 80%;
    font-size: 1.8rem;
    color: #999;
    /* text-align: center; */
    margin: 0rem auto;
  `,
  MainButton: styled.button`
    border: 0;
    width: 80%;
    background: #898cff;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    margin: 1.2rem auto;
    border-radius: 10px;
    padding: 1rem 0;
    position: relative;
    font-family: "Ubuntu", sans-serif;

    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

    &:hover {
      background: #598cff;
    }
  `,
};
// const movePage = () => {
//   document.getElementById("about").focus();
// };

const Main = ({ aboutScroll, className }) => {
  const animatedItem = {
    0: useScrollFadeIn("down", 2, 0.7),
    1: useScrollFadeIn("down", 2, 1),
    2: useScrollFadeIn("right", 2, 1.5),
  };
  return (
    <K.MainContainer className={className}>
      <K.MainWrapper>
        <K.MainH1 {...animatedItem[0]}>Hello</K.MainH1>
        <K.MainH1 {...animatedItem[1]}>
          I'm <span>Kil-Hyun Kim</span>
        </K.MainH1>
        <K.MainP {...animatedItem[2]}>I wanna be a Front-end developer</K.MainP>
        <K.MainButton onClick={aboutScroll}>View my portfolio</K.MainButton>
      </K.MainWrapper>
    </K.MainContainer>
  );
};

export default Main;
