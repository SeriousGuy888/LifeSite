import { NextPage } from "next";
import React from "react";

interface StoreDataProps {
  theDate: Date;
  healthState: string;
  moodMeter: number;
}

const Store = require("electron-store");
const storage = new Store();

const StoreData: React.FC<StoreDataProps> = ({
  theDate,
  healthState,
  moodMeter,
}) => {
  function storeTheData(
    tempDate: Date,
    stateHealth: string,
    meterMood: number
  ) {
    const test = {
      theDate: tempDate,
      healthState: stateHealth,
      moodMeter: meterMood,
    };

    const data = JSON.stringify(test);

    storage.set("data", data);
    console.log(storage.get("data"));
  }

  return (
    <div
      className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
      onClick={() => storeTheData(theDate, healthState, moodMeter)}
    >
      <h2 className="text-xl">Save</h2>
    </div>
  );
};

export default StoreData;
