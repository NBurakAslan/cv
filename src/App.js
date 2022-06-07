import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SkillCardList from "./components/SkillCardList";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { useInView } from "react-intersection-observer";
function App(props) {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  console.log(inView1, inView2);
  return (
    <div>
      <div style={{ height: "101vh" }}>
        <Header></Header>
      </div>

      <div ref={ref1} style={{ height: "100vh" }}>
        {inView1 && <AboutMe></AboutMe>}
      </div>
      <div ref={ref2} style={{ height: "100vh" }}>
        {inView2 && <SkillCardList />}
      </div>
    </div>
  );
}

export default App;
