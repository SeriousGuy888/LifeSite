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
    const data = {
      theDate: tempDate,
      healthState: stateHealth,
      moodMeter: meterMood,
    };

    if (data.theDate == null) {
      data.theDate = new Date();
    }
    if (data.moodMeter == null) {
      data.moodMeter = 50;
    }

    //how to store data
    //find if one with current date already exists, if so, replace every value in it but the date
    //if it doesn't exist, append to the array
    var storageData = storage.get("data");

    if (storageData == undefined) {
      storageData = [];
      storageData.push(data);
    } else {
      var isDuplicate = false;
      for (let i = 0; i < storageData.length; i++) {
        const storedDate = new Date(storageData[i].theDate);
        const dataDate = new Date(data.theDate);
        if (
          storedDate.getDay() == dataDate.getDay() &&
          storedDate.getMonth() == dataDate.getMonth() &&
          storedDate.getFullYear() == dataDate.getFullYear()
        ) {
          console.log("duplicate detected");
          storageData[i].healthState = data.healthState;
          storageData[i].moodMeter = data.moodMeter;
          isDuplicate = true;
          break;
        }
      }
      if (isDuplicate == false) {
        storageData.push(data);
        console.log("not a duplicate");
      }
    }

    //storageData.push(data);
    storage.set("data", storageData);
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
