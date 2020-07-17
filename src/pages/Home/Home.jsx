import React, { useRef, useEffect } from "react";
import { Main, About, Geography, Project, Footer } from "./components";
import FixedContainer from "./containers/FixedContainer";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

const Home = () => {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const mainRef = useRef(null);
  const geoRef = useRef(null);
  const proRef = useRef(null);

  const aboutScroll = () => scrollToRef(aboutRef);
  const footerScroll = () => scrollToRef(footerRef);

  let className = "block";

  const MouseWheelHandler = (e) => {
    e.preventDefault();
    let delta = 0;
    if (!e) e = window.e;
    if (e.wheelDelta) {
      delta = e.wheelDelta / 150;
      if (window.opera) delta = -delta;
    } else if (e.detail) delta = -e.detail / 3;
    console.log(elm[0] === e.currentTarget);
    let target = e.currentTarget;
    if (elm[0] === target) {
      if (delta < 0) {
        scrollToRef(aboutRef);
      } else if (delta > 0) {
        return;
      }
    } else if (elm[1] === target) {
      if (delta < 0) {
        scrollToRef(geoRef);
      } else if (delta > 0) {
        scrollToRef(mainRef);
      }
    } else if (elm[2] === target) {
      if (delta < 0) {
        scrollToRef(proRef);
      } else if (delta > 0) {
        scrollToRef(aboutRef);
      }
    } else if (elm[3] === target) {
      if (delta < 0) {
        scrollToRef(footerRef);
      } else if (delta > 0) {
        scrollToRef(geoRef);
      }
    } else if (elm[4] === target) {
      if (delta < 0) {
        return;
      } else if (delta > 0) {
        scrollToRef(proRef);
      }
    }
  };
  var elm = document.getElementsByClassName(className);
  useEffect(() => {
    window.onload = function () {
      for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener("mousewheel", MouseWheelHandler);
        elm[i].addEventListener("DOMMouseScroll", MouseWheelHandler, true);
      }
    };
  }, []);

  return (
    <>
      <div ref={mainRef}></div>
      <Main aboutScroll={aboutScroll} className="block" />
      <div ref={aboutRef}></div>
      <About footerScroll={footerScroll} className="block" />
      <div ref={geoRef}></div>
      <Geography className="block" />
      <div ref={proRef}></div>
      <Project className="block" />
      <div ref={footerRef}></div>
      <Footer className="block" />
      <FixedContainer />
    </>
  );
};

export default Home;
