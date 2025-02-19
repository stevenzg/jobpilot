"use client"

import { useState } from "react"

export function Login() {
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [isCodeSent, setIsCodeSent] = useState(false)

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send verification code
    setIsCodeSent(true)
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Verify code and login
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Sign In with Email</h2>
      <p className="text-gray-600 text-center mb-6">We'll send you a verification code</p>
      
      <form onSubmit={isCodeSent ? handleVerify : handleSendCode} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent"
            required
            disabled={isCodeSent}
          />
        </div>
        
        {isCodeSent && (
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              Verification Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent"
                required
                maxLength={6}
                placeholder="000000"
              />
              <button
                type="button"
                onClick={handleSendCode}
                className="px-4 py-2 text-sm text-[#00E090] hover:text-[#00FF9D] disabled:opacity-50"
                disabled={!email}
              >
                Resend
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#00FF9D] to-[#00E090] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
        >
          {isCodeSent ? "Verify & Sign In" : "Send Code"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          By continuing, you agree to JobPilot's{" "}
          <a href="#" className="text-[#00E090] hover:text-[#00FF9D]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#00E090] hover:text-[#00FF9D]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}
