"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"

type JobType = "Full-time" | "Contract" | "Part-time" | "Internship"
type Location = "Within US" | "Open to Remote"
type WorkAuthorization = "H1B sponsorship"
type SearchMode = "rush" | "casual"

export default function DiagnosticsPage() {
  const router = useRouter()
  const [searchMode, setSearchMode] = useState<SearchMode>("casual")
  const [jobFunction, setJobFunction] = useState("")
  const [jobTypes, setJobTypes] = useState<JobType[]>(["Full-time"])
  const [locations, setLocations] = useState<Location[]>(["Within US"])
  const [workAuthorizations, setWorkAuthorizations] = useState<WorkAuthorization[]>([])

  useEffect(() => {
    const mode = localStorage.getItem("searchMode") as SearchMode
    if (mode) {
      setSearchMode(mode)
    }
  }, [])

  const getMessage = () => {
    return searchMode === "rush" 
      ? "I see. Speed is important."
      : "With time on our side, we can aim for the perfect match."
  }

  const handleJobTypeToggle = (type: JobType) => {
    setJobTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const handleLocationToggle = (location: Location) => {
    setLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }

  const handleWorkAuthorizationToggle = (auth: WorkAuthorization) => {
    setWorkAuthorizations(prev =>
      prev.includes(auth)
        ? prev.filter(a => a !== auth)
        : [...prev, auth]
    )
  }

  const handleNext = () => {
    // TODO: Save preferences
    router.push("/dashboard")
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
          <h1 className="text-xl font-medium">{getMessage()}</h1>
          <p className="text-gray-600">Now, what type of role are you looking for?</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
          {/* Job Function */}
          <div className="space-y-2">
            <label className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">Job Function</span>
              <span className="text-gray-500 text-sm">(select from drop-down for best results)</span>
            </label>
            <input
              type="text"
              value={jobFunction}
              onChange={(e) => setJobFunction(e.target.value)}
              placeholder="Please select/enter your expected job function"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none"
            />
          </div>

          {/* Job Type */}
          <div className="space-y-2">
            <label className="font-medium">Job Type</label>
            <div className="flex flex-wrap gap-3">
              {["Full-time", "Contract", "Part-time", "Internship"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleJobTypeToggle(type as JobType)}
                  className={`px-4 py-2 rounded-lg ${
                    jobTypes.includes(type as JobType)
                      ? "bg-[#00FF9D] text-black"
                      : "bg-gray-100 text-gray-700"
                  } hover:opacity-80 transition-all`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="font-medium">Location</label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleLocationToggle("Within US")}
                className={`px-4 py-2 rounded-lg ${
                  locations.includes("Within US")
                    ? "bg-[#00FF9D] text-black"
                    : "bg-gray-100 text-gray-700"
                } hover:opacity-80 transition-all flex items-center gap-2`}
              >
                Within US
              </button>
              <button
                onClick={() => handleLocationToggle("Open to Remote")}
                className={`px-4 py-2 rounded-lg ${
                  locations.includes("Open to Remote")
                    ? "bg-[#00FF9D] text-black"
                    : "bg-gray-100 text-gray-700"
                } hover:opacity-80 transition-all flex items-center gap-2`}
              >
                Open to Remote
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Work Authorization */}
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <span className="font-medium">Work Authorization</span>
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                />
              </svg>
            </label>
            <button
              onClick={() => handleWorkAuthorizationToggle("H1B sponsorship")}
              className={`px-4 py-2 rounded-lg ${
                workAuthorizations.includes("H1B sponsorship")
                  ? "bg-[#00FF9D] text-black"
                  : "bg-gray-100 text-gray-700"
              } hover:opacity-80 transition-all`}
            >
              H1B sponsorship
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            disabled={!jobFunction}
            className="bg-black text-white px-8 py-2 rounded-full hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
