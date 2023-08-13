import React from "react";
import StoreData from "./StoreData";
import ClearData from "./ClearData";

const fs = require("fs");

function StoringTest() {
  return (
    <>
      <StoreData />
      <ClearData />
    </>
  );
}

export default StoringTest;
