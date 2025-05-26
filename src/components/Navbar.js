// components/Navbar.js
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ل</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Letaskono</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-indigo-500 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-indigo-500 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-500 transition-colors">
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all transform hover:scale-105"
            >
              Download
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block text-gray-700 hover:text-indigo-500 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-700 hover:text-indigo-500 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-indigo-500 transition-colors">
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('download')} 
                className="block bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all text-center w-full"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar