import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{
  date: Date
  selectDayFunc: (day: Date) => void
  isSelected: boolean
  isInFuture: boolean
}> = ({ date, selectDayFunc, isSelected, isInFuture: isDisabled }) => {
  return (
    <div
      className={`cursor-pointer p-1 aspect-square rounded-md grid place-items-center ${
        isSelected ? "bg-blue-700" : isDisabled ? "bg-gray-800" : "bg-gray-700"
      }`}
      onClick={() => {
        selectDayFunc(date)
      }}
    >
      <p className="text-xl">{date.getDate().toString()}</p>
    </div>
  )
}

export default CalendarDay
