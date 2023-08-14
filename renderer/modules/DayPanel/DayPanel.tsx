import React, { useEffect } from "react";
import JournalField from "../JournalField/JournalField";
import MoodInput from "../MoodInput.tsx/MoodInput";
import StoringTest from "../Storing/StoringTest";
import UserInput from "../UserInputMenu/UserInputMenu";
import { NextPage } from "next";
import Store from "electron-store";
import { useAtom } from "jotai";
import { DayData, dayDataAtom, selectedDayAtom } from "../../lib/state";
import { datesAreSameDay } from "../../lib/utils";

declare var healthState: string;
declare var moodMeter: Number;
declare var journalEntry: string;

const DayPanel: NextPage<{
  className?: string;
}> = ({ className }) => {
  const [selectedDay] = useAtom(selectedDayAtom);
  const [, setDayData] = useAtom(dayDataAtom);

  const defaultData = {
    theDate: selectedDay,
    moodMeter: 50,
    journalEntry: "",
    healthState: "",
  };

  // Every time the selected day changes, update the day data by pulling
  // from storage somehow.
  useEffect(() => {
    const storage = new Store();
    const data = storage.get("data");
    if (!data || !(data instanceof Array) || data.length === 0) {
      return;
    }
    if (!selectedDay) {
      return;
    }

    let day = data.find((day) =>
      datesAreSameDay(new Date(day.theDate), selectedDay)
    );

    if (!day) {
      setDayData(defaultData);
      healthState = defaultData.healthState;
      moodMeter = defaultData.moodMeter;
      journalEntry = defaultData.journalEntry;
      return;
    }

    day.theDate = new Date(day.theDate);
    setDayData(day as DayData);
    healthState = day.healthState;
    moodMeter = day.moodMeter;
    journalEntry = day.journalEntry;
  }, [selectedDay]);

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
  );
};

export default DayPanel;
