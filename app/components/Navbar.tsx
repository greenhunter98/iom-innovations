'use client'

import { useState } from "react"
import Link from "next/link"
import { Home, ChevronDown, Sparkles, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#" 
            className="flex items-center gap-2 md:gap-3 group relative"
            aria-label="Home"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              {/* Logo glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Logo container */}
              <div className="relative bg-white rounded-lg md:rounded-xl p-2 md:p-3 border border-gray-200 group-hover:border-blue-200 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                    I·O·M
                  </span>
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight leading-tight">
                INNOVATIONS
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-600 font-medium tracking-wider mt-0.5 leading-tight">
                BUSINESS CONSULTANCY
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0 lg:gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2.5 text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 group"
                >
                  {item.icon && (
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                      {item.icon}
                    </span>
                  )}
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.label === "Services" && (
                    <ChevronDown className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-400 group-hover:text-blue-500 group-hover:rotate-180 transition-all duration-200" />
                  )}
                </Link>
                
                {/* Active indicator line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
            
            {/* Separator */}
            <div className="hidden lg:block h-6 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-2 lg:mx-3" />
            
            {/* CTA Button */}
            <Link
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs md:text-sm font-semibold px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] ml-2 lg:ml-0"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative flex items-center gap-1 lg:gap-2">
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="whitespace-nowrap">Get Started</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-0.5 lg:group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H3" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 md:p-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            <div className="space-y-1.5">
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <X className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
              ) : (
                // Hamburger icon when menu is closed
                <>
                  <span className="block w-5 md:w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-200 group-hover:w-4 md:group-hover:w-5" />
                  <span className="block w-5 md:w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-200" />
                  <span className="block w-5 md:w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-200 group-hover:w-4 md:group-hover:w-5" />
                </>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-2 pb-2' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-1 pt-2 border-t border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-3 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
                onClick={closeMobileMenu}
              >
                {item.icon && (
                  <span className="text-gray-500">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-center hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              onClick={closeMobileMenu}
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}