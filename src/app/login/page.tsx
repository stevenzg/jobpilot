import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Started - JobPilot",
  description: "Enter your email to continue your job search journey",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Get Started with JobPilot</h1>
          <p className="text-gray-600">Enter your email to continue</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Verification Code Section */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <button
                type="button"
                className="text-sm text-[#00FF9D] hover:text-[#00E090] font-medium"
              >
                Get Code
              </button>
            </div>
            <input
              type="text"
              id="code"
              name="code"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none transition-all"
              placeholder="Enter verification code"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00FF9D] hover:bg-[#00E090] text-black font-semibold py-3 rounded-lg transition-all"
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to JobPilot&apos;s{" "}
            <a href="/terms" className="text-[#00FF9D] hover:text-[#00E090]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#00FF9D] hover:text-[#00E090]">
              Privacy Policy
            </a>
          </p>
        </form>

        {/* Features List */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-5 h-5 mr-2 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>2X More Qualified Job Matches</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-5 h-5 mr-2 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>80% Time Savings in Job Searches</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-5 h-5 mr-2 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>50% More Interview Invites</span>
          </div>
        </div>
      </div>
    </div>
  )
}
