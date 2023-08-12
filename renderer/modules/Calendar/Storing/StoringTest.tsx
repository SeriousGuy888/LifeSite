import React from "react";

const StoringTest = () => {
  return (
    <div
      className="bg-gray-700 p-4 aspect-square cursor-pointer rounded-xl grid place-items-center"
      onClick={() => alert(`clicked on store`)}
    >
      <h2 className="text-xl">Store</h2>
    </div>
  );
};

export default StoringTest;
