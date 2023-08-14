import React, { useEffect } from "react"
import JournalField from "../JournalField/JournalField"
import MoodInput from "../MoodInput.tsx/MoodInput"
import StoringTest from "../Storing/StoringTest"
import UserInput from "../UserInputMenu/UserInputMenu"
import { NextPage } from "next"
import Store from "electron-store"
import { useAtom } from "jotai"
import { DayData, dayDataAtom, selectedDayAtom } from "../../lib/state"

const storage = new Store()
const data = storage.get("data")

const DayPanel: NextPage<{
  className?: string
}> = ({ className }) => {
  const [selectedDay] = useAtom(selectedDayAtom)
  const [, setDayData] = useAtom(dayDataAtom)

  // Every time the selected day changes, update the day data by pulling
  // from storage somehow.
  useEffect(() => {
    if (!data || !(data instanceof Array) || data.length === 0) {
      return
    }
    if (!selectedDay) {
      return
    }

    let day = data.find((day) =>
      datesAreSameDay(new Date(day.theDate), selectedDay),
    )

    if (!day) {
      return
    }

    day.theDate = new Date(day.theDate)
    setDayData(day as DayData)
  }, [selectedDay])

  return (
    <section className={className}>
      <UserInput />
      <div className="grid grid-cols-1 gap-8 mt-8">
        <MoodInput />
        <JournalField />
        <div>
          <StoringTest />
        </div>
      </div>
    </section>
  )
}

function datesAreSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export default DayPanel
