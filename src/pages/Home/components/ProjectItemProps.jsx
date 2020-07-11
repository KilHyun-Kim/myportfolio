import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";

const ProItem = {
  ItemWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 300px;
    margin-left: 0.15%;
    margin-right: 0.15%;
    margin: 0 auto;
    transition: opacity 0.5s;
    text-align: center;
    z-index: 0;
    /* border: 1px solid #000; */
    border-radius: 15px;
    opacity: 0.8;
    -webkit-box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.27);
    box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.27);
    padding: 3rem 2rem;
    background-color: white;
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
    border-top: 1px solid #ddd;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
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
        <ProItem.ImageBlock>
          {value.borderRadius ? (
            <ProItem.Img
              src={value.mainImg}
              key={value.name}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <ProItem.Img src={value.mainImg} key={value.name} />
          )}
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
