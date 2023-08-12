import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{
  date: Date
  selectDayFunc: (day: Date) => void
}> = ({ date, selectDayFunc }) => {
  return (
    <div
      className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
      onClick={() => selectDayFunc(date)}
    >
      <h2 className="text-xl">{date.getDate().toString()}</h2>
    </div>
  )
}

export default CalendarDay
