import items from "../../../data/items.json";

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
    <main>
      <a href="/">← 商品一覧に戻る</a>
      <img src={item.image} alt={item.name} width={300} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price.toLocaleString()}円</p>
      <p>カテゴリー: {item.category}</p>
    </main>
  );
}
