import { publicDecrypt } from "crypto";
import React from "react";
import { datesAreSameDay } from "../../lib/utils";

const Store = require("electron-store");
const storage = new Store();

declare var theDate: Date;
declare var healthState: string;
declare var moodMeter: Number;
declare var journalEntry: string;

function loadTheData() {
  const data = storage.get("data"); //get all the data

  //finding the one date chosen
  if (data != undefined) {
    for (let i = 0; i < data.length; i++) {
      const storedDate = new Date(data[i].theDate);
      const actualDate = new Date(theDate);
      if (datesAreSameDay(storedDate, actualDate)) {
        //get the data only for that day
        const loadedData = {
          theDate: data[i].theDate,
          healthState: data[i].healthState,
          moodMeter: data[i].moodMeter,
          journalEntry: data[i].journalEntry,
        };
        console.log(loadedData);
        //set the frontend health state and mood meter
        healthState = loadedData.healthState;
        moodMeter = loadedData.moodMeter;
        journalEntry = loadedData.journalEntry;
        publishLoad("LoadData", loadedData);
        return;
      }
    }
  } else {
    console.log("nothing to load");
  }
}

const LoadData = () => {
  return (
    <div
      className="bg-gray-700 p-4 aspect-rectangle cursor-pointer rounded-xl grid place-items-center"
      onClick={() => loadTheData()}
    >
      <h2 className="text-xl">Load</h2>
    </div>
  );
};

function subscribeLoad(eventName, listener) {
  document.addEventListener(eventName, listener);
}

function unsubscribeLoad(eventName, listener) {
  document.removeEventListener(eventName, listener);
}

function publishLoad(eventName, data) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { subscribeLoad, unsubscribeLoad, publishLoad };

export default LoadData;
