import React from "react"

const Calendar = () => {
  return (
    <section className="grid grid-cols-7">
      {[...Array(31)].map((_, i) => {
        return <p key={i}>{i + 1}</p>
      })}
    </section>
  )
}

export default Calendar
