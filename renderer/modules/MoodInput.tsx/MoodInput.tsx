import React, { useState } from "react"
import Slider from "../UIElements/Slider/Slider"
import { NextPage } from "next"

declare var moodMeter: number

const MoodInput: NextPage<{}> = () => {
  const [sliderVal, setSliderVal] = useState(50)

  const handleChange = (value: number) => {
    setSliderVal(value)
    moodMeter = value
  }

  return (
    <div className="rounded-md bg-gray-700 p-4">
      <h2 className="text-2xl">Mood Meter</h2>
      <p className="text-gray-300">How are you feeling today?</p>

      <div className="my-4">
        <Slider min={0} max={100} value={sliderVal} setValue={handleChange} />
      </div>
    </div>
  )
}

export default MoodInput
