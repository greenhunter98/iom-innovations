import { Target, Users, Globe, Sparkles, ArrowRight, Award, Shield, TrendingUp, MapPin } from "lucide-react";

export default function About() {
  const values = [
    { 
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, 
      title: "Client Partnership", 
      desc: "Your success is our ultimate priority",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, 
      title: "Local Mastery", 
      desc: "Deep understanding of Malawi's business landscape",
      gradient: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, 
      title: "Innovation First", 
      desc: "Cutting-edge solutions for maximum impact",
      gradient: "from-violet-500 to-violet-600"
    },
    { 
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, 
      title: "Growth Catalyst", 
      desc: "Driving measurable business outcomes",
      gradient: "from-amber-500 to-amber-600"
    },
  ];

  const stats = [
    { number: "5+", label: "months", icon: <Award className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { number: "10+", label: "Projects", icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { number: "100%", label: "Satisfaction", icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { number: "24/7", label: "Support", icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" /> },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span>ABOUT US</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Pioneering Business Excellence in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Malawi
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
            I.O.M Innovations is your trusted partner for transformative business solutions, 
            combining local expertise with global innovation standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Main Story Card */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-lg overflow-hidden">
                {/* Decorative corner - hidden on mobile */}
                <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-16 h-16 sm:-top-10 sm:-right-10 sm:w-20 sm:h-20 md:-top-12 md:-right-12 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full" />
                </div>
                
                <div className="relative">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Our Mission</h3>
                      <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mb-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                    <p className="leading-relaxed">
                      <span className="font-semibold text-gray-900">I.O.M Innovations</span> is a registered consultancy 
                      firm based in Mzuzu, Malawi, dedicated to empowering startups and growing companies with 
                      professional business and digital solutions that drive real results.
                    </p>
                    
                    <p className="leading-relaxed">
                      We bridge the gap between <span className="font-semibold text-gray-900">local market intelligence</span> and 
                      <span className="font-semibold text-gray-900"> global best practices</span>, creating a unique 
                      advantage for businesses navigating Malawi's competitive landscape.
                    </p>
                    
                    <p className="leading-relaxed">
                      Our holistic approach ensures that every solution is tailored, scalable, and designed 
                      for sustainable growth in today's dynamic business environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core Values
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {values.map((value, i) => (
                  <div 
                    key={i} 
                    className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-200 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${value.gradient} p-2 flex items-center justify-center shadow-sm`}>
                          <div className="text-white">
                            {value.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg group-hover:text-gray-950 transition-colors duration-300">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {value.desc}
                      </p>
                      
                      {/* Indicator line */}
                      <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-500 mt-3 sm:mt-4`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Impact Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Impact Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 text-center text-base sm:text-lg">
                  Our Impact
                </h4>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, i) => (
                    <div 
                      key={i} 
                      className="group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 hover:border-blue-200 transition-colors duration-300 h-full">
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {stat.number}
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl sm:rounded-2xl" />
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-lg">
                <div className="mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm sm:text-base md:text-lg italic leading-relaxed mb-3 sm:mb-4">
                  "We don't just deliver services—we build partnerships that transform visions into sustainable success stories."
                </p>
                
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">I.O.M Innovations Team</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    Your Trusted Partner
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-100 text-center">
              <div className="text-xs sm:text-sm font-medium text-blue-700 mb-1.5 sm:mb-2">
                <span className="inline-flex items-center gap-1">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  Registered & Certified
                </span>
              </div>
              <div className="text-xs text-gray-600">
                Fully compliant with Malawi business regulations
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative group">
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>
            
            <div className="relative max-w-2xl mx-auto text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Write Your Success Story?
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Join forward-thinking Malawian businesses already experiencing remarkable growth 
                through our strategic partnership approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
                >
                  Begin Your Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Strategy Session
                </a>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
                <div className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900" />
                    ))}
                  </div>
                  <span>Trusted by 10+ businesses across Malawi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}