import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{
  date: Date
  selectDayFunc: (day: Date) => void
  isSelected: boolean
}> = ({ date, selectDayFunc, isSelected }) => {
  return (
    <div
      className={`p-1 aspect-square cursor-pointer rounded-md grid place-items-center ${
        isSelected ? "bg-blue-700" : "bg-gray-700"
      }`}
      onClick={() => selectDayFunc(date)}
    >
      <p className="text-xl">{date.getDate().toString()}</p>
    </div>
  )
}

export default CalendarDay
