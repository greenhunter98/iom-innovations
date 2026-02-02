import { ArrowRight, Target, TrendingUp, Users, MapPin } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "Business Consulting & Digital Innovation",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Data-Driven Strategies",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Serving Startups & Growing Companies",
    },
  ];

  const stats = [
    { value: "10+", label: "Successful Projects", gradient: "from-blue-500 to-blue-600" },
    { value: "5+", label: "months Experience", gradient: "from-cyan-500 to-cyan-600" },
    { value: "10+", label: "Happy Clients", gradient: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0LjVWMzZIMjR2LTEuNWgxMnptMCAzVjM5SDI0di0xLjZoMTJ6bTAtM1YzNkgyNHYtMS41aDEyem0wLTNWMzNIMjR2LTEuNWgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 xl:gap-20">
          {/* Left Column - Content */}
          <div className="md:flex-1 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-4 py-2 rounded-full text-sm md:text-base font-medium border border-blue-500/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Now Accepting New Clients
            </div>

            {/* Headline */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight">
                  <span className="block text-white mb-2 md:mb-3">We Are Now</span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    In Operation
                  </span>
                </h1>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4 md:mt-6"></div>
              </div>
              
              <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
                A registered consultancy firm delivering professional business,
                marketing, and technology solutions to help businesses thrive in
                Malawi&apos;s competitive market.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 md:space-y-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start md:items-center gap-3 md:gap-4 group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-gray-200 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300 leading-snug md:leading-normal">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Location - Mobile/Tablet */}
            <div className="pt-4 md:pt-6 lg:hidden">
              <div className="inline-flex items-center gap-3 md:gap-4 bg-white/5 rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-200">
                    <span className="font-medium text-blue-400">Based in Mzuzu, Malawi</span>
                    <span className="text-gray-500 mx-1 md:mx-2">•</span>
                    <span>Serving nationwide</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column - Stats for MD/LG screens */}
          <div className="hidden md:block lg:hidden md:flex-1 md:ml-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 md:p-5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-xl">
                    {/* Number */}
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-300 text-sm md:text-base font-medium">
                      {stat.label.split(' ')[0]}
                    </div>
                    
                    {/* Subtitle */}
                    <div className="text-gray-500 text-xs md:text-sm mt-0.5">
                      {stat.label.split(' ').slice(1).join(' ')}
                    </div>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r ${stat.gradient} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats for XL+ screens */}
          <div className="hidden lg:block relative flex-1">
            {/* Background circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full"></div>
            
            {/* Stats grid */}
            <div className="relative grid grid-cols-3 gap-4 xl:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl xl:rounded-2xl p-5 xl:p-6 2xl:p-8 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-500/30 hover:shadow-2xl">
                    {/* Number */}
                    <div className={`text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 xl:mb-2`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-300 text-sm xl:text-base font-medium">
                      {stat.label.split(' ')[0]}
                    </div>
                    
                    {/* Subtitle */}
                    <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-0.5">
                      {stat.label.split(' ').slice(1).join(' ')}
                    </div>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-xl xl:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Connecting lines for XL+ */}
                  {index < stats.length - 1 && (
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-6 xl:w-8 2xl:w-12 h-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Center decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats for Mobile ONLY */}
        <div className="mt-8 sm:mt-10 md:hidden">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm"
              >
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 lg:h-28 xl:h-32 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
    </section>
  );
}