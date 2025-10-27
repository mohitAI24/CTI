export default function DeploymentOptions() {
  return (
    <section className="bg-gradient-to-b from-black via-slate-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What are features of our CTI Platform</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Open Source */}
          <div className="p-8 bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
            <h3 className="text-2xl font-bold text-white mb-4">Open Source</h3>
            <p className="text-gray-300 mb-6">
              Deploy OpenCTI Community Edition on-premise using the open source releases and get help by subscribing to
              a Filigran support package.
            </p>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
            >
              Install now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                />
              </svg>
            </a>
          </div>

          {/* SaaS */}
          <div className="p-8 bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
            <h3 className="text-2xl font-bold text-white mb-4">SaaS</h3>
            <p className="text-gray-300 mb-6">
              Enjoy a fully managed OpenCTI Enterprise Edition hosted by Filigran with self service provisioning and
              support included.
            </p>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Enterprise Edition */}
          <div className="p-8 bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Edition</h3>
            <p className="text-gray-300 mb-6">
              Deploy OpenCTI Enterprise Edition in SaaS or on premise option to access advanced automation and AI
              features, along with our comprehensive support package.
            </p>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
