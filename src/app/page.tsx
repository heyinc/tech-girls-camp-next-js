import { getItemsByPage } from "../actions/items";

const ITEMS_PER_PAGE = 5;

export default async function Home({ searchParams }) {
  const { page } = await searchParams;

  const currentPage = page ? parseInt(page) : 1;

  // Get items for the current page and check if there's a next page
  const { items: currentItems, isLastPage } = await getItemsByPage(
    currentPage,
    ITEMS_PER_PAGE
  );

  const isFirstPage = currentPage === 1;

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
              <a href={`/items/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-xl font-bold text-blue-600">
                  {item.price}円
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        {isFirstPage ? (
          <span>前へ</span>
        ) : (
          <a href={`?page=${currentPage - 1}`}>前へ</a>
        )}
        {isLastPage ? (
          <span className="text-gray-400">次へ</span>
        ) : (
          <a href={`?page=${currentPage + 1}`}>次へ</a>
        )}
      </div>
    </main>
  );
}
