"use client";

import { MessageCircle, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Optional: Hide button on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-5 md:right-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <a
        href="https://wa.me/265882131909"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-br from-[#25D366] to-emerald-500 hover:from-emerald-500 hover:to-green-600 text-white p-3 sm:p-3.5 md:p-4 rounded-full shadow-xl md:shadow-2xl flex items-center gap-1.5 sm:gap-2 transition-all duration-300 group hover:scale-105 md:hover:scale-110 hover:shadow-2xl md:hover:shadow-3xl"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Icon */}
        <div className="relative">
          <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
          
          {/* Phone icon that appears on hover - only on md+ */}
          <Smartphone 
            className={`absolute top-0 left-0 w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 transition-all duration-300 hidden md:block ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
        </div>
        
        {/* Text that slides in on hover - only on md+ */}
        <span className="hidden md:inline font-semibold max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 md:group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-sm md:text-base">
          WhatsApp
        </span>
        
        {/* Pulsing ring effect - scaled for screens */}
        <span className="absolute -inset-0.5 sm:-inset-1 md:-inset-1 rounded-full bg-[#25D366]/30 -z-10 animate-ping"></span>
        
        {/* Outer glow effect - scaled for screens */}
        <span className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-full bg-[#25D366]/20 -z-20 animate-pulse"></span>
        
        {/* Notification dot - scaled for screens */}
        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-1 md:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse border border-white md:border-2"></span>
      </a>
      
      {/* Tooltip - only on md+ screens */}
      <div className={`hidden md:block absolute right-full mr-3 md:mr-4 mb-2 bottom-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
      }`}>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-green-400">+265 888 665 477</span>
          <span className="text-gray-300">• Quick response</span>
        </div>
      </div>
      
      {/* Animated chat bubbles - only on lg+ screens */}
      <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 hidden lg:block">
        <div className={`relative transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-bounce ml-3 md:ml-4" style={{ animationDelay: '150ms' }}></div>
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce ml-6 md:ml-8" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}