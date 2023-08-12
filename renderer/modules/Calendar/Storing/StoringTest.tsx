import React from "react";

const StoringTest = () => {
  function storeData() {
    console.log("storing");
  }
  function loadData() {
    console.log("loading");
  }

  return (
    <>
      <div
        className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
        onClick={storeData}
      >
        <h2 className="text-xl">Store</h2>
      </div>
      <div
        className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
        onClick={loadData}
      >
        <h2 className="text-xl">Load</h2>
      </div>
    </>
  );
};

export default StoringTest;
