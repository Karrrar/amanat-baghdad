import React from "react";

export default function HomePage() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const shouldShowList = false;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Conditional List
        </h1>
        {shouldShowList ? (
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
        ) : (
          <p className="text-xl text-red-500">The list is hidden.</p>
        )}
      </div>
    </>
  );
}
