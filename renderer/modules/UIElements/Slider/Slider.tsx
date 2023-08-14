import React from "react"
import styles from "./Slider.module.scss"
import { NextPage } from "next"

const Slider: NextPage<{
  min: number
  max: number
  value: number
  setValue: (value: number) => void
}> = ({ min, max, value, setValue }) => {
  return (
    <div>
      <input
        type="range"
        className={`${styles.slider} h-4 w-full appearance-none rounded-full`}
        id="slider"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
        min={min}
        max={max}
      />
      <label htmlFor="slider" className="w-full flex justify-between">
        <span>Unhappy</span>
        <span>Ok</span>
        <span>Happy</span>
      </label>
    </div>
  )
}

export default Slider
