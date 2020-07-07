import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import developer from "../../../images/developer.jpg";

const K = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
  `,
  LeftWrapper: styled.div`
    width: 30%;
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
    a {
      color: #82ccdd;
    }
  `,

  RightWrapper: styled.div`
    width: 30%;
    height: 100%;

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
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 100%;
    margin-top: 2rem;
    img {
      width: 30%;
    }
  `,
};

const AboutMe = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0.5),
    1: useScrollFadeIn("left", 1, 0.5),
  };

  return (
    <K.Wrapper>
      <K.LeftWrapper {...animatedItem[0]}>
        <K.LeftImgBlock>
          <K.LeftImg src={developer} />
        </K.LeftImgBlock>
        <K.LeftH1>Who's this guy?</K.LeftH1>
        <K.LeftP>
          저는 서울에 살고 있는 프론트엔드 신입 개발자입니다. 저는 웹에 대하여
          큰 열정을 갖고 있습니다.
          <br /> <span>Responsive Web</span>,<span>React</span>,
          <span>Server</span>,<span>DataBase</span>에 많은 관심이 있습니다.
          <br />
          <a href="#">저와 함께 특별한 작품을 만들어봅시다.</a>
        </K.LeftP>
      </K.LeftWrapper>
      <K.RightWrapper {...animatedItem[1]}>
        <K.RightH1Block>
          <K.RightH1>My Technic</K.RightH1>
        </K.RightH1Block>
        <K.ImgBlock {...useScrollFadeIn("up", 1, 0.7)}>
          <img src={developer} />
          <img src={developer} />
          <img src={developer} />
        </K.ImgBlock>
        <K.ImgBlock {...useScrollFadeIn("up", 1, 0.9)}>
          <img src={developer} />
          <img src={developer} />
          <img src={developer} />
        </K.ImgBlock>
      </K.RightWrapper>
    </K.Wrapper>
  );
};

export default AboutMe;
