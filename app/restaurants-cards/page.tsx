export default function RestaurantsCardsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header - Professional */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="text-xl font-bold text-slate-900">Shadi.ae</a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <a href="#" className="text-slate-900">Restaurants</a>
                <a href="#" className="hover:text-slate-900">Collections</a>
                <a href="#" className="hover:text-slate-900">About</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Sign In</a>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800">
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Professional */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Find your table
              <span className="block text-slate-400">for any occasion</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Discover the best restaurants in the UAE, curated by Shadi Shawqi
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by restaurant, cuisine, or dish..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "Date", icon: "📅" },
              { label: "Time", icon: "⏰" },
              { label: "Party Size", icon: "👥" },
              { label: "Cuisine", icon: "🍽️" },
            ].map((filter) => (
              <button
                key={filter.label}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300"
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 overflow-x-auto">
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 border-b-2 border-slate-900 pb-4">
                <span>Recommended</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded text-xs">124</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 pb-4">
                <span>Price</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 pb-4">
                <span>Cuisine</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 pb-4">
                <span>Rating</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
              <span>Sort by:</span>
              <select className="bg-transparent font-medium text-slate-900 focus:outline-none">
                <option>Recommended</option>
                <option>Rating</option>
                <option>Distance</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant List - Card Style */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Restaurant Card 1 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80 aspect-[4/3] md:aspect-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Al Mallah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.8</span>
                    <span className="text-xs text-slate-500">(324)</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">Al Mallah</h3>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        Open Now
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">Lebanese • $ • Satwa</p>
                  </div>
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Authentic Lebanese cuisine with a modern twist. Famous for their shawarma and manakeesh...
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Late Night
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Delivery
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Outdoor Seating
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>30 min wait</span>
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800">
                    Find a Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Card 2 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80 aspect-[4/3] md:aspect-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Arabian Tea House"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.9</span>
                    <span className="text-xs text-slate-500">(512)</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">Arabian Tea House</h3>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        Open Now
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">Emirati • $$ • Al Fahidi</p>
                  </div>
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Traditional Emirati cuisine in a heritage setting. Experience authentic flavors and hospitality...
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Breakfast
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Traditional
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Heritage
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>45 min wait</span>
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800">
                    Find a Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Card 3 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80 aspect-[4/3] md:aspect-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1541529086516-972c96c4b6a0?w=800&q=80"
                  alt="Operation Falafel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.6</span>
                    <span className="text-xs text-slate-500">(189)</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">Operation Falafel</h3>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">
                        Open Now
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">Middle Eastern • $ • Jumeirah</p>
                  </div>
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Fresh falafel and Middle Eastern street food. Quick, delicious, and affordable...
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Vegan
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Quick Bite
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Delivery
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>15 min wait</span>
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800">
                    Find a Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Card 4 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80 aspect-[4/3] md:aspect-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                  alt="BBQ Al Quoz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold">4.7</span>
                    <span className="text-xs text-slate-500">(267)</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">BBQ Al Quoz</h3>
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">
                        Busy
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">BBQ • $$ • Al Quoz</p>
                  </div>
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Authentic BBQ and grilled meats. Outdoor seating with a relaxed atmosphere...
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Outdoor
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Groups
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Live Music
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>60 min wait</span>
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800">
                    Find a Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
