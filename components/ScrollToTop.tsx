'use client'

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 text-gray-400 hover:text-white transition-all duration-300 text-sm"
      aria-label="Back to top"
    >
      <span>Back to top</span>
      <svg 
        className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}