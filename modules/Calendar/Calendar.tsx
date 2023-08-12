import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = () => {
  return (
    <section className="grid grid-cols-7 gap-2">
      {[...Array(31)].map((_, i) => (
        <CalendarDay day={i} />
      ))}
    </section>
  )
}

export default Calendar
