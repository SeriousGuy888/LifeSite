import { NextPage } from "next";
import React from "react";

interface StoreDataProps {
  healthState: string;
  moodMeter: number;
}

const StoreData: React.FC<StoreDataProps> = ({ healthState, moodMeter }) => {
  const fs = require("fs");

  function storeTheData(stateHealth: string, meterMood: number) {
    const test = {
      healthState: stateHealth,
      moodMeter: meterMood,
    };

    const data = JSON.stringify(test);

    fs.writeFile("renderer/public/data.json", data, (error) => {
      // throwing the error
      // in case of a writing problem
      if (error) {
        // logging the error
        console.error(error);
        throw error;
      }
      console.log("data.json written correctly");
    });
  }

  return (
    <div
      className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
      onClick={() => storeTheData(healthState, moodMeter)}
    >
      <h2 className="text-xl">Save</h2>
    </div>
  );
};

export default StoreData;
