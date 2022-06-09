import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SkillCardList from "./components/SkillCardList";
import React, { useRef } from "react";
import classes from "./App.module.css";
import { useInView } from "react-intersection-observer";
function App(props) {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  console.log(inView1, inView2);
  return (
    <div className={classes.burak}>
      <div className={classes.page1}>
        <Header></Header>
      </div>
      <div ref={ref1} className={classes.page2}>
        {inView1 && <AboutMe></AboutMe>}
      </div>
      <div ref={ref2} className={classes.page3}>
        {inView2 && <SkillCardList />}
      </div>

      <div className={classes.page4}>
        <footer>This is the end</footer>
      </div>
    </div>
  );
}

export default App;
