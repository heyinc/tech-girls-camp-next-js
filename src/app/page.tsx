import items from "../data/items.json";

export default function Home() {
  const allItems = items.items;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allItems.map((item) => (
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
    </main>
  );
}
