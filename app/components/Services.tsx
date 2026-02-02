import { 
  Users, 
  TrendingUp, 
  Palette, 
  Briefcase, 
  Globe, 
  BarChart3, 
  Code,
  MessageSquare,
  Sparkles,
  Target,
  Clock,
  Award,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Social Media Management",
      description: "Strategic content creation and community engagement across all platforms.",
      gradient: "from-blue-500 to-blue-600",
      stats: "24/7 Engagement"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Technical Skill Development",
      description: "Professional training programs to upskill your team with modern tech.",
      gradient: "from-violet-500 to-violet-600",
      stats: "100+ Trained"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Marketing Agency",
      description: "Full-service marketing solutions to accelerate growth and reach.",
      gradient: "from-emerald-500 to-emerald-600",
      stats: "3x Growth Avg"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Branding & Design",
      description: "Create compelling brand identity that resonates with your audience.",
      gradient: "from-amber-500 to-amber-600",
      stats: "Brand Strategy"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Business Consultancy",
      description: "Expert guidance to optimize operations and sustainable growth.",
      gradient: "from-rose-500 to-rose-600",
      stats: "Proven Results"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Goods Importation",
      description: "Global sourcing connecting you with quality suppliers worldwide.",
      gradient: "from-indigo-500 to-indigo-600",
      stats: "Global Network"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Marketing Consultancy",
      description: "Data-driven strategies to maximize marketing ROI effectively.",
      gradient: "from-pink-500 to-pink-600",
      stats: "ROI Focused"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Web & App Development",
      description: "Custom digital solutions with modern technology best practices.",
      gradient: "from-cyan-500 to-cyan-600",
      stats: "Modern Stack"
    }
  ];

  const processSteps = [
    { icon: <Target className="w-4 h-4" />, text: "Discovery" },
    { icon: <Clock className="w-4 h-4" />, text: "Strategy" },
    { icon: <Code className="w-4 h-4" />, text: "Implementation" },
    { icon: <Award className="w-4 h-4" />, text: "Results" },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>OUR SERVICES</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
            End-to-end services designed to drive growth, innovation, and success for your business
          </p>
        </div>

        {/* Process Indicator - Mobile Optimized */}
        <div className="relative mb-6 sm:mb-8 md:mb-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-2 sm:px-4 bg-white">
              <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-sm">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                      {step.text}
                    </span>
                    {index < processSteps.length - 1 && (
                      <div className="hidden sm:block w-4 sm:w-6 md:w-8 lg:w-12 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 h-full transition-all duration-300 hover:border-transparent hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Corner accent - hidden on mobile */}
                <div className="hidden sm:block absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 overflow-hidden">
                  <div className={`absolute -top-6 -right-6 w-12 h-12 lg:-top-8 lg:-right-8 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full`} />
                </div>
                
                {/* Icon Container */}
                <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-gray-50 to-transparent rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-500">
                    <div className={`p-2 sm:p-2.5 lg:p-3 rounded-md lg:rounded-lg bg-gradient-to-r ${service.gradient} shadow-sm lg:shadow-lg`}>
                      <div className="text-white w-4 h-4 sm:w-5 sm:h-5">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-gray-950 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {service.stats}
                    </span>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="pt-2 sm:pt-3 md:pt-4 mt-2 sm:mt-3 md:mt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300 whitespace-nowrap">
                        Learn more
                      </span>
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              We can tailor any service to match your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}