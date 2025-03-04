"use client";

import { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        好き
      </button>
      <span className="text-gray-600">{count}</span>
    </div>
  );
};

export default Like;
