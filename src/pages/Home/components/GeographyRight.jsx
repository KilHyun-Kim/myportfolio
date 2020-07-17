import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import dot from "../../../images/점.png";
import line from "../../../images/짝대기.png";
const K = {
  Container: styled.div`
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    justify-content: space-around;
    color: #000;

    p {
      width: 30%;
      justify-content: center;
      transform: rotate(180deg);
    }
    div {
      height: 30%;
    }
    div img {
      width: 100%;
    }
    .dot {
      display: flex;
      width: 30%;
      justify-content: flex-start;
    }
    .line {
      display: flex;
      justify-content: flex-end;
      height: 30%;
    }
  `,
};

const GeographyRight = () => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
  };
  return (
    <>
      <K.Container {...animatedItem[0]}>
        <div className="line">
          <img src={line} alt="선" />
        </div>
        <p>Longitude</p>
        <div className="dot">
          <img src={dot} alt="점" />
        </div>
      </K.Container>
    </>
  );
};

export default GeographyRight;
