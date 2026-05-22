export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-green-50 dark:bg-green-950 font-sans">
      <main className="flex flex-col items-center gap-8 text-center px-6 py-20">
        <h1 className="text-6xl font-extrabold tracking-tight text-green-700 dark:text-green-300">
          Daniskinjuice
        </h1>
        <p className="max-w-md text-xl text-green-800 dark:text-green-200">
          Fresh flavors, delivered to your door. Cold-pressed juices made with love.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#menu"
            className="rounded-full bg-green-600 px-8 py-3 text-white font-semibold hover:bg-green-700 transition-colors"
          >
            See Our Menu
          </a>
          <a
            href="#order"
            className="rounded-full border-2 border-green-600 px-8 py-3 text-green-700 dark:text-green-300 font-semibold hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
          >
            Order Now
          </a>
        </div>
      </main>
    </div>
  );
}
