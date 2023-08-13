import React from "react";
import StoreData from "./StoreData";
import LoadData from "./LoadData";
import ClearData from "./ClearData";

const fs = require("fs");

function StoringTest() {
  return (
    <>
      <StoreData />
      <br />
      <LoadData />
      <br />
      <ClearData />
    </>
  );
}

export default StoringTest;
