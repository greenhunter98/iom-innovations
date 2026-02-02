import { Target, Users, TrendingUp, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Proven Expertise",
      description: "Years of experience delivering results for businesses across industries",
      gradient: "from-blue-500 to-blue-600",
      stats: "100+ Projects",
      color: "blue"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Client-Focused",
      description: "Tailored solutions for your unique business needs",
      gradient: "from-emerald-500 to-emerald-600",
      stats: "95% Retention",
      color: "emerald"
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Results-Driven",
      description: "Data-backed strategies for measurable business outcomes",
      gradient: "from-violet-500 to-violet-600",
      stats: "3x ROI Average",
      color: "violet"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Local Expertise",
      description: "Malawi market expertise with global best practices",
      gradient: "from-amber-500 to-amber-600",
      stats: "Nationwide",
      color: "amber"
    }
  ];

  const benefits = [
    "Free Initial Consultation",
    "Transparent Pricing",
    "Flexible Engagement",
    "Ongoing Support",
    "Industry Best Practices",
    "Confidential & Secure"
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            WHY CHOOSE US
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Confidence
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
            Partner with Malawi's leading consultancy firm for innovative solutions that drive sustainable growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 h-full transition-all duration-300 hover:border-transparent hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                     }}
                />
                
                {/* Icon Container */}
                <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-gray-100 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`p-2 sm:p-2.5 lg:p-3 rounded-md lg:rounded-lg bg-gradient-to-r ${feature.gradient} shadow-sm lg:shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-100 group-hover:border-gray-200 transition-colors duration-300 mt-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl sm:rounded-b-2xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits & CTA Section */}
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-cyan-50/20 rounded-2xl sm:rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              {/* Benefits List */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What You Get With I.O.M
                </h3>
                
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 group">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </p>
                        <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl sm:rounded-2xl" />
                
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-800">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Ready to Transform?
                  </h3>
                  
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                    Join successful businesses across Malawi that trust I.O.M Innovations to drive their growth.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center w-full gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    
                    <p className="text-center text-gray-400 text-xs sm:text-sm">
                      No commitment • 30-minute session • Expert advice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 shadow-sm">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-gray-900">Trusted by </span>
                <span className="text-gray-600">50+ businesses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}