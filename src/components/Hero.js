
// components/Hero.js
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';
const Hero = () => {
  const [stats, setStats] = useState({ users: 0, stories: 0, rating: 0 })

  useEffect(() => {
    const animateCounter = (key, target) => {
      const increment = target / 100
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 20)
    }

    const timer = setTimeout(() => {
      animateCounter('users', 50)
      animateCounter('stories', 1)
      animateCounter('rating', 4.8)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-gradient-to-br from-indigo-500 to-indigo-600 min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="text-amber-400 block">Islamic Match</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connect with like-minded Muslim singles in a safe, halal environment. 
              Start your journey to meaningful relationships today.
            </p>
            
            <div onClick={()=>{
              toast.info('Comming soon! Stay tuned for updates.');
            }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </a>
              <a 
                href="https://drive.google.com/file/d/1xguej2J0GHiZ3khU6YLJ0Gj4W5ikD0Vn/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get on Android
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.users}K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.stories}K+</div>
                <div className="text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.rating}★</div>
                <div className="text-sm">App Rating</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="animate-float">
                <div className="w-80 h-auto mx-auto drop-shadow-2xl">
                  <svg viewBox="0 0 400 800" fill="none" className="w-full h-auto">
                    <rect width="400" height="800" rx="40" fill="#000"/>
                    <rect x="20" y="20" width="360" height="760" rx="20" fill="#fff"/>
                    <rect x="40" y="100" width="320" height="200" rx="10" fill="#10B981"/>
                    <text x="200" y="180" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">Letaskono</text>
                    <text x="200" y="220" textAnchor="middle" fill="white" fontSize="16">Find Your Perfect Match</text>
                    <circle cx="120" cy="400" r="40" fill="#F3F4F6"/>
                    <circle cx="280" cy="400" r="40" fill="#F3F4F6"/>
                    <rect x="40" y="480" width="320" height="40" rx="20" fill="#10B981"/>
                    <rect x="40" y="540" width="320" height="40" rx="20" fill="#059669"/>
                  </svg>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero