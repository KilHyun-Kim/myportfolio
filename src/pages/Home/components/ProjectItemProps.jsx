import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";

const ProItem = {
  ItemWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 230px;
    margin-left: 0.15%;
    margin-right: 0.15%;
    margin: 0 auto;
    transition: opacity 0.5s;
    text-align: center;
    z-index: 0;
    /* border: 1px solid #000; */
    border-radius: 4px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  `,
  ImageBlock: styled.div`
    height: 80%;
  `,
  Img: styled.img`
    width: 90%;
    height: 90%;
    &:hover {
      transform: scale(1.1);
    }
    .circle {
      border-radius: 50%;
    }
  `,
  ImageTitle: styled.div`
    width: 100%;
    height: 20%;
    opacity: 1;
    transition: all 0.3s ease-in-out;

    p {
      z-index: 1;
    }
  `,
  Title: styled.p`
    font-size: 1.2rem;
    font-weight: bold;
  `,
  Tech: styled.p`
    font-size: 0.8rem;
  `,
  HiddenBlock: styled.div`
    position: fixed;
    width: 100%;
  `,
};
const ProjectItemProps = ({ value }) => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 1.5),
    1: useScrollFadeIn("left", 1, 1.5),
    2: useScrollFadeIn("right", 1, 1.5),
    3: useScrollFadeIn("down", 1, 1.5),
  };
  const openWindow = () => {
    const fixed = document.querySelector(".fixed");
    fixed.style.visibility = "visible";
  };
  return (
    //
    <>
      <ProItem.ItemWrapper {...animatedItem[value.index]} onClick={openWindow}>
        <ProItem.HiddenBlock></ProItem.HiddenBlock>
        <ProItem.ImageBlock>
          <ProItem.Img
            src={value.mainImg}
            key={value.name}

            // className={value.className}
          />
        </ProItem.ImageBlock>
        <ProItem.ImageTitle>
          <ProItem.Title>{value.name}</ProItem.Title>
          <ProItem.Tech>{value.tech}</ProItem.Tech>
        </ProItem.ImageTitle>
      </ProItem.ItemWrapper>
    </>
  );
};

export default ProjectItemProps;
