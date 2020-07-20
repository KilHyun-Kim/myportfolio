import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import kilhyun from "../../../images/일러스트.jpg";
import AboutItem from "./AboutItem";

const A = {
  Container: styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    /* justify-content: space-around; */
  `,
  LeftWrapper: styled.div`
    width: 50%;
    height: 100%;
    text-align: center;
    font-family: "Ubuntu", sans-serif;
  `,
  LeftImgBlock: styled.div`
    width: 60%;
    height: 60%;
    text-align: center;
    margin: 0 auto;
  `,
  LeftImg: styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
  `,
  LeftH1: styled.h1`
    font-size: 1.8rem;
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
      font-size: 1.2rem;
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
};

const AboutItems = ({ footerScroll }) => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("left", 1, 0.5),
  };

  return (
    <A.Container {...animatedItem[0]}>
      <A.LeftWrapper>
        <A.LeftImgBlock>
          <A.LeftImg src={kilhyun} />
        </A.LeftImgBlock>
        <A.LeftH1>Who's this guy?</A.LeftH1>
        <A.LeftP>
          저는 서울에 살고 있는 프론트엔드 신입 개발자입니다
          <br /> 웹에 대하여 큰 열정을 가지고 있으며,
          <br /> <span>Responsive Web</span>, <span>React</span>,{" "}
          <span>Server</span>, <span>DataBase</span>에 많은 관심이 있습니다
          <br />
          아래를 클릭하면 저에게 Contact 할 수 있습니다.
          <br />
          <b onClick={footerScroll}>저와 함께 특별한 작품을 만들어 볼까요?</b>
        </A.LeftP>
      </A.LeftWrapper>
      <AboutItem />
    </A.Container>
  );
};

export default AboutItems;
