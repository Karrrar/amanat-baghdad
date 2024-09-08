import React from "react";

export default function ForLoopPage() {
  const items = [];

  for (let i = 1; i <= 5; i++) {
    items.push(`Item ${i}`);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Generated List
        </h1>
        <ul className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-lg text-gray-700 py-2 border-b border-gray-200 last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
