import React from "react";

const Store = require("electron-store");
const storage = new Store();

declare var theDate: Date;

const LoadData = () => {
  function loadTheData() {
    const data = storage.get("data"); //get all the data

    //finding the one date chosen
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const storedDate = new Date(data[i].theDate);
        const actualDate = new Date(theDate);
        if (
          storedDate.getDay() == actualDate.getDay() &&
          storedDate.getMonth() == actualDate.getMonth() &&
          storedDate.getFullYear() == actualDate.getFullYear()
        ) {
          //get the data only for that day
          const loadedData = {
            theDate: data[i].theDate,
            healthState: data[i].healthState,
            moodMeter: data[i].moodMeter,
          };
          console.log(loadedData);
          //set the frontend health state and mood meter
        }
      }
    } else {
      console.log("nothing to load");
    }
  }
  return (
    <div
      className="bg-gray-700 p-4 aspect-rectangle cursor-pointer rounded-xl grid place-items-center"
      onClick={() => loadTheData()}
    >
      <h2 className="text-xl">Load</h2>
    </div>
  );
};

export default LoadData;
