import React from "react";
import StoreData from "./StoreData";
import ClearData from "./ClearData";

const fs = require("fs");

function StoringTest() {
  return (
    <>
      <StoreData
        theDate={new Date()}
        healthState={"physically healthy"}
        moodMeter={5}
      />
      <ClearData />
    </>
  );
}

export default StoringTest;
