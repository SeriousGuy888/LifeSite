import React from "react"
import Slider from "../UIElements/Slider/Slider"
import { NextPage } from "next"
import { useAtom } from "jotai"
import { dayDataAtom } from "../../lib/state"

declare var moodMeter: number

const MoodInput: NextPage = () => {
  const [dayData, setDayData] = useAtom(dayDataAtom)

  const handleChange = (value: number) => {
    let dayDataCopy = { ...dayData }
    dayDataCopy.moodMeter = value
    setDayData(dayDataCopy)

    moodMeter = value
  }

  return (
    <div className="rounded-md bg-gray-700 p-4">
      <h2 className="text-2xl">Mood Meter</h2>
      <p className="text-gray-300">How are you feeling today?</p>

      <div className="my-4">
        <Slider
          min={0}
          max={100}
          value={dayData.moodMeter}
          setValue={handleChange}
        />
      </div>
    </div>
  )
}

export default MoodInput
