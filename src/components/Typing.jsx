import React from "react";

const Typing = () => {
  function typingFunc(typingTxt) {
    if (typingIdx < typingTxt.length) {
      const typingValue = typingTxt[typingIdx];
      typingValueArray.push(typingValue);
      const toStringArray = typingValueArray.toString();
      var to = toStringArray.replace(/,/gi, "");
      document.querySelector(".typing").innerText = to;
      typingIdx++;
    } else if (typingIdx < typingTxt.length * 2) {
      popFunc();
      typingIdx++;
    } else {
      clearInterval();
    }
  }
  function popFunc() {
    typingValueArray.pop();
    const toStringArray = typingValueArray.toString();
    var to = toStringArray.replace(/,/gi, "");
    document.querySelector(".typing").innerText = to;
  }
  useEffect(() => {
    setInterval(() => {
      if (text === "") {
        clearInterval();
      } else {
        const typingTxt = text.split("");
        typingFunc(typingTxt);
      }
    }, 100);
  }, [text]);

  return <div></div>;
};

export default Typing;
