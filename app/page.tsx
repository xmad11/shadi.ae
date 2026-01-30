import Link from "next/link"

export default function HomePage() {
  const designs = [
    {
      id: "minimal",
      name: "Option 1: Clean/Minimal",
      description: "Airbnb-inspired design with generous whitespace, clean typography, and subtle interactions",
      url: "/restaurants-minimal",
      color: "from-gray-900 to-gray-600",
      preview: "Minimal & Elegant",
    },
    {
      id: "bold",
      name: "Option 2: Bold/Colorful",
      description: "Instagram-inspired with vibrant gradients, bold typography, and eye-catching animations",
      url: "/restaurants-bold",
      color: "from-orange-500 to-pink-500",
      preview: "Bold & Vibrant",
    },
    {
      id: "cards",
      name: "Option 3: Modern/Cards",
      description: "Resy/OpenTable-style professional card layout with rich information and clear CTAs",
      url: "/restaurants-cards",
      color: "from-slate-700 to-slate-900",
      preview: "Professional & Detailed",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Shadi.ae</h1>
              <p className="text-sm text-slate-600">Design Options</p>
            </div>
            <div className="text-sm text-slate-500">
              Pick your favorite style →
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Choose Your Design
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            3 different approaches to the restaurant listing page. Click to preview each one.
          </p>
        </div>
      </section>

      {/* Design Options */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designs.map((design) => (
              <Link
                key={design.id}
                href={design.url}
                className="group block"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300">
                  {/* Preview Badge */}
                  <div className={`h-3 bg-gradient-to-r ${design.color}`}></div>

                  <div className="p-8">
                    {/* Preview Label */}
                    <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700 mb-6">
                      {design.preview}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-pink-600 transition-all">
                      {design.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {design.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-4 transition-all">
                      <span>Preview Design</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Quick Comparison</h3>
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Minimal</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Bold</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Cards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Whitespace</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Generous</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Moderate</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Compact</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Typography</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Light</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Heavy/Bold</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Professional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Colors</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Black/White</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Gradients</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Slate tones</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Card Style</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Image only</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Overlay text</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Full details</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Best For</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Modern aesthetic</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Social appeal</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900 font-medium">Information</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-slate-500">
          <p>Preview all designs and tell me which one you prefer!</p>
        </div>
      </footer>
    </main>
  )
}
