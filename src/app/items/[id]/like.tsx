"use client";

import { useState } from "react";

const EmojiFlood = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <>
        <style jsx global>{`
          @keyframes fall {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${2 + Math.random() * 3}s linear forwards`,
              fontSize: `${Math.random() * 20 + 100}px`,
            }}
          >
            ☺️
          </div>
        ))}
      </>
    </div>
  );
};

const Like = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          好き
        </button>
        <span className="text-gray-600">{count}</span>
      </div>
      {count === 10 && <EmojiFlood />}
    </>
  );
};

export default Like;
