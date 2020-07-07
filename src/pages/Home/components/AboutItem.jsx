import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import speed from "../../../images/speed.png";
import communication from "../../../images/communication.png";
import idea from "../../../images/idea.png";
import bookLove from "../../../images/booklove.png";
import pentagon from "../../../images/하늘색육각형.png";

const K = {
  ItemWrapper: styled.ul`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
  ItemBox: styled.li`
    width: 25%;
    /* padding: 3rem 2rem; */
    text-align: center;
    background-color: #fbfbfb;
    display: flex;
    flex-direction: column;
    font-family: "Ubuntu", sans-serif;
    /* box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03); */
    border-radius: 0.5rem;
  `,
  ItemTitle: styled.h3`
    color: #616161;
    font-size: 1.3rem;
    font-weight: bold;

    margin-bottom: 0.3rem;
  `,
  ItemDescription: styled.p`
    font-size: 0.9rem;
    color: #616161;
    margin-bottom: 1.5rem;
  `,
  ItemImageBox: styled.div`
    width: 130px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    text-align: center;
    background-image: url(${pentagon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `,
  ItemImage: styled.img`
    width: 60%;
    height: 60%;
  `,
};

const MY_ITEMS = [
  {
    title: "Speed",
    description: "제가 맡은 일은 최대한 신속하게 처리할 수 있습니다!",
    image: speed,
  },
  {
    title: "Communication",
    description:
      "다양한 사람과 빠르게 친해지며,함께 헤쳐나가기위해 노력합니다.",
    image: communication,
  },
  {
    title: "Idea",
    description:
      "끊임없이 아이디어를 생각합니다. 창의적인 아이디어가 샘솟습니다.",
    image: idea,
  },
  {
    title: "New Studying",
    description: "새로움 접하기를 즐깁니다. 신선한 경험을 좋아합니다!",
    image: bookLove,
  },
];
const AboutItem = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
    1: useScrollFadeIn("up", 1, 0.7),
    2: useScrollFadeIn("up", 1, 1.0),
    3: useScrollFadeIn("up", 1, 1.3),
  };
  return (
    <>
      <K.ItemWrapper>
        {MY_ITEMS.map((item, index) => (
          <K.ItemBox key={item.title} {...animatedItem[index]}>
            <K.ItemImageBox>
              <K.ItemImage src={item.image} />
            </K.ItemImageBox>
            <K.ItemTitle>{item.title}</K.ItemTitle>
            <K.ItemDescription>{item.description}</K.ItemDescription>
          </K.ItemBox>
        ))}
      </K.ItemWrapper>
    </>
  );
};

export default AboutItem;
