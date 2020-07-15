import React from "react";
import styled from "styled-components";
import mainBack from "../../../images/mainBackground.jpg";

const K = {
  MainContainer: styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${mainBack});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
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
    font-size: 3rem;
  `,
  MainP: styled.p`
    font-size: 1.5rem;
    color: #ddd;
    text-align: center;
    margin: 0.5rem;
  `,
  MainButton: styled.button`
    border: 0;
    width: 80%;
    background: #898cff;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    margin: 2rem auto;
    border-radius: 10px;
    padding: 1rem 0;
    position: relative;
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

    &:hover {
      background: #598cff;
    }
  `,
};
const movePage = () => {
  document.getElementById("about").focus();
};

const Main = () => {
  return (
    <K.MainContainer>
      <K.MainWrapper>
        <K.MainH1>Hello</K.MainH1>
        <K.MainH1> I'm Kil-Hyun Kim.</K.MainH1>
        <K.MainP>I wanna be a Front-end developer.</K.MainP>
        <K.MainButton onClick={movePage}>view my portfolio</K.MainButton>
      </K.MainWrapper>
    </K.MainContainer>
  );
};

export default Main;
