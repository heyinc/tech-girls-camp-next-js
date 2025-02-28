import Link from "next/link";
import items from "../data/items.json";

const ITEMS_PER_PAGE = 5;

export default async function Home({ searchParams }) {
  const { page } = await searchParams;

  const allItems = items.items;

  const currentPage = page ? parseInt(page) : 1;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage * ITEMS_PER_PAGE >= allItems.length;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-xl font-bold text-blue-600">{item.price}円</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        {isFirstPage ? (
          <span className="text-gray-400">前へ</span>
        ) : (
          <Link href={`?page=${currentPage - 1}`}>前へ</Link>
        )}

        {isLastPage ? (
          <span className="text-gray-400">次へ</span>
        ) : (
          <Link href={`?page=${currentPage + 1}`}>次へ</Link>
        )}
      </div>
    </main>
  );
}
