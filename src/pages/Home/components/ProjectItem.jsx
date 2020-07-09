import React from "react";
import styled from "styled-components";
import idea from "../../../images/idea.png";
import ProjectItemProps from "./ProjectItemProps";
import { useScrollFadeIn } from "../../../hooks";

const ProItem = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  `,
  FirstBlock: styled.div`
    width: 25%;
    margin: 0 auto;
    text-align: center;
  `,
  SecondBlock: styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  `,
  ThirdBlock: styled.div`
    width: 70%;
    margin: 3rem auto 0;

    display: flex;
    justify-content: space-around;
  `,
  Header: styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  `,
  BlackLine: styled.div`
    margin: 1.5rem auto;
    width: 25%;
    height: 3px;
    background-color: black;
  `,
};

const MY_ITEM = [
  {
    index: 0,
    mainImg: idea,
    name: "Grouping",
    tech: "React / NodeJs / MongDB",
  },

  {
    index: 1,
    mainImg: idea,
    name: "Promise-Election",
    tech: "React / HTML5 / CSS3 / JS",
  },
  {
    index: 2,
    mainImg: idea,
    name: "Maydady",
    tech: "Android Studio / JAVA / Arduino",
  },
  {
    index: 3,
    mainImg: idea,
    name: "KilHyun-log",
    tech: "React / JSX",
  },
  {
    index: 3,
    mainImg: idea,
    name: "KilHyun-log",
    tech: "React / JSX",
  },
];

const ProjectItem = () => {
  const animatedItem = {
    0: useScrollFadeIn("left", 1, 0.2),
    1: useScrollFadeIn("up", 1, 1),
  };
  return (
    <>
      <ProItem.Wrapper>
        <ProItem.FirstBlock>
          <ProjectItemProps value={MY_ITEM[0]} />
        </ProItem.FirstBlock>
        <ProItem.SecondBlock>
          <ProjectItemProps value={MY_ITEM[1]} />
          <ProItem.Header {...animatedItem[0]}>
            <p>Project</p>
            <ProItem.BlackLine />
          </ProItem.Header>
          <ProjectItemProps value={MY_ITEM[2]} />
        </ProItem.SecondBlock>
        <ProItem.ThirdBlock>
          <ProjectItemProps value={MY_ITEM[3]} />
          <ProjectItemProps value={MY_ITEM[4]} />
        </ProItem.ThirdBlock>
      </ProItem.Wrapper>
    </>
  );
};

export default ProjectItem;
