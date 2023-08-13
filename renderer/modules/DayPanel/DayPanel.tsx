import React from "react"
import JournalField from "../JournalField/JournalField"
import MoodInput from "../MoodInput.tsx/MoodInput"
import StoringTest from "../Storing/StoringTest"
import UserInput from "../UserInputMenu/UserInputMenu"
import { NextPage } from "next"

const DayPanel: NextPage<{
  className?: string
}> = ({className}) => {
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

export default DayPanel
