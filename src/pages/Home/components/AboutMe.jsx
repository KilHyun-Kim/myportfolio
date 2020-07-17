import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import html5 from "../../../images/HTML5.png";
import css3 from "../../../images/CSS3 (1).png";
import js from "../../../images/JS.png";
import react from "../../../images/React.png";
import redux from "../../../images/redux.jpg";
import aws from "../../../images/aws.png";
const K = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
  `,
  LeftWrapper: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
  `,
  LeftImgBlock: styled.div`
    width: 80%;
    height: 80%;
    text-align: center;
    margin: 0 auto;
  `,
  LeftImg: styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
  `,
  LeftH1: styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    color: #616161;
    margin: 0.9rem 0;
  `,
  LeftP: styled.p`
    font-weight: bold;
    font-size: 0.9rem;
    color: #616161;
    text-align: center;
    span {
      color: #82ccdd;
    }
    b {
      color: #898cff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  `,

  RightWrapper: styled.div`
    width: 100%;
    height: 50%;

    text-align: center;
  `,
  RightH1Block: styled.div`
    width: 100%;
    background-color: #82ccdd;
    border-radius: 10px;
  `,
  RightH1: styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    padding: 1rem;
  `,
  ImgBlock: styled.div`
    width: 10 0%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    height: 40%;
    img {
      width: 23%;
    }
  `,
};

const AboutMe = () => {
  return (
    <K.Wrapper>
      <K.RightWrapper>
        <K.ImgBlock {...useScrollFadeIn("right", 1, 0.3)}>
          <img src={html5} alt="1" />
          <img src={css3} alt="1" />
          <img src={js} alt="1" />
        </K.ImgBlock>
        <K.ImgBlock {...useScrollFadeIn("right", 1, 0.4)}>
          <img src={react} alt="1" />
          <img src={redux} alt="1" />
          <img src={aws} alt="1" />
        </K.ImgBlock>
      </K.RightWrapper>
    </K.Wrapper>
  );
};

export default AboutMe;
