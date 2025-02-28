import Database from "better-sqlite3";
import path from "path";
import Like from "./like";

type Props = {
  params: {
    id: string;
  };
};

interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  totalSales: number;
}

export default async function ItemDetail({ params }: Props) {
  const dbPath = path.join(process.cwd(), "items.db");
  const db = new Database(dbPath, { verbose: console.log });
  const item = db
    .prepare("SELECT * FROM items WHERE id = ?")
    .get(parseInt(params.id)) as Item | undefined;

  if (!item) {
    return (
      <main>
        <h1>商品が見つかりませんでした</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <a
        href="/"
        className="inline-block m-4 text-blue-600 hover:text-blue-800"
      >
        ← 商品一覧に戻る
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold m-1">{item.name}</h1>
          <p className="text-gray-600 m-8">{item.description}</p>
          <div className="bg-blue-100 m-4 p-6 rounded-lg ">
            <p className="text-3xl font-bold text-blue-600">
              {item.price.toLocaleString()}円
            </p>
            <p className="text-gray-600 m-2">カテゴリー: {item.category}</p>
          </div>
          <Like />
        </div>
      </div>
    </main>
  );
}
