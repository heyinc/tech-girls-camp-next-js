import items from "../../../data/items.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ItemDetail(props: Props) {
  const item = items.items.find(
    (item) => item.id === parseInt(props.params.id)
  );

  if (!item) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← 商品一覧に戻る</Link>
      <img src={item.image} alt={item.name} width={300} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price.toLocaleString()}円</p>
      <p>カテゴリー: {item.category}</p>
    </main>
  );
}
