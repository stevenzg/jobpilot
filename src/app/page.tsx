"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0FFFF] via-white to-[#E0FFFF] scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#00FF9D] to-[#00E090] bg-clip-text text-transparent">JobPilot</span>
            <div className="hidden md:flex space-x-6 ml-10">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
              <a href="#tools" className="text-gray-600 hover:text-black transition-colors">Tools</a>
              <a href="#resume" className="text-gray-600 hover:text-black transition-colors">Resume AI</a>
              <a href="#employer" className="text-gray-600 hover:text-black transition-colors">For Employer</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">About Us</a>
              <a href="#blog" className="text-gray-600 hover:text-black transition-colors">Blog</a>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              className="bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-20 sm:pt-28">
        {/* Hero Section */}
        <div className="text-center max-w-[90%] sm:max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            No More Solo Job Hunting
          </h1>
          <h2 className="text-[2.5rem] sm:text-5xl md:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-[#00FF9D] to-[#00E090] bg-clip-text text-transparent mb-6 sm:mb-8">
            DO IT WITH AI<br className="sm:hidden" /> COPILOT
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-[85%] mx-auto mb-8 sm:mb-10">
            Our AI makes landing job interviews dramatically easier and faster! Get matched jobs, tailored resume, and insider connections in less than 1 min!
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mx-auto w-[90%] sm:w-auto">
              Try JobPilot for Free
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Join <span className="font-semibold">1000+</span> job seekers who found their dream jobs
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32 bg-[#F8F9FC] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl mb-10">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-16">AI FEATURES</h2>

            {/* AI Job Match */}
            <div className="flex flex-col lg:flex-row gap-12 pb-16 border-b border-gray-200">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold">
                  <span className="inline-flex items-center">
                    <span className="text-[#00FF9D] mr-2">✨</span>
                    AI Job Match
                  </span>
                  <span className="text-gray-600 font-normal ml-2">/ Job searching is already hard!</span>
                </h3>
                <p className="text-xl">Increase your odds with AI matched Jobs</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Apply only to Jobs you are qualified for</li>
                  <li>• Discover matched jobs based on your skills, not only titles</li>
                  <li>• Say goodbye to fake jobs</li>
                  <li>• Apply early with our custom job alerts</li>
                </ul>
                <button className="mt-8 bg-black text-white px-6 py-2.5 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-all">
                  <span>Start Matching</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <img src="/microsoft.png" alt="Microsoft" className="w-8 h-8" />
                    <div>
                      <div className="font-medium">Senior Data Analyst</div>
                      <div className="text-gray-500">Microsoft</div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-2xl font-bold text-[#00FF9D]">96%</div>
                      <div className="text-sm text-gray-500">Overall</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00FF9D]">100%</div>
                      <div className="text-sm text-gray-500">Exp. Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00FF9D]">92%</div>
                      <div className="text-sm text-gray-500">Skill</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#00FF9D]">96%</div>
                      <div className="text-sm text-gray-500">Industry Exp.</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Experience Level</div>
                    <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Required Experience</div>
                    <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Education</div>
                    <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Core Skills</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume AI */}
            <div className="flex flex-col lg:flex-row gap-12 py-16 border-b border-gray-200">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold">
                  <span className="inline-flex items-center">
                    <span className="text-[#00FF9D] mr-2">📝</span>
                    Resume AI
                  </span>
                  <span className="text-gray-600 font-normal ml-2">/ Stand out from the crowd with a top notch resume</span>
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Get a professional quality resume in minutes, not hours</li>
                  <li>• Keep tailoring your resume with AI and catch HR's eyes in 6 seconds</li>
                  <li>• Rest easy knowing your resume will be ATS compatible</li>
                </ul>
                <button className="mt-8 bg-black text-white px-6 py-2.5 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-all">
                  <span>Improve My Resume</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6 shadow-lg relative">
                  <div className="absolute top-4 right-4">
                    <div className="text-2xl font-bold text-[#00FF9D]">90</div>
                    <div className="text-sm text-gray-500">EXCELLENT</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="space-y-2">
                      <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Summary Enhanced</div>
                      <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Relevant Skills Highlighted</div>
                      <div className="inline-block bg-[#E6FFF5] text-[#00FF9D] px-3 py-1 rounded-full text-sm">✓ Recent Work Experience Enhanced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insider Connections */}
            <div className="flex flex-col lg:flex-row gap-12 pt-16">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold">
                  <span className="inline-flex items-center">
                    <span className="text-[#00FF9D] mr-2">🔗</span>
                    Insider connections
                  </span>
                  <span className="text-gray-600 font-normal ml-2">/ Network like a pro with our recommended insider connections</span>
                </h3>
                <p className="text-xl">Connect, get referrals, and land interviews!</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Increase your chances of landing an interview by 4X with insider referrals</li>
                  <li>• Easily discover alumni and past colleagues within your target company</li>
                  <li>• Gain access to key connections, such as hiring managers and direct reports</li>
                  <li>• Easily personalize your cold outreach message with our custom templates</li>
                </ul>
                <button className="mt-8 bg-black text-white px-6 py-2.5 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-all">
                  <span>Get Connected</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Found 3 contacts for you</div>
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="font-medium">Ethan & Tobi</div>
                        <div className="text-sm text-gray-500">Software Engineer</div>
                      </div>
                      <button className="ml-auto bg-[#E6FFF5] text-[#00FF9D] px-4 py-1 rounded-full text-sm">
                        CONNECT
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 p-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="font-medium">Nikki</div>
                        <div className="text-sm text-gray-500">Hiring Manager</div>
                      </div>
                      <button className="ml-auto bg-[#E6FFF5] text-[#00FF9D] px-4 py-1 rounded-full text-sm">
                        CONNECT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <span className="font-bold text-xl bg-gradient-to-r from-[#00FF9D] to-[#00E090] bg-clip-text text-transparent">JobPilot</span>
              <p className="text-gray-400 text-sm">
                Your AI-powered career co-pilot. We help you land your dream job faster and smarter.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Matching</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Insights</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Employers</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm"> 2025 JobPilot. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
