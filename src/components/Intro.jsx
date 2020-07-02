import React from "react";
import Typing from "./Typing";

const IntroWrapper = styled.div``;

const Intro = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setText("안녕하세요. 풀스텍 개발자를 꿈꾸는 김길현이라고 합니다.");
    }, 3000);
  }, []);
  return (
    <IntroWrapper>
      <Typing />
    </IntroWrapper>
  );
};

export default Intro;
