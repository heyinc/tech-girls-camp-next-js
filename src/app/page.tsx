export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="p-4">
            <img
              src="https://placehold.jp/150x150.png"
              alt="商品画像"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">タイトル</h2>
            <p className="text-gray-600 mb-2">説明</p>
            <p className="text-xl font-bold text-blue-600">1000円</p>
          </div>
        </div>
      </div>
    </main>
  );
}
