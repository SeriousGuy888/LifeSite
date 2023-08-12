import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{ day: number }> = ({ day }) => {
  return (
    <div className="bg-gray-100 p-8 aspect-square">
      <h2 className="text-xl">{day.toString()}</h2>
    </div>
  )
}

export default CalendarDay
