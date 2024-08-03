'use client'

import { useState } from "react";

export default function Home() {

  const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
  );

  const [dataset, setDataset] = useState(generateDataset());

  setInterval(() => {
    const newDataset = generateDataset()
    setDataset(newDataset)
  }, 2000)

  return (
    <svg viewBox="0 0 100 50">
      {dataset.map(([x, y], i) => (
        <circle
          key={i + "key"}
          cx={x}
          cy={y}
          r="3"
          fill="white"
        />
      ))}
    </svg>
  )
}