import React from "react"
import Head from "next/head"
import Calendar from "../modules/Calendar/Calendar"
import DayPanel from "../modules/DayPanel/DayPanel"

function Home() {
  // Controls whether the calendar is collapsed on small screens.
  // On larger screens, the calendar is always visible.
  const [isCalendarCollapsed, setIsCalendarCollapsed] = React.useState(true)

  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <main className="flex flex-col md:flex-row min-h-screen">
        <section className="bg-gray-900 p-8 pb-12 flex-1 md:max-w-xl relative">
          <Calendar collapsed={isCalendarCollapsed} />
          <button
            aria-label="Collapse Section"
            className="absolute bottom-4 left-0 right-0 select-none md:hidden"
            onClick={() => setIsCalendarCollapsed(!isCalendarCollapsed)}
            style={{
              rotate: isCalendarCollapsed ? "180deg" : "0deg",
            }}
          >
            ^
          </button>
        </section>
        <DayPanel className="bg-gray-800 p-8 flex-1" />
      </main>
    </>
  )
}

export default Home
