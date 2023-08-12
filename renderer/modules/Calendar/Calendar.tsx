import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = () => {
  const [month, setMonth] = React.useState<Date>(new Date())

  return (
    <div className="grid grid-cols-1 gap-4">
      <section className="flex justify-between">
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
      </section>
      <section className="grid grid-cols-7 gap-2">
        {[...Array(31)].map((_, i) => (
          <CalendarDay key={i} day={i + 1} />
        ))}
      </section>
    </div>
  )
}

export default Calendar
