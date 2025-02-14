"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

type CareerGoal = "advance" | "shift" | "lifestyle" | null
type SubGoal = string | null

export default function CareerGoalsPage() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState<CareerGoal>(null)
  const [selectedSubGoal, setSelectedSubGoal] = useState<SubGoal>(null)

  const handleNext = () => {
    if (selectedGoal && selectedSubGoal) {
      localStorage.setItem("careerGoal", selectedGoal)
      localStorage.setItem("careerSubGoal", selectedSubGoal)
      router.push("/onboarding/resume-upload")
    }
  }

  const goals = [
    {
      id: "advance",
      title: "Advance My Career",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4.08 19.96 4.21C20.17 4.34 20.34 4.5 20.46 4.71C20.59 4.92 20.66 5.15 20.66 5.41C20.66 5.67 20.59 5.91 20.46 6.12C20.34 6.33 20.17 6.5 19.96 6.62C19.75 6.75 19.5 6.82 19.22 6.82C18.94 6.82 18.69 6.75 18.48 6.62C18.27 6.5 18.1 6.33 17.97 6.12C17.85 5.91 17.78 5.67 17.78 5.41C17.78 5.15 17.85 4.92 17.97 4.71C18.1 4.5 18.27 4.34 18.48 4.21C18.69 4.08 18.94 4 19.22 4M19.22 6.09C19.43 6.09 19.6 6 19.74 5.82C19.88 5.64 19.96 5.44 19.96 5.21C19.96 4.98 19.88 4.77 19.74 4.62C19.6 4.46 19.43 4.38 19.22 4.38C19 4.38 18.82 4.46 18.68 4.62C18.54 4.77 18.46 4.98 18.46 5.21C18.46 5.44 18.54 5.64 18.68 5.82C18.82 6 19 6.09 19.22 6.09M7.5 13.5C7.5 10.47 9.97 8 13 8C16.03 8 18.5 10.47 18.5 13.5C18.5 16.53 16.03 19 13 19C9.97 19 7.5 16.53 7.5 13.5M13 14.17L14.41 15.58L15.58 14.41L14.17 13L15.58 11.59L14.41 10.42L13 11.83L11.59 10.42L10.42 11.59L11.83 13L10.42 14.41L11.59 15.58L13 14.17Z"
          />
        </svg>
      ),
      subGoals: [
        "To A Senior Role",
        "To A Manager Role",
        "To A Higher Compensation"
      ]
    },
    {
      id: "shift",
      title: "Shift My Career Path",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"
          />
        </svg>
      ),
      subGoals: [
        "Transit To A New Industry",
        "Transit To A New Role",
        "Explore New Skill"
      ]
    },
    {
      id: "lifestyle",
      title: "Enjoy Better Work Style",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,6H16V4A2,2 0 0,0 14,2H10C8.89,2 8,2.89 8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8A2,2 0 0,0 20,6M10,4H14V6H10V4M20,19H4V8H20V19M14,10H10V12H14V10M18,14H6V16H18V14Z"
          />
        </svg>
      ),
      subGoals: [
        "Work & Life Balance",
        "Work Security",
        "Work Flexibility"
      ]
    },
  ]

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
        <button
          onClick={() => router.push("/logout")}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-xl font-medium">
            We're almost there! What's your career goal for your next role?
          </h1>
        </div>

        {/* Career Goals */}
        <div className="grid grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-4">
              <div
                className={`bg-white rounded-2xl p-8 shadow-lg text-center space-y-6 cursor-pointer transition-all ${
                  selectedGoal === goal.id
                    ? "ring-2 ring-[#00FF9D]"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedGoal(goal.id as CareerGoal)
                  setSelectedSubGoal(null)
                }}
              >
                <div className="mx-auto w-20 h-20 flex items-center justify-center">
                  {goal.icon}
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  {goal.title}
                </div>
              </div>

              {/* Sub Goals */}
              {selectedGoal === goal.id && (
                <div className="bg-[#E0FFFF] rounded-2xl p-4 space-y-2">
                  {goal.subGoals.map((subGoal) => (
                    <div
                      key={subGoal}
                      className={`bg-white rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all ${
                        selectedSubGoal === subGoal
                          ? "ring-2 ring-[#00FF9D]"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedSubGoal(subGoal)}
                    >
                      <div 
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                          ${selectedSubGoal === subGoal ? "border-[#00FF9D]" : "border-gray-300"}`}
                      >
                        {selectedSubGoal === subGoal && (
                          <div className="w-3 h-3 rounded-full bg-[#00FF9D]" />
                        )}
                      </div>
                      <span className="text-sm">{subGoal}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            disabled={!selectedGoal || !selectedSubGoal}
            className="bg-black text-white px-8 py-2 rounded-full hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
