export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <span className="font-bold text-xl">JobPilot</span>
          <div className="hidden md:flex space-x-4 ml-8">
            <a href="#" className="hover:text-gray-600">Features</a>
            <a href="#" className="hover:text-gray-600">Tools</a>
            <a href="#" className="hover:text-gray-600">Resume AI</a>
            <a href="#" className="hover:text-gray-600">For Employer</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Blog</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="/login"
            className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-4">
          No More Solo Job Hunting
        </h1>
        <h2 className="text-4xl font-bold mb-6">
          DO IT WITH AI COPILOT
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our AI makes landing job interviews dramatically easier and faster! - get matched jobs, tailored
          resumes, and recommended insider connections in less than 1 min!
        </p>
        <button className="bg-[#00FF9D] hover:bg-[#00E090] text-black font-semibold px-8 py-3 rounded-full text-lg transition-all">
          Try JobPilot for Free
        </button>
      </main>
    </div>
  )
}
