"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

type MarketData = {
  jobCount: number
  medianSalary: number
  recentJobs: number
  industry: string
  skills: string[]
}

export default function MarketAnalysisPage() {
  const router = useRouter()
  const [jobFunction, setJobFunction] = useState("")
  const [searchMode, setSearchMode] = useState<"rush" | "casual">("casual")
  const [marketData, setMarketData] = useState<MarketData>({
    jobCount: 4991,
    medianSalary: 160000,
    recentJobs: 1214,
    industry: "Software and Information Technology",
    skills: [
      "JavaScript", "React", "TypeScript", "Python", "AWS",
      "Docker", "Git", "Node.js", "CSS", "HTML",
      "Angular", "C#", "C++", "GraphQL", "Kubernetes",
      "MySQL", "PostgreSQL", "RESTful APIs", "Microservices",
      "CICD", "Linux", "SQL", "TypeScript"
    ]
  })

  useEffect(() => {
    const storedJobFunction = localStorage.getItem("jobFunction")
    const storedMode = localStorage.getItem("searchMode") as "rush" | "casual"
    if (storedJobFunction) {
      setJobFunction(storedJobFunction)
    }
    if (storedMode) {
      setSearchMode(storedMode)
    }
  }, [])

  const handleNext = () => {
    if (searchMode === "rush") {
      router.push("/onboarding/resume-upload")
    } else {
      router.push("/onboarding/career-goals")
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
        <button
          onClick={() => router.push("/logout")}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-xl font-medium">
            Great! Based on your preference, here is how {jobFunction} role
            looks like in the job market.
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Remote Jobs */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,6H16V4A2,2 0 0,0 14,2H10C8.89,2 8,2.89 8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8A2,2 0 0,0 20,6M10,4H14V6H10V4M12,9A2.5,2.5 0 0,1 14.5,11.5A2.5,2.5 0 0,1 12,14A2.5,2.5 0 0,1 9.5,11.5A2.5,2.5 0 0,1 12,9M17,19H7V17.75C7,16.37 9.24,15.25 12,15.25C14.76,15.25 17,16.37 17,17.75V19Z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">{marketData.jobCount}+</div>
                <div className="text-sm text-gray-600">Remote Jobs</div>
                <div className="text-xs text-gray-500 mt-1">Posted across the country</div>
              </div>
            </div>
          </div>

          {/* Median Salary */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3,1.48,3,2.41 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15 c1.95-0.37,3.5-1.5,3.5-3.55C16.5,12.46,14.07,11.49,11.8,10.9z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">${marketData.medianSalary.toLocaleString()}+</div>
                <div className="text-sm text-gray-600">Median annual salary offered</div>
              </div>
            </div>
          </div>

          {/* Industry */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-medium">{marketData.industry}</div>
                <div className="text-sm text-gray-600">Represented common industry</div>
              </div>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H20V18M8.76,12.54C8.76,14.45 10.32,16 12.23,16C13.24,16 14.12,15.53 14.71,14.79L16,16.08L16.71,15.37L15.41,14.08C15.73,13.37 15.86,12.7 15.86,12H14.34C14.34,12.3 14.29,12.64 14.19,12.94L12.5,11.25L12.5,9H11V11.25L9.77,12.47C9.32,12.04 9,11.38 9,10.66C9,9.63 9.83,8.8 10.86,8.8C11.63,8.8 12.28,9.27 12.5,9.94H14C13.7,8.32 12.1,7.11 10.86,7.11C9.13,7.11 7.47,8.47 7.47,10.21C7.47,10.96 7.7,11.64 8.08,12.19L7,13.27L7.71,14L8.79,12.92C9.03,13.13 9.3,13.32 9.58,13.47L8.29,14.77L9,15.5L10.28,14.21C10.87,14.65 11.54,14.93 12.23,14.93C13.28,14.93 14.17,14.38 14.66,13.55L13.6,12.5C13.28,13.18 12.76,13.69 12.23,13.69C11.3,13.69 10.58,13 10.58,12.06C10.58,11.47 10.89,10.97 11.35,10.69L13.41,12.75C13.46,12.58 13.5,12.38 13.5,12.19C13.5,11.07 12.6,10.16 11.5,10.16C10.39,10.16 9.5,11.06 9.5,12.17C9.5,12.47 9.57,12.76 9.69,13L8.82,13.87C8.78,13.77 8.76,13.66 8.76,13.54V12.54Z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">{marketData.recentJobs}+</div>
                <div className="text-sm text-gray-600">Jobs</div>
                <div className="text-xs text-gray-500 mt-1">Posted within 14 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Skills */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="font-medium mb-4">Hot Skills</h2>
          <div className="flex flex-wrap gap-2">
            {marketData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                style={{
                  fontSize: Math.max(0.7, Math.random() * 0.5 + 0.7) + "rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            className="bg-black text-white px-8 py-2 rounded-full hover:opacity-80 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
