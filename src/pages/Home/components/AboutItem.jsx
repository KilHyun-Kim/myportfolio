import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "../../../hooks";
import patience from "../../../images/끈기.png";
import communication from "../../../images/communication.png";
import idea from "../../../images/idea.png";
import bookLove from "../../../images/booklove.png";
import pentagon from "../../../images/하늘색육각형.png";
import AboutMe from "./AboutMe";

const K = {
  Container: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
  ItemBox: styled.li`
    width: 25%;
    /* padding: 3rem 2rem; */
    text-align: center;
    background-color: #ffffff;
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
    margin: 0 auto;
    width: 90%;
    font-size: 0.8rem;
    color: #616161;
    /* margin-bottom: 1.5rem; */
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
    title: "Patience",
    description1: "맡은 일에 있어서,",
    description2: "끝까지 포기하지 않습니다",
    image: patience,
  },
  {
    title: "Communication",
    description1: "사람들과 빠르게 친해지며,",
    description2: "대화하는 것을 좋아합니다",
    image: communication,
  },
  {
    title: "Idea",
    description1: "늘 아이디어를 떠올리며,",
    description2: "생각하는 것을 좋아합니다",
    image: idea,
  },
  {
    title: "New Studying",
    description1: "신선한 경험을 즐기며,",
    description2: "새로운 기술을 접하는데 있어, 거리낌이 없습니다",
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
    <K.Container>
      <K.ItemWrapper>
        {MY_ITEMS.map((item, index) => (
          <K.ItemBox key={item.title} {...animatedItem[index]}>
            <K.ItemImageBox>
              <K.ItemImage src={item.image} />
            </K.ItemImageBox>
            <K.ItemTitle>{item.title}</K.ItemTitle>
            <K.ItemDescription>{item.description1}</K.ItemDescription>
            <K.ItemDescription>{item.description2}</K.ItemDescription>
          </K.ItemBox>
        ))}
      </K.ItemWrapper>
      <AboutMe />
    </K.Container>
  );
};

export default AboutItem;
