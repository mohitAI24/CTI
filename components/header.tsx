"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const dropdownContent = {
    platforms: ["OpenCTI", "XTM Suite", "OpenBAS", "Agentic AI"],
    offerings: [
      "Software as a Service",
      "Support and Services",
      "OpenCTI Enterprise Edition",
      "Filigran Academy Training",
    ],
    CTI:
      "Consolidate your disparate threat feeds into a centralized platform with 300+ integrations, using a consistent STIX 2.1 data model.",
    company:
      "Filigran provides open-source cybersecurity solutions covering threat intelligence management, breach and attack simulation, and cyber risk management.",
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              {/* <span className="text-black font-bold text-sm">F</span> */}
              <img src="/logo.png" alt="" className="">
              </img>
            </div>
            <span className="text-white font-semibold text-3xl hidden sm:inline">TRACE X</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {/* Platforms Dropdown */}
              <div className="relative group">
                <button className="text-slate-300 hover:text-white transition flex items-center gap-1">
                  Platforms
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-slate-900/95 border border-slate-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {(dropdownContent.platforms as string[]).map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTI Dropdown */}
              <div className="relative group">
                <button className="text-slate-300 hover:text-white transition flex items-center gap-1">
                  CTI
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-slate-900/95 border border-slate-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {(dropdownContent.offerings as string[]).map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTI */}
              {/* <Link href="#" className="text-slate-300 hover:text-white transition">
                CTI
              </Link> */}

              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="text-slate-300 hover:text-white transition flex items-center gap-1">
                  About Us
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-slate-900/95 border border-slate-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{dropdownContent.CTI}</p>
                </div>
              </div>

              {/* Contact Us Dropdown */}
              <div className="relative group">
                <button className="text-slate-300 hover:text-white transition flex items-center gap-1">
                  Contact Us
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-slate-900/95 border border-slate-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{dropdownContent.company}</p>
                </div>
              </div>

              {/* About Us */}
              {/* <Link href="#" className="text-slate-300 hover:text-white transition">
                About Us
              </Link> */}

              {/* Contact Us */}
              {/* <Link href="#" className="text-slate-300 hover:text-white transition">
                Contact Us
              </Link> */}
            </div>
            <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition">
              Book a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              Platforms
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              Offerings
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              CTI
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              Resources
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              Company
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              About Us
            </Link>
            <Link href="#" className="block text-slate-300 hover:text-white transition">
              Contact Us
            </Link>
            <button className="w-full px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition">
              Book a demo
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
