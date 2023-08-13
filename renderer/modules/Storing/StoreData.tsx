import { NextPage } from "next";
import React from "react";

declare var theDate: Date;
globalThis.theDate = null;

declare var healthState: String;
globalThis.healthState = null;

declare var moodMeter: Number;
globalThis.moodMeter = null;

const Store = require("electron-store");
const storage = new Store();

const StoreData = () => {
  function storeTheData(
    tempDate: Date,
    stateHealth: String,
    meterMood: Number
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
