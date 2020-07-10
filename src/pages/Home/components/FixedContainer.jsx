import React from "react";
import styled from "styled-components";
import idea from "../../../images/idea.png";
import deleteSvg from "../../../svg/delete.svg";
import { useEffect } from "react";

const K = {
  Container: styled.div`
    width: 100%;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    position: fixed;
    display: flex;
  `,
  Blank: styled.div`
    width: 30%;
    height: 100%;
  `,
  Content: styled.div`
    margin: 0 auto;
    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;

    img {
      width: 30%;
    }
  `,
  SliderWrapper: styled.div`
    width: 100%;
    height: 60%;
    position: relative;
    overflow: hidden;
    ul {
      height: 100%;
    }
    li {
      height: 100%;
    }
    li img {
      width: 100%;
      height: 100%;
    }
    button {
      top: 90%;
      position: absolute;
    }
  `,
  Explanation: styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;
    font-family: "Raleway", sans-serif;
  `,
  Title: styled.div`
    font-weight: bold;

    font-size: 2rem;
  `,
  Tag: styled.div`
    padding: 0.5rem 0 1rem;

    font-size: 1rem;
    border-bottom: 1px solid #ddd;
  `,
  Summary: styled.div`
    margin: 1.5rem 0 0;
    font-family: "Nanum Gothic", sans-serif;
  `,
  DeleteButtonWrapper: styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 2rem;
    align-items: center;
  `,
  DeleteButton: styled.button`
    width: 10%;
    height: 50%;
    border: 0;
    background: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  `,
};

const onClick = () => {
  const fixed = document.querySelector(".fixed");
  fixed.style.visibility = "hidden";
};
const wrap = K.SliderWrapper.children;
const slide = () => {
  console.log(wrap);
};
useEffect(() => {
  slide();
}, []);

const FixedContainer = ({}) => {
  const Value = {
    Grouping: {
      title: "Grouping",
      tag: "Developer Study Group Web Page",
      summary:
        "Grouping은 개발자가 되고싶은, 주니어 개발자들에게 그룹 스터디, 프로젝트 팀원 모집, 어학 그룹 스터디를 하기위한 사람들을 모아주는 웹 페이지입니다.",
      img1: idea,
      img2: deleteSvg,
    },
  };

  return (
    <K.Container className="fixed">
      <K.Blank onClick={onClick}></K.Blank>
      <K.Content>
        <K.SliderWrapper>
          <ul>
            <li>
              <img src={Value.Grouping.img1} />
            </li>
            <li>
              <img src={Value.Grouping.img2} />
            </li>
          </ul>
          <button>Next</button>
        </K.SliderWrapper>
        <K.Explanation>
          <K.Title>{Value.Grouping.title}</K.Title>
          <K.Tag>{Value.Grouping.tag}</K.Tag>
          <K.Summary>{Value.Grouping.summary}</K.Summary>
        </K.Explanation>
        <K.DeleteButtonWrapper>
          <K.DeleteButton onClick={onClick}>
            <img src={deleteSvg} alt="delete" />
          </K.DeleteButton>
        </K.DeleteButtonWrapper>
      </K.Content>
      <K.Blank onClick={onClick}></K.Blank>
    </K.Container>
  );
};

export default FixedContainer;
