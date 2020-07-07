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
    justify-content: space-around;
    writing-mode: vertical-rl;
    p {
      width: 30%;
      justify-content: center;
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
      justify-content: flex-end;
    }
  `,
};

const GeographyLeft = () => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
  };
  return (
    <>
      <K.Container {...animatedItem[0]}>
        <div className="dot">
          <img src={dot} alt="점" />
        </div>
        <p>Latitude</p>
        <div className="line">
          <img src={line} alt="선" />
        </div>
      </K.Container>
    </>
  );
};

export default GeographyLeft;
