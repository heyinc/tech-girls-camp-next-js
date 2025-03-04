import items from "../../../data/items.json";
import Like from "./like";

type Props = {
  params: {
    id: string;
  };
};

export default async function ItemDetail(props: Props) {
  const item = items.find((item) => item.id === parseInt(props.params.id));

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
        className="inline-block mb-8 text-blue-600 hover:text-blue-800"
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
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-4">
              {item.price.toLocaleString()}円
            </p>
            <p className="text-gray-600">カテゴリー: {item.category}</p>
          </div>
          <Like />
        </div>
      </div>
    </main>
  );
}
