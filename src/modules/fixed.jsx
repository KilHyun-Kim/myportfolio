import { createAction, handleActions } from "redux-actions";
import GroupingFirst from "../images/GroupingFirstPage.png";
import GroupingSecond from "../images/GroupingSecondPage.png";
import GroupingThird from "../images/GroupingThirdPage.png";
import AlgoppobjaFirst from "../images/AlgoppobjaFirstPage.png";
import AlgoppobjaSecond from "../images/AlgoppobjaSecondPage.png";
import AlgoppobjaThird from "../images/AlgoppobjaThirdPage.png";
import MaydayFirst from "../images/MaydayFirstPage.png";
import MaydaySecond from "../images/MaydaySecondPage.png";
import MaydayThird from "../images/MaydayThirdPage.png";
import KilLogFirst from "../images/KilLogFirstPage.png";
import KilLogSecond from "../images/KilLogSecondPage.png";
import KilLogThird from "../images/KilLogThirdPage.png";
import WorkroomFirst from "../images/workroomThirdPage.png";
import WorkroomSecond from "../images/workroomSecondPage.png";
import WorkroomThird from "../images/workroomFirstPage.png";

const GROUPING = "fixed/GROUPING";
const PROMISE = "fixed/PROMISE";
const MAYDAY = "fixed/MAYDAY";
const KILOG = "fixed/KILOG";
const WORKROOM = "fixed/WORKROOM";

export const grouping = createAction(GROUPING);
export const promise = createAction(PROMISE);
export const mayday = createAction(MAYDAY);
export const kilog = createAction(KILOG);
export const workroom = createAction(WORKROOM);

const initialState = {
  test: {
    img1: 0,
    img2: 1,
    img3: 2,
    title: "",
    tag: "",
    summary: "",
  },
};

const fixed = handleActions(
  {
    [GROUPING]: (state, action) => ({
      test: {
        img1: GroupingFirst,
        img2: GroupingSecond,
        img3: GroupingThird,
        title: "Grouping",
        tag: "Developer Study Group Web Page",
        summary:
          "Grouping은 개발자가 되고싶은, 주니어 개발자들에게 그룹 스터디, 프로젝트 팀원 모집, 어학 그룹 스터디를 하기위한 사람들을 모아주는 웹 페이지입니다. 앞으로 서버, 데이터베이스를 더 공부하여 꼭 완성할 것입니다.",
        whiteButton: true,
      },
    }),
    [PROMISE]: (state, action) => ({
      test: {
        img1: AlgoppobjaFirst,
        img2: AlgoppobjaSecond,
        img3: AlgoppobjaThird,
        title: "Promise",
        tag: "This is the SPA for parliamentary elections",
        summary:
          "Promise-Election은 2020.4.15 국회의원 선거에대한 각 후보들의 공약 정보를 제공하기 위해 만든 SPA(Single Page Application) 사이트입니다.",
      },
    }),
    [MAYDAY]: (state, action) => ({
      test: {
        img1: MaydayFirst,
        img2: MaydaySecond,
        img3: MaydayThird,
        title: "MAYDAY",
        tag: "Applications for emergencies",
        summary:
          "<캡스톤 디자인 수상작> MayDay는 수많은 긴급상황에 대처하기 위해 빠른 신고와 GPS를 통하여 가까운 기관을 알려주고, 다양한 도움을 주는 어플리케이션 입니다.",
        link: "https://www.youtube.com/watch?v=XFl4ZCeU_Ok&t=78s",
        whiteButton: true,
      },
    }),
    [KILOG]: (state, action) => ({
      test: {
        img1: KilLogFirst,
        img2: KilLogSecond,
        img3: KilLogThird,
        title: "KILOG",
        tag: "The whole blog about me",
        summary:
          "KilHyun-log 는 지금까지의 나의 행보와 나를 표현하는 나만의 블로그 입니다. 앞으로도 쭉 업그레이드를 해 나갈 예정입니다.",
        link: "http://KilHyun-Kim.github.io/kilhyun-log",
      },
    }),
    [WORKROOM]: (state, action) => ({
      test: {
        img1: WorkroomFirst,
        img2: WorkroomSecond,
        img3: WorkroomThird,
        title: "WORKROOM",
        tag: "Leather workshop website",
        summary:
          "대구에 위치한 WorkRoom8363 이라는 가죽공방 웹 사이트입니다. 맨 처음 도전했던 사이트인만큼 애정이 가는 사이트입니다. 저는 앞으로도 항상 발전할 것 입니다.",
      },
    }),
  },
  initialState
);
export default fixed;
