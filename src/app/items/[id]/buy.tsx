"use client";

import { useEffect, useState } from "react";
import { buyItem } from "../../../actions/items";

type Props = {
  id: string;
};

export default function Buy(props: Props) {
  const { id } = props;
  const [isBought, setIsBought] = useState(false);

  const handleBuy = async () => {
    await buyItem(parseInt(id));
    setIsBought(true);
  };

  useEffect(() => {
    if (isBought) {
      setTimeout(() => {
        setIsBought(false);
      }, 3000);
    }
  }, [isBought]);

  return (
    <>
      <div className="flex items-center gap-2">
        {isBought ? (
          <span className="bg-green-500 text-white px-4 py-2 rounded-md">
            購入ありがとうございます
          </span>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => handleBuy()}
          >
            購入
          </button>
        )}
      </div>
    </>
  );
}
