import React from "react"
import Head from "next/head"
import Link from "next/link"
import Calendar from "../modules/Calendar/Calendar"
import UserInput from "../modules/UserInputMenu/UserInputMenu"
import { useAtom } from "jotai"
import { selectedDayAtom } from "../lib/state"
import MoodInput from "../modules/MoodInput.tsx/MoodInput"
import StoringTest from "../modules/Storing/StoringTest"
import JournalField from "../modules/JournalField/JournalField"

function Home() {
  const [selectedDay] = useAtom(selectedDayAtom)

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
        <section className="bg-gray-800 p-8 flex-1">
          <h1 className="text-2xl text-white mb-4">Selected Day</h1>
          <p className="text-white mb-4">{selectedDay.toDateString()}</p>
          <UserInput />
          <div className="grid grid-cols-1 gap-8 mt-8">
            <MoodInput />
            <JournalField />
            <div>
              <StoringTest />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
