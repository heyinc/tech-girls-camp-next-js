import { getItemById } from "../../../actions/items";
import Buy from "./buy";
import Like from "./like";
type Props = {
  params: {
    id: string;
  };
};

export default async function ItemDetail(props: Props) {
  const item = await getItemById(parseInt(props.params.id));

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
          <Buy id={props.params.id} />
        </div>
      </div>
    </main>
  );
}
