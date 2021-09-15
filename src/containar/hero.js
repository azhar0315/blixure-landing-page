import React from "react";
import bgimg from "../assets/images/image1.png";
import classes from "./hero.module.css";
export const Hero = () => {
  return (
    <div className={classes.container1}>
      <img src={bgimg} alt="Italian Trulli" />
      <div className={classes.topleft1}>The Future Of Commerce Is Yours </div>
      <div class={classes.topleft2}>
        A new and improved way to help your brand reach its full potential
      </div>
    </div>
  );
};
