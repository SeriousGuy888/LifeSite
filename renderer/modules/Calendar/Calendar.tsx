import React, { useEffect } from "react"
import CalendarDay from "./CalendarDay"

const Calendar = () => {
  const currDate = new Date()

  const [month, setMonth] = React.useState<Date>(
    new Date(currDate.getFullYear(), currDate.getMonth()),
  )
  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.valueAsDate.getUTCFullYear()
    const month = event.target.valueAsDate.getUTCMonth()
    setMonth(new Date(year, month))
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <input
        className="bg-gray-700"
        value={month.toISOString().slice(0, 7)}
        onChange={handleChangeMonth}
        type="month"
      />
      {/* <section className="flex justify-between">
        <button
          onClick={() => {
            setMonth(new Date(month.getFullYear(), month.getMonth() - 1))
          }}
        >
          {"<"}
        </button>
        <h2 className="text-2xl">
          {month.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })}
        </h2>
        <button
          onClick={() => {
            setMonth(new Date(month.getFullYear(), month.getMonth() + 1))
          }}
        >
          {">"}
        </button>
      </section> */}
      <section className="grid grid-cols-7 gap-2">
        {[...Array(month.getDay())].map((_, i) => (
          <span key={"blank" + i}></span> // NOSONAR
        ))}
        {[...Array(getNumDaysInMonth(month))].map((_, i) => (
          <CalendarDay key={i} day={i + 1} /> // NOSONAR
        ))}
      </section>
    </div>
  )
}

function getNumDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export default Calendar
