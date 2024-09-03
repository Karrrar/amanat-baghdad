// pages/index.mdx

import React from "react";

export default function HomePage() {
  const fruitDetails = {
    color: "Red",
    taste: "Sweet",
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Apple Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
          <p className="text-lg text-gray-700">
            <strong>Color:</strong> {fruitDetails.color}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Taste:</strong> {fruitDetails.taste}
          </p>
        </div>
      </div>
    </>
  );
}
