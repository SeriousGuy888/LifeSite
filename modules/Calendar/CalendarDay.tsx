"use client"

import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{ day: number }> = ({ day }) => {
  return (
    <div
      className="bg-gray-100 p-4 aspect-square cursor-pointer"
      onClick={() => alert(`clicked on ${day}`)}
    >
      <h2 className="text-xl">{day.toString()}</h2>
    </div>
  )
}

export default CalendarDay
