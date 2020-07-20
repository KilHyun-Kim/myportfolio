import React from "react";
import styled from "styled-components";
import maydayImg from "../../../images/smilemaydayicon.png";
import workroom8363 from "../../../images/workroom8363.png";
import koreaColormap from "../../../images/koreaColormap.gif";
import ProjectItemProps from "./ProjectItemProps";
import GroupingMark from "../../../images/GroupingMark.png";
import KilHyunLogMark from "../../../images/KilLogMark.PNG";
import { useScrollFadeIn } from "../../../hooks";
import { useDispatch } from "react-redux";
import {
  grouping,
  promise,
  mayday,
  kilog,
  workroom,
} from "../../../modules/fixed";

const ProItem = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
  `,
  FirstBlock: styled.div`
    width: 45%;
    height: 25%;
    margin: 1rem auto 0;
    text-align: center;
  `,
  SecondBlock: styled.div`
    width: 70%;
    height: 25%;
    margin: 1rem auto 2rem;
    display: flex;
    justify-content: space-between;
  `,
  ThirdBlock: styled.div`
    width: 45%;
    height: 25%;
    margin: 0 auto;
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
  P: styled.p`
    margin: 0 4rem;
  `,
  BlackLine: styled.div`
    margin: 1rem auto;
    width: 25%;
    height: 3px;
    background-color: black;
  `,
};

const MY_ITEM = [
  {
    index: 0,
    mainImg: GroupingMark,
    name: "Grouping",
    tech: "React / NodeJs / MongDB",
  },

  {
    index: 1,
    mainImg: koreaColormap,
    name: "Promise-Election",
    tech: "React / AWS / JS",
  },
  {
    index: 2,
    mainImg: maydayImg,
    name: "Mayday",
    tech: "Android Studio / JAVA / Arduino",
  },
  {
    index: 3,
    mainImg: KilHyunLogMark,
    name: "KilHyun-log",
    tech: "React / JSX",
  },
  {
    index: 3,
    mainImg: workroom8363,
    name: "Workroom8363",
    tech: "React / JSX",
    className: "circle",
    borderRadius: true,
  },
];

const ProjectItem = () => {
  const animatedItem = {
    0: useScrollFadeIn("left", 1, 0.2),
  };

  const dispatch = useDispatch();
  const onChangeGrouping = () => dispatch(grouping());
  const onChangePromise = () => dispatch(promise());
  const onChangeMaday = () => dispatch(mayday());
  const onChangeKilog = () => dispatch(kilog());
  const onChnageWorkroom = () => dispatch(workroom());

  return (
    <>
      <ProItem.Wrapper>
        <ProItem.FirstBlock>
          <ProjectItemProps value={MY_ITEM[0]} onChange={onChangeGrouping} />
        </ProItem.FirstBlock>
        <ProItem.SecondBlock>
          <ProjectItemProps value={MY_ITEM[1]} onChange={onChangePromise} />
          <ProItem.Header {...animatedItem[0]}>
            <ProItem.P>Project</ProItem.P>
            <ProItem.BlackLine />
          </ProItem.Header>
          <ProjectItemProps value={MY_ITEM[2]} onChange={onChangeMaday} />
        </ProItem.SecondBlock>
        <ProItem.ThirdBlock>
          <ProjectItemProps value={MY_ITEM[3]} onChange={onChangeKilog} />
          <ProjectItemProps value={MY_ITEM[4]} onChange={onChnageWorkroom} />
        </ProItem.ThirdBlock>
      </ProItem.Wrapper>
    </>
  );
};

export default ProjectItem;
