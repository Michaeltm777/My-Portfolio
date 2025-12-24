export default function EcommerceDemo() {
  return (
    <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gold rounded"></div>
            <span className="font-bold text-lg">ShopHub</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gold transition">Home</a>
            <a href="#" className="hover:text-gold transition">Products</a>
            <a href="#" className="hover:text-gold transition">About</a>
            <a href="#" className="hover:text-gold transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <button className="bg-gold text-black px-4 py-2 rounded font-semibold">Sign In</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold/20 to-gray-100 p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to ShopHub
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover amazing products at unbeatable prices
        </p>
        <button className="bg-gold text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition">
          Shop Now
        </button>
      </section>

      {/* Products Grid */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">📦</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Product {item}</h3>
                <p className="text-gray-600 text-sm mb-3">High quality product description</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold">$99.99</span>
                  <button className="bg-gold text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

