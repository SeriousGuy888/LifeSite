import { NextPage } from "next";
import React from "react";
import { useAtom } from "jotai";
import { DayData, dayDataAtom, selectedDayAtom } from "../../lib/state";

const Store = require("electron-store");
const storage = new Store();

declare var healthState: string;
declare var moodMeter: Number;
declare var journalEntry: string;

const ClearData = () => {
  const [, setDayData] = useAtom(dayDataAtom);
  const [selectedDay] = useAtom(selectedDayAtom);
  const defaultData = {
    theDate: selectedDay,
    moodMeter: 50,
    journalEntry: "",
    healthState: "",
  };

  function ClearTheData() {
    storage.clear("data");
    setDayData(defaultData);
    healthState = defaultData.healthState;
    moodMeter = defaultData.moodMeter;
    journalEntry = defaultData.journalEntry;
    console.log(storage.get("data"));
  }

  return (
    <div
      className="bg-gray-700 p-4 aspect-rectangle cursor-pointer rounded-xl grid place-items-center"
      onClick={() => ClearTheData()}
    >
      <h2 className="text-xl">Clear all data</h2>
    </div>
  );
};

export default ClearData;
