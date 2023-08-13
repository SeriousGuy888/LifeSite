import React from "react";
import StoreData from "./StoreData";

const fs = require("fs");

function StoringTest() {
  function loadData() {
    fs.readFile("renderer/public/data.json", (error, data) => {
      // if the reading process failed,
      // throwing the error
      if (error) {
        // logging the error
        console.error(error);

        throw error;
      }

      // parsing the JSON object
      // to convert it to a JavaScript object
      const user = JSON.parse(data);

      // printing the JavaScript object
      // retrieved from the JSON file
      console.log(user);
    });
  }

  return (
    <>
      <StoreData healthState={"physically healthy"} moodMeter={5} />
    </>
  );
}

export default StoringTest;
