import React, { useState } from "react"
import styles from "./Slider.module.scss"

declare var moodMeter: number

const Slider = () => {
  const [sliderVal, setSliderVal] = useState(50)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(event.target.value)
    setSliderVal(num)
    moodMeter = num
  }

  return (
    <div>
      <input
        type="range"
        className={`${styles.slider} h-4 w-full appearance-none rounded-full`}
        id="slider"
        value={sliderVal}
        onChange={handleChange}
        min={0}
        max={100}
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
