import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SlideImg from "./SlideImg";
import idea from "../../../images/idea.png";
import deleteSvg from "../../../svg/delete.svg";
import pantagon from "../../../images/보라색육각형 (1).png";

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
    width: 50%;
    height: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.27);
    box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.27);
    border-radius: 10px;
  `,
  SliderWrapper: styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
  `,
  Slider: styled.div`
    width: 100%;
    height: 100%;
  `,
  SlideButton: styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
  `,

  Button: styled.button`
    all: unset;
    padding: 0.5em 1em;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: #fff;
    }
  `,
  Explanation: styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
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
// const wrap = K.SliderWrapper.children;
// const slide = () => {
//   console.log(wrap);
// };
// useEffect(() => {
//   slide();
// }, []);

const FixedContainer = ({}) => {
  const Value = {
    Grouping: {
      title: "Grouping",
      tag: "Developer Study Group Web Page",
      summary:
        "Grouping은 개발자가 되고싶은, 주니어 개발자들에게 그룹 스터디, 프로젝트 팀원 모집, 어학 그룹 스터디를 하기위한 사람들을 모아주는 웹 페이지입니다.",
      img1: idea,
      img2: deleteSvg,
      img3: pantagon,
    },
  };
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <K.Container className="fixed">
      <K.Blank onClick={onClick}></K.Blank>
      <K.Content>
        <K.SliderWrapper>
          <K.Slider ref={slideRef}>
            <SlideImg img={idea} />
            <SlideImg img={deleteSvg} />
            <SlideImg img={pantagon} />
          </K.Slider>
          <K.SlideButton>
            <K.Button onClick={prevSlide}>
              <GrFormPrevious />
            </K.Button>
            <K.Button onClick={nextSlide}>
              <GrFormNext />
            </K.Button>
          </K.SlideButton>
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
