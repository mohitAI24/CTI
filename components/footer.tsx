"use client"

import Link from "next/link"

const footerLinks = {
  Solutions: ["XTM Suite", "OpenCTI", "OpenBAS", "Agentic AI", "What is XTM Hub?"],
  Offerings: [
    "Software as a Service",
    "Support and Services",
    "OpenCTI Enterprise Edition",
    "Filigran Academy Training Options",
  ],
  Resources: [
    "XTM Hub",
    "Filigran Academy",
    "Filigran Blog",
    "Events & Webinars",
    "Use Case Library",
    "Content Library",
    "OpenCTI Documentation",
    "OpenBAS Documentation",
  ],
  Company: [
    "Our Story",
    "Leadership",
    "Careers",
    "Our Investors",
    "Newsroom",
    "Our Brand",
    "Become a Partner",
    "MSSP Partners",
    "Technology Alliances",
    "Solutions Providers",
    "Marketplaces",
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-slate-900 to-blue-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">F</span>
              </div>
              <span className="text-white font-semibold">Filigran</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Filigran provides open-source cybersecurity solutions covering threat intelligence management, breach and
              attack simulation, and cyber risk management.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-xs text-slate-400">ISO</span>
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-xs text-slate-400">G2</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-3 text-sm">{category}</h4>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="text-slate-400 hover:text-white transition text-xs">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2025 Filigran. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-400 hover:text-white transition text-xs">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition text-xs">
              Terms of Services
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition text-xs">
              Licenses
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition text-xs">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
