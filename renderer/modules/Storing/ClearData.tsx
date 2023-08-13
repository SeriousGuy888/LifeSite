import { NextPage } from "next";
import React from "react";

const Store = require("electron-store");
const storage = new Store();

const ClearData = () => {
  function ClearTheData() {
    storage.clear("data");
    console.log(storage.get("data"));
  }

  return (
    <div
      className="bg-gray-700 p-4 aspect-rectangle cursor-pointer rounded-xl grid place-items-center"
      onClick={() => ClearTheData()}
    >
      <h2 className="text-xl">Clear</h2>
    </div>
  );
};

export default ClearData;
