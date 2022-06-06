import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/SkillCard";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
function App(props) {
  const myRef = useRef();

  const { inViewport, enterCount, leaveCount } = useInViewport(myRef, props);
  console.log(inViewport, enterCount);
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <div ref={myRef} style={{ height: "100vh" }}>
        {inViewport && enterCount === 1 && <Skills></Skills>}
      </div>
    </div>
  );
}

export default App;
