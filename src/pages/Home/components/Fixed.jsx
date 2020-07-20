import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FcPrevious, FcNext } from "react-icons/fc";
import SlideImg from "./SlideImg";
import deleteSvg from "../../../svg/delete.svg";

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
    border-radius: 0 0 10px 10px;
  `,
  SliderWrapper: styled.div`
    width: 100%;
    height: 55%;
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
  `,
  WhiteButton: styled.button`
    all: unset;
    padding: 0.5em 1em;
    border-radius: 10px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  `,

  Explanation: styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin: 1% auto;
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
    font-size: 0.8rem;
    margin: 1.5rem 0 0;
    font-family: "Nanum Gothic", sans-serif;
  `,
  Summary2: styled.div`
    font-size: 0.8rem;
    margin: 0.5rem 0 0;
    font-family: "Nanum Gothic", sans-serif;
  `,

  DeleteButtonWrapper: styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Link: styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    color: #898cff;
    margin-left: 2rem;
    &:hover {
      text-decoration: underline;
    }
    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    a:visited {
      color: #898cff;
    }
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
const Fixed = ({ test }) => {
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
    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <K.Container className="fixed">
      <K.Blank onClick={onClick}></K.Blank>
      <K.Content>
        <K.SliderWrapper>
          <K.Slider ref={slideRef}>
            {/* <p>{test}</p> */}
            <SlideImg img={test.img1} />
            <SlideImg img={test.img2} />
            <SlideImg img={test.img3} />
          </K.Slider>
          <K.SlideButton>
            {test.whiteButton ? (
              <>
                <K.Button onClick={prevSlide}>
                  <FcPrevious />
                </K.Button>
                <K.Button onClick={nextSlide}>
                  <FcNext />
                </K.Button>
              </>
            ) : (
              <>
                <K.WhiteButton onClick={prevSlide}>
                  <GrFormPrevious />
                </K.WhiteButton>
                <K.WhiteButton onClick={nextSlide}>
                  <GrFormNext />
                </K.WhiteButton>
              </>
            )}
          </K.SlideButton>
        </K.SliderWrapper>
        <K.Explanation>
          <K.Title>{test.title}</K.Title>
          <K.Tag>{test.tag}</K.Tag>
          <K.Summary>{test.summary}</K.Summary>
          <K.Summary2>{test.summary2}</K.Summary2>
        </K.Explanation>
        <K.DeleteButtonWrapper>
          <K.Link>
            {test.link ? (
              <>
                <span>Link:&nbsp;</span>
                <a href={test.link} target="_blank">
                  {test.link}
                </a>
              </>
            ) : (
              <></>
            )}
          </K.Link>
          <K.DeleteButton onClick={onClick}>
            <img src={deleteSvg} alt="delete" />
          </K.DeleteButton>
        </K.DeleteButtonWrapper>
      </K.Content>
      <K.Blank onClick={onClick}></K.Blank>
    </K.Container>
  );
};

export default Fixed;
