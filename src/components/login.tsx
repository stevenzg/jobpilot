"use client"

import { useState, useEffect } from "react"
import { authService } from "@/app/services/auth"
import { useRouter } from "next/navigation"

export function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSendCode = async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    if (!email) {
      setError("Please enter your email address")
      return
    }

    try {
      setIsLoading(true)
      setError("")
      
      await authService.sendCode(email)
      setIsCodeSent(true)
      setCountdown(60) // Start 60 seconds countdown
    } catch (err) {
      setError("An error occurred. Please try again later.")
      console.error("Send code error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCodeSent) {
      handleSendCode();
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      const response = await authService.verify(email, verificationCode);
      
      // 存储 token 和用户基本信息
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify({
        id: response.id,
        email: response.email,
        name: response.name
      }));

      // 根据缺失的字段决定跳转方向
      if (!response.searchMode) {
        // 如果没有 searchMode，跳转到模式选择页面
        router.push("/onboarding/mode-selection");
      } else if (!response.resumeUrl) {
        // 如果没有上传简历，跳转到简历上传页面
        router.push("/onboarding/resume-upload");
      } else {
        // 如果基本信息都完整，跳转到 dashboard
        router.push("/dashboard");
      }
    } catch {
      setError("Invalid verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Sign In with Email</h2>
      <p className="text-gray-600 text-center mb-6">We&apos;ll send you a verification code</p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "")
                  if (value.length <= 6) {
                    setVerificationCode(value)
                  }
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent font-mono"
                required
                maxLength={6}
                placeholder="000000"
              />
              {countdown > 0 ? (
                <div className="px-4 py-2 text-sm text-gray-500">
                  {countdown}s
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendCode()}
                  className="px-4 py-2 text-sm text-[#00E090] hover:text-[#00FF9D] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading || !email}
                >
                  Resend
                </button>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#00FF9D] to-[#00E090] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isCodeSent ? "Verifying..." : "Sending..."}
            </span>
          ) : (
            <span>{isCodeSent ? "Verify & Sign In" : "Send Code"}</span>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          By continuing, you agree to JobPilot&apos;s{" "}
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
