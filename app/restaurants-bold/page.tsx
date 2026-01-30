export default function RestaurantsBoldPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header - Bold, Colorful */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Shadi.ae
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <a href="#" className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                Explore
              </a>
              <button className="p-3 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Bold, Colorful */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-6 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">200+ Curated Restaurants</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Craving
            </span>
            <br />
            <span className="text-gray-900">Something Good?</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Handpicked restaurants reviewed by Shadi Shawqi • Real photos • Honest opinions
          </p>

          {/* Search Bar - Bold */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex items-center bg-white rounded-3xl shadow-xl">
                <svg className="absolute left-6 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search your next favorite spot..."
                  className="w-full pl-16 pr-6 py-5 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-lg"
                />
                <button className="absolute right-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills - Colorful */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {["All Restaurants", "🌙 Late Night", "🥞 Breakfast", "🍴 Lunch", "🌮 Dinner", "🌱 Vegan", "🏖️ Outdoor", "✨ Fine Dining", "👨‍👩‍👧‍👦 Family"].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all transform hover:scale-105 ${
                  filter === "All Restaurants"
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Grid - Bold Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Al Mallah"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.8</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      $$
                    </span>
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full">
                      Lebanese
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">Al Mallah</h3>
                  <p className="text-sm text-white/80">Satwa</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Arabian Tea House"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      $$$
                    </span>
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full">
                      Emirati
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">Arabian Tea House</h3>
                  <p className="text-sm text-white/80">Al Fahidi</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1541529086516-972c96c4b6a0?w=800&q=80"
                  alt="Operation Falafel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.6</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      $
                    </span>
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full">
                      Middle Eastern
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">Operation Falafel</h3>
                  <p className="text-sm text-white/80">Jumeirah</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                  alt="BBQ Al Quoz"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.7</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      $$$
                    </span>
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full">
                      BBQ
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">BBQ Al Quoz</h3>
                  <p className="text-sm text-white/80">Al Quoz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
