import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram,
  ChevronRight,
  ArrowUpRight,
  Shield,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import ScrollToTop from "../../components/ScrollToTop";

export default function Footer() {
  const quickLinks = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { href: "#services", label: "Business Consultancy" },
    { href: "#services", label: "Marketing" },
    { href: "#services", label: "Web Development" },
    { href: "#services", label: "Tech Training" },
    { href: "#services", label: "Import Services" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base sm:text-lg">IOM</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-gray-950"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl">I.O.M Innovations</h3>
                <p className="text-xs sm:text-sm text-gray-500">Consultancy Firm</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
              Empowering Malawian businesses with innovative solutions, expert guidance, 
              and strategic partnerships for sustainable growth.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-3 sm:h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:text-blue-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Compact on mobile */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-3 sm:h-4 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-3 sm:h-4 bg-gradient-to-b from-amber-500 to-amber-400 rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:enquirei.o.minnovation@gmail.com"
                className="group flex items-start gap-2 sm:gap-3 text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium block group-hover:text-blue-400">Email</span>
                  <span className="break-all text-xs sm:text-sm">enquirei.o.minnovation@gmail.com</span>
                </div>
              </a>
              
              <a
                href="tel:+265882131909"
                className="group flex items-start gap-2 sm:gap-3 text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-emerald-500/20 group-hover:to-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="font-medium block group-hover:text-emerald-400">Phone</span>
                  <span className="text-xs sm:text-sm">+265 882 13 19 09</span>
                </div>
              </a>
              
              <div className="group flex items-start gap-2 sm:gap-3 text-gray-500 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-amber-500/20 group-hover:to-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="font-medium block group-hover:text-amber-400">Location</span>
                  <span className="text-xs sm:text-sm">Mzuzu, Malawi</span>
                  <span className="block text-xs text-gray-600 mt-0.5">Serving nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>© {new Date().getFullYear()} I.O.M Innovations. All rights reserved.</span>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-gray-800"></div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Scroll to top button */}
          <ScrollToTop />
        </div>

{/* Made with love */}
<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center">
  <a 
    href="https://chipatso-website.vercel.app/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs text-gray-600 hover:text-gray-400 transition-colors group"
  >
    <Sparkles className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
    <span>Made with</span>
    <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
    <span>in Malawi • Empowering local businesses</span>
    <span className="text-gray-500 group-hover:text-gray-400 transition-colors">•</span>
    <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
      Built by Chipatso
    </span>
  </a>
</div>
      </div>
    </footer>
  );
}