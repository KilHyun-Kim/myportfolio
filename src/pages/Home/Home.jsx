import React, { useRef } from "react";
import { Main, About, Geography, Project, Footer } from "./components";
import FixedContainer from "./containers/FixedContainer";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

const Home = () => {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const aboutScroll = () => scrollToRef(aboutRef);
  const footerScroll = () => scrollToRef(footerRef);
  return (
    <>
      <Main aboutScroll={aboutScroll} />
      <div ref={aboutRef}></div>
      <About footerScroll={footerScroll} />
      <Geography />
      <Project />
      <div ref={footerRef}></div>
      <Footer />
      <FixedContainer />
    </>
  );
};

export default Home;
