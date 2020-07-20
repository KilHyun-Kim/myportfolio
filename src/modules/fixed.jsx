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
    summary2: "",
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
        tag: "Developer Study Group Web Page ( 제작중 ) ",
        summary:
          "서울에 올라와 스터디그룹, 디자이너, 백엔드 개발자등 많은 사람을 만나며 다양한 프로젝트를 진행하고 싶었습니다. 그러나 개발자를 위해 제대로된 모이는 사이트가 없다고 판단하여, 제가 직접 만들어보자라고 생각하여 제작을 시작하게 되었습니다.",
        summary2:
          "제가 제일 관심있는 React와 styled-components를 사용하였고, 사용자 관리와 글 목록을 구현 하기 위하여 Server 와 DataBase 가 필요하였고, 서버언어는 Node.js, 서버는 접근성이 편리하며, 클라우드 웹 서비스인 AWS(EC2)를 사용하였고, DB는 AWS(RDS)를 사용할것 입니다.",
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
          "Algoppobja는 2020.4.15 국회의원 선거에대한 각 후보들의 정보들이 너무 복잡하여서 한눈에 들어오지 않아 오로지 공약 정보를 간단하게 보여주고 싶어서 제작했던 SPA(Single Page Application)입니다.",
        summary2:
          "React를 사용하고 이미지에 링크를 주기 위하여 <map>,<area> 태그를 활용하였고, 반응형 웹을 활용하여 스마트폰으로 확인할 수 있도록 작업하였고, 직접 국회의원 후보에게 연락을 하여서 공약을 받아서 정보를 입력해봤습니다.",
        link:
          "http://kilikili-algoppobja-test.s3-website.ap-northeast-2.amazonaws.com/",
      },
    }),
    [MAYDAY]: (state, action) => ({
      test: {
        img1: MaydayFirst,
        img2: MaydaySecond,
        img3: MaydayThird,
        title: "MAYDAY",
        tag: "Applications for emergencies <캡스톤 디자인 수상작>",
        summary:
          "총 6명의 팀원으로 진행한 캡스톤 디자인 작품이였으며, 긴급구조 어플리케이션을 제작하였습니다.",
        summary2:
          "앱을 제작할 수 있는 Android Studio, 센서로 감지하여 값을 얻을 수 있는 Arduino, 센서의 케이스를 위한 3D 프린트, 사물인식, 모션을 감지할수 있는 기능 등을 제작하였습니다. 저는 기능과 UI를 맡아 제작에 힘썼습니다. 제작하며 팀워크와 다양한 기술을 익힐 수 있었고, 새로운 언어를 배우는 두려움도 떨쳐낼 수 있었습니다.",
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
          "KilHyun-log 는 지금까지의 나의 프로젝트와 기술, 여행등 나를 표현하는 나만의 블로그 입니다. ",
        summary2:
          "React를 사용하였고, styed-components를 활용하여 전체적인 디자인을 만들었습니다. Github의 무료 호스팅 deploy를 활용하여 호스팅 되어있습니다.",
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
          "저의 첫 작품인 대구의 가죽공방 workroom8363의 홈페이지입니다. ",
        summary2:
          "HTML, CSS, Javascript, Node.js를 공부한 상태에서 시작하였습니다. 비록 완성 후 성공적 결과까지는 가지 못하였지만, 웹의 꿈을 갖게해준 페이지이기에 저에게는 소중한 사이트 입니다.",
      },
    }),
  },
  initialState
);
export default fixed;
