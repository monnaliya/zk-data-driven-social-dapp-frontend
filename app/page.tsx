// app/page.tsx

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-semibold">ZK data-driven social dapp</h1>
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition">
          Connect
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center h-[80vh] space-y-8">
        <h2 className="text-5xl font-extrabold text-center leading-tight">
          The home for web3 publishing
        </h2>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </main>

      {/* Featured Section */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Featured</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-gray-100 rounded shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Celebrating Superchain Creativity</h4>
            <p className="text-gray-700">
              Announcing the winners of "We ♥ The Art", featuring over 7,000+ submissions.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              Mint
            </button>
          </article>
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
}