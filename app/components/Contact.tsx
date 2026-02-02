// app/components/Contact.tsx
'use client'

import { useState } from "react"
import { sendMessage } from "@/lib/actions"
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  MessageSquare,
  Sparkles,
  Shield,
  CheckCircle,
  Heart,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function Contact() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)

    const result = await sendMessage(formData)

    setLoading(false)

    if (result.success) {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      })
      // Reset form
      const form = document.querySelector("form") as HTMLFormElement
      if (form) form.reset()
    } else {
      toast.error("Failed to send message", {
        description: result.error || "Please try again.",
      })
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: "Location",
      value: "Mzuzu, Malawi",
      subtext: "Serving nationwide",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: "Phone",
      value: "+265 882 13 19 09",
      gradient: "from-green-500 to-emerald-600",
      href: "tel:+265882131909"
    },
  {
    icon: (
      <svg 
        className="h-4 w-4 sm:h-5 sm:w-5" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    title: "Facebook",
    value: "I.O.M Innovations",
    gradient: "from-blue-600 to-blue-800",
    href: "https://www.facebook.com/share/1C9huwvjoQ/",
    target: "_blank"
  },
  ]

  const trustFactors = [
    { value: "24h", label: "Response", icon: <Clock className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { value: "100%", label: "Secure", icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { value: "Free", label: "Consult", icon: <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" /> },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0LjVWMzZIMjR2LTEuNWgxMnptMCAzVjM5SDI0di0xLjVoMTJ6bTAtM1YzNkgyNHYtMS41aDEyem0wLTNWMzNIMjR2LTEuNWgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 sm:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            GET IN TOUCH
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Build</span> Together
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2 sm:px-0">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-white text-base sm:text-lg flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-xs sm:text-sm">{info.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium truncate sm:whitespace-normal">
                        {info.value}
                      </p>
                      {info.subtext && (
                        <p className="text-gray-500 text-xs mt-0.5 sm:mt-1">{info.subtext}</p>
                      )}
                    </div>
                  </a>
                ))}

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-xs sm:text-sm">Response Time</h4>
                    <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium">Within 24 hours</p>
                    <p className="text-yellow-400/80 text-xs mt-0.5 sm:mt-1">Guaranteed reply</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <h4 className="font-medium text-white text-xs sm:text-sm mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                Business Hours
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/10">
                  <span className="text-gray-300 text-xs sm:text-sm">Mon-Fri</span>
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 sm:py-2">
                  <span className="text-gray-300 text-xs sm:text-sm">Saturday</span>
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-white/10">
              <CardHeader className="pb-4 sm:pb-6 border-b border-white/10">
                <CardTitle className="text-white text-lg sm:text-xl md:text-2xl flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="whitespace-normal">Send us a message</span>
                </CardTitle>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>

              <CardContent className="pt-6 sm:pt-8">
                <form action={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot fields */}
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-xs sm:text-sm font-medium text-white">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-gray-900/50 border-gray-700 text-white h-9 sm:h-10 md:h-11 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-xs sm:text-sm font-medium text-white">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-gray-900/50 border-gray-700 text-white h-9 sm:h-10 md:h-11 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-xs sm:text-sm font-medium text-white">
                      Phone <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <Input
                      name="phone"
                      placeholder="+265 XXX XXX XXX"
                      className="bg-gray-900/50 border-gray-700 text-white h-9 sm:h-10 md:h-11 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-xs sm:text-sm font-medium text-white">
                      Subject <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                    </label>
                    <Input
                      name="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-900/50 border-gray-700 text-white h-9 sm:h-10 md:h-11 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-xs sm:text-sm font-medium text-white">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project, goals, or questions..."
                      rows={4}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] resize-y text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10">
                    <div className="text-xs sm:text-sm text-gray-400 order-2 sm:order-1">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Shield className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="whitespace-nowrap sm:whitespace-normal">Secure & confidential</span>
                      </div>
                      <p className="mt-1 text-xs">
                        Fields with <span className="text-red-400">*</span> are required
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-xl hover:shadow-blue-500/25 w-full sm:w-auto order-1 sm:order-2"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2 sm:gap-3">
                          <div className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 sm:gap-3">
                          <Send className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                          Send Message
                          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center">
                {trustFactors.map((factor, index) => (
                  <div key={index} className="space-y-2 sm:space-y-3 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-400">
                        {factor.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{factor.value}</div>
                      <div className="text-gray-400 text-xs sm:text-xs font-medium whitespace-nowrap">{factor.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}