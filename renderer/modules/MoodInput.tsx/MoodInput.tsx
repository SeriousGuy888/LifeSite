import React from "react"
import Slider from "../UIElements/Slider/Slider"

const MoodInput = () => {
  return (
    <div className="rounded-md bg-gray-700 p-4">
      <h2 className="text-2xl">Mood Meter</h2>
      <p className="text-gray-300">How are you feeling today?</p>

      <div className="my-4">
        <Slider />
      </div>
    </div>
  )
}

export default MoodInput
