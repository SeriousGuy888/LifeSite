import React, { useEffect } from "react"
import CalendarDay from "./CalendarDay"

import { useAtom } from "jotai"
import { selectedDayAtom } from "../../lib/state"
import MonthPicker from "./MonthPicker"

declare var theDate: Date

export interface Month {
  year: number
  month: number
}

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom)

  const currDate = new Date()
  const currMonth = {
    year: currDate.getFullYear(),
    month: currDate.getMonth(),
  }

  const [month, setMonth] = React.useState<Month>(currMonth)

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date)
    theDate = date
  }

  const daysOfWeek = getDaysOfWeek()

  return (
    <div className="grid grid-cols-1 gap-8">
      <section className="flex justify-between">
        <h2 className="text-3xl font-bold">
          {getMonthDate(month).toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <MonthPicker month={month} setMonth={setMonth} currMonth={currMonth} />
      </section>
      <section className="grid grid-cols-7 grid-rows-[0.25fr_repeat(6,minmax(0,1fr))] gap-2 select-none">
        {daysOfWeek.map((day) => (
          <span
            key={day}
            className="text-center uppercase font-bold bg-gray-700 rounded-md text-gray-300 text-sm tracking-wide"
          >
            {day}
          </span>
        ))}
        {[...Array(getMonthDate(month).getDay())].map((_, i) => (
          <span key={"blank" + i}></span> // NOSONAR
        ))}
        {[...Array(getNumDaysInMonth(month))].map((_, i) => {
          const date = new Date(month.year, month.month, i + 1)
          const isInFuture = date.getTime() > currDate.getTime()
          return (
            <CalendarDay
              key={date.toISOString()}
              date={date}
              selectDayFunc={handleSelectDay}
              isSelected={selectedDay?.toISOString() === date.toISOString()}
              isDisabled={isInFuture}
            />
          )
        })}
      </section>
    </div>
  )
}

function getDaysOfWeek() {
  const baseSunday = new Date(2023, 7, 13) // 2023-08-13 is a Sunday
  const daysOfWeek = []
  const msPerDay = 1000 * 60 * 60 * 24
  for (let i = 0; i < 7; i++) {
    const date = new Date(baseSunday.getTime() + i * msPerDay)
    daysOfWeek.push(date)
  }

  return daysOfWeek.map((date) =>
    date.toLocaleDateString(undefined, { weekday: "short" }),
  )
}

function getNumDaysInMonth(month: Month) {
  return new Date(month.year, month.month + 1, 0).getDate()
}

function getMonthDate(month: Month) {
  return new Date(month.year, month.month, 1)
}

export default Calendar
