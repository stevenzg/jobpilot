"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { LogoutButton } from "@/components/logout-button"
import { useState } from "react"
import { authService } from "@/app/services/auth"

type SearchMode = "rush" | "casual"

export default function ModeSelectionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleModeSelect = async (mode: SearchMode) => {
    try {
      setIsLoading(true)
      setError("")

      // 调用 API 更新 searchMode
      await authService.updateSearchMode(mode)

      // 保存到本地存储
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      localStorage.setItem("user", JSON.stringify({ ...user, searchMode: mode }))

      // 跳转到下一步
      router.push("/onboarding/diagnostics")
    } catch (err) {
      console.error("Failed to update search mode:", err)
      setError("Failed to save your preference. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto pt-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="JobPilot Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-semibold">Orion</span>
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <LogoutButton />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-xl font-medium">Welcome! Let's get started.</h1>
          <p className="text-gray-600">How would you like to proceed with your job search?</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rush Mode */}
          <button
            onClick={() => handleModeSelect("rush")}
            disabled={isLoading}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left space-y-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#00FF9D]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Rush Mode</h2>
            </div>
            <p className="text-gray-600">
              I need a job ASAP. Help me find and apply to as many relevant positions as possible.
            </p>
          </button>

          {/* Casual Mode */}
          <button
            onClick={() => handleModeSelect("casual")}
            disabled={isLoading}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left space-y-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#00FF9D]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Casual Mode</h2>
            </div>
            <p className="text-gray-600">
              I'm open to opportunities but want to be selective. Help me find the perfect match.
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
