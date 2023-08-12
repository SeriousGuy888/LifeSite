import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{ day: number }> = ({ day }) => {
  return (
    <div
      className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
      onClick={() => alert(`Nothing planed for ${day}...`)}
    >
      <h2 className="text-xl">{day.toString()}</h2>
    </div>
  )
}

export default CalendarDay
