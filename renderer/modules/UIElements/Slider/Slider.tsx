import React from "react";
import styles from "./Slider.module.scss";

declare var moodMeter: Number;

const Slider = () => {
  return (
    <div>
      <input
        type="range"
        className={`${styles.slider} h-4 w-full appearance-none rounded-full`}
        id="slider"
        min={0}
        max={100}
      />
      <label htmlFor="slider">Sad                                           Ok                                         Happy</label>
    </div>
  );
};

export default Slider;
