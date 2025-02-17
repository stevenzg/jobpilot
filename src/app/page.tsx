export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4">
        <div className="flex items-center">
          <span className="font-bold text-lg sm:text-xl">JobPilot</span>
          <div className="hidden md:flex space-x-4 ml-8">
            <a href="#" className="hover:text-gray-600">Features</a>
            <a href="#" className="hover:text-gray-600">Tools</a>
            <a href="#" className="hover:text-gray-600">Resume AI</a>
            <a href="#" className="hover:text-gray-600">For Employer</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Blog</a>
          </div>
        </div>
        <div className="flex items-center">
          <a 
            href="/login"
            className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20 text-center">
        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            No More Solo<br className="sm:hidden" /> Job Hunting
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            DO IT WITH AI<br className="sm:hidden" /> COPILOT
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4">
            Our AI makes landing job interviews dramatically easier and faster! - get matched jobs, tailored
            resumes, and recommended insider connections in less than 1 min!
          </p>
          <div className="mt-8">
            <button className="w-64 sm:w-auto bg-[#00FF9D] hover:bg-[#00E090] text-black font-semibold px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Try JobPilot for Free
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
