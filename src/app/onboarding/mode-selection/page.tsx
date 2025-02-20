"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { LogoutButton } from "@/components/logout-button"

export default function ModeSelectionPage() {
  const router = useRouter()

  const handleModeSelect = (mode: "rush" | "casual") => {
    // TODO: Save the selected mode to user preferences
    localStorage.setItem("searchMode", mode)
    router.push("/onboarding/diagnostics")
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
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Hi, I&apos;m Orion, your AI Copilot for job search.</h1>
          <p className="text-gray-600">To get started, which best describes your current situation?</p>
        </div>

        {/* Mode Selection Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rush Mode Card */}
          <button
            onClick={() => handleModeSelect("rush")}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="currentColor"
                    d="M13.75 9.56L16 7.31L14.56 5.87L12.31 8.12L10.25 6.06L12.5 3.81L11.06 2.37L8.81 4.62L6.75 2.56L5.31 4L7.37 6.06L5.12 8.31L6.56 9.75L8.81 7.5L10.87 9.56L8.62 11.81L10.06 13.25L12.31 11L13.75 9.56Z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4">
              I&apos;m looking for jobs in a rush
            </div>
            <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              We&apos;ll prioritize speed and efficiency
            </p>
          </button>

          {/* Casual Mode Card */}
          <button
            onClick={() => handleModeSelect("casual")}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="currentColor"
                    d="M2 21V19H20V21H2M20 8V5H18V8H20M20 3C21.11 3 22 3.9 22 5V8C22 9.11 21.11 10 20 10H18V13C18 14.11 17.11 15 16 15H8C6.9 15 6 14.11 6 13V10H4C2.9 10 2 9.11 2 8V5C2 3.9 2.9 3 4 3H20M16 10H8V13H16V10M4 8H6V5H4V8Z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4">
              I&apos;m open to new opportunities, no rush
            </div>
            <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              We&apos;ll focus on finding the perfect match
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
