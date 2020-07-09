import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";

const ProItem = {
  ItemWrapper: styled.div`
    display: inline-block;
    width: 200px;
    height: 200px;
    margin-left: 0.15%;
    margin-right: 0.15%;
    position: relative;
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
  ItemBox: styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 80%;
  `,
  ImageTitle: styled.div`
    width: 100%;
    position: absolute;
    top: 80%;
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
};
const ProjectItemProps = ({ value }) => {
  console.log(value);
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 1.5),
    1: useScrollFadeIn("left", 1, 1.5),
    2: useScrollFadeIn("right", 1, 1.5),
    3: useScrollFadeIn("down", 1, 1.5),
  };
  return (
    //
    <ProItem.ItemWrapper {...animatedItem[value.index]}>
      <ProItem.ItemBox
        key={value.name}
        style={{ backgroundImage: `url(${value.mainImg})` }}
      ></ProItem.ItemBox>
      <ProItem.ImageTitle>
        <ProItem.Title>{value.name}</ProItem.Title>
        <ProItem.Tech>{value.tech}</ProItem.Tech>
      </ProItem.ImageTitle>
    </ProItem.ItemWrapper>
  );
};

export default ProjectItemProps;
