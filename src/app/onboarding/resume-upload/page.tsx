"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

type UploadOption = "linkedin" | "resume" | null

export default function ResumeUploadPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<UploadOption>(null)
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        alert("File size must not exceed 10MB")
        return
      }
      if (![".pdf", ".doc", ".docx"].some(ext => selectedFile.name.toLowerCase().endsWith(ext))) {
        alert("File must be in PDF or Word format")
        return
      }
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    setIsUploading(true)
    // TODO: Implement file upload logic
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated upload
    setIsUploading(false)
    router.push("/dashboard")
  }

  const handleLinkedinSubmit = async () => {
    setIsUploading(true)
    // TODO: Implement LinkedIn profile fetch logic
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated processing
    setIsUploading(false)
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
      <div className="max-w-2xl mx-auto mt-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-xl font-medium">
            Seeing some exciting opportunities for you already! Level up your search by either uploading your resume OR entering your Linkedin URL.
          </h1>
        </div>

        {selectedOption === "resume" ? (
          <>
            {/* Privacy Notice */}
            <div className="bg-[#E7F7EF] text-gray-600 p-4 rounded-lg mb-8 text-sm">
              Data privacy is the top priority at JobPilot. Your resume will only be used for job matching and will never be shared with third parties. For details, please see our{" "}
              <button className="text-gray-900 underline hover:opacity-80">
                Privacy Policy
              </button>
              .
            </div>

            {/* Upload Area */}
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center space-y-6">
              <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12.5L9,15.5L10.41,16.91L12,15.33L13.59,16.91L15,15.5L12,12.5Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-medium">Upload Your Resume</div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resumeUpload"
              />
              <div className="text-sm text-gray-500">
                Files should be in PDF or Word format and must not exceed 10MB in size.
              </div>
              {file ? (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"
                    />
                  </svg>
                  {file.name}
                </div>
              ) : (
                <button
                  onClick={() => document.getElementById("resumeUpload")?.click()}
                  className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-all"
                >
                  Choose File
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-8">
            {/* LinkedIn Option */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg text-center space-y-6 cursor-pointer transition-all ${
                selectedOption === "linkedin" ? "ring-2 ring-[#00FF9D]" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedOption("linkedin")}
            >
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="#0A66C2"
                    d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-medium">Enter Linkedin URL</div>
              {selectedOption === "linkedin" && (
                <input
                  type="text"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/your-profile"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent outline-none"
                  autoFocus
                />
              )}
            </div>

            {/* Resume Option */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg text-center space-y-6 cursor-pointer transition-all ${
                selectedOption === "resume" ? "ring-2 ring-[#00FF9D]" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedOption("resume")}
            >
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 24 24" className="w-full h-full text-gray-600">
                  <path
                    fill="currentColor"
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12.5L9,15.5L10.41,16.91L12,15.33L13.59,16.91L15,15.5L12,12.5Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-medium">Upload Resume</div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end mt-8">
          {selectedOption === "resume" ? (
            <button
              onClick={handleUpload}
              disabled={!file || isUploading}
              className="bg-black text-white px-8 py-2 rounded-full hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? "Uploading..." : "Start Matching"}
            </button>
          ) : selectedOption === "linkedin" ? (
            <button
              onClick={handleLinkedinSubmit}
              disabled={!linkedinUrl || isUploading}
              className="bg-black text-white px-8 py-2 rounded-full hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? "Processing..." : "Start Matching"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
