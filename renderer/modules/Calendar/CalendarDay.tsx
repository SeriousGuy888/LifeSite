import { NextPage } from "next"
import React from "react"

const CalendarDay: NextPage<{
  date: Date
  selectDayFunc: (day: Date) => void
  isSelected: boolean
  isDisabled: boolean
}> = ({ date, selectDayFunc, isSelected, isDisabled }) => {
  return (
    <div
      className={`p-1 aspect-square rounded-md grid place-items-center ${
        isSelected ? "bg-blue-700" : isDisabled ? "bg-gray-800" : "bg-gray-700"
      }`}
      style={{
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onClick={() => {
        if (!isDisabled) {
          selectDayFunc(date)
        }
      }}
    >
      <p className="text-xl">{date.getDate().toString()}</p>
    </div>
  )
}

export default CalendarDay
