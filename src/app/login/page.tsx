"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState("");

  const handleSendCode = async () => {
    try {
      setLoading(true);
      setError("");
      await authService.sendCode(email);
      setCodeSent(true);
    } catch (err) {
      setError("Failed to send verification code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!codeSent) {
      handleSendCode();
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await authService.verify(email, code);
      // Store token and user info
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid verification code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Get Started with JobPilot</h1>
          <p className="text-gray-600">Enter your email to continue</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
              required
              disabled={loading || codeSent}
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
                onClick={handleSendCode}
                className="text-sm text-[#00FF9D] hover:text-[#00E090] font-medium disabled:opacity-50"
                disabled={loading || !email || codeSent}
              >
                {codeSent ? "Code Sent" : loading ? "Sending..." : "Get Code"}
              </button>
            </div>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none transition-all"
              placeholder="Enter verification code"
              required
              disabled={loading || !codeSent}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00FF9D] hover:bg-[#00E090] text-black font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
            disabled={loading || (!codeSent && !email) || (codeSent && !code)}
          >
            {loading ? "Please wait..." : codeSent ? "Continue" : "Get Code"}
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
  );
}
