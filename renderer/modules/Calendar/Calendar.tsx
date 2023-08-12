import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = () => {
  return (
    <section className="grid grid-cols-7 gap-2">
      {[...Array(31)].map((_, i) => (
        <CalendarDay key={i} day={i + 1} />
      ))}
    </section>
  )
}

export default Calendar
