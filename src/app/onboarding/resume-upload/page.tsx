"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { LogoutButton } from "@/components/logout-button"
import { authService } from "@/app/services/auth"

type UploadOption = "linkedin" | "resume" | null

export default function ResumeUploadPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<UploadOption>(null)
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError("File size must not exceed 10MB")
        return
      }
      if (![".pdf", ".doc", ".docx"].some(ext => selectedFile.name.toLowerCase().endsWith(ext))) {
        setError("File must be in PDF or Word format")
        return
      }
      setFile(selectedFile)
      setError("")
    }
  }

  const handleUpload = async () => {
    try {
      setIsUploading(true)
      setError("")

      // TODO: 实现文件上传逻辑，获取文件 URL
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟上传
      const fileUrl = "https://example.com/resume.pdf" // 这里应该是实际的文件 URL

      // 调用 API 更新用户的简历 URL
      await authService.updateResumeUrl(fileUrl)

      // 更新本地存储
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      localStorage.setItem("user", JSON.stringify({ ...user, resumeUrl: fileUrl }))

      // 直接跳转到 dashboard
      router.push("/dashboard")
    } catch (err) {
      console.error("Failed to upload resume:", err)
      setError("Failed to upload your resume. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleLinkedinSubmit = async () => {
    try {
      setIsUploading(true)
      setError("")

      // 验证 LinkedIn URL
      if (!linkedinUrl.includes("linkedin.com/in/")) {
        setError("Please enter a valid LinkedIn profile URL")
        return
      }

      // 调用 API 更新用户的简历 URL（使用 LinkedIn URL）
      await authService.updateResumeUrl(linkedinUrl)

      // 更新本地存储
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      localStorage.setItem("user", JSON.stringify({ ...user, resumeUrl: linkedinUrl }))

      // 直接跳转到 dashboard
      router.push("/dashboard")
    } catch (err) {
      console.error("Failed to process LinkedIn URL:", err)
      setError("Failed to process your LinkedIn profile. Please try again.")
    } finally {
      setIsUploading(false)
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
      <div className="max-w-2xl mx-auto mt-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-xl font-medium">
            Seeing some exciting opportunities for you already! Level up your search by either uploading your resume OR entering your Linkedin URL.
          </h1>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {selectedOption === "resume" ? (
          <>
            {/* Back Button */}
            <button
              onClick={() => setSelectedOption(null)}
              className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
              Back
            </button>

            {/* Privacy Notice */}
            <div className="bg-[#E7F7EF] text-gray-600 p-4 rounded-lg mb-8 text-sm">
              Data privacy is the top priority at JobPilot. Your resume will only be used for job matching and will never be shared with third parties. For details, please see our{" "}
              <button className="text-gray-900 underline hover:opacity-80">
                Privacy Policy
              </button>
            </div>

            {/* File Upload */}
            <div className="space-y-6">
              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="block w-full p-4 text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                >
                  {file ? file.name : "Click to upload or drag and drop"}
                </label>
                <p className="mt-2 text-sm text-gray-500">
                  PDF or Word file, max 10MB
                </p>
              </div>

              <button
                onClick={handleUpload}
                disabled={!file || isUploading}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Upload Resume"}
              </button>
            </div>
          </>
        ) : selectedOption === "linkedin" ? (
          <>
            {/* Back Button */}
            <button
              onClick={() => setSelectedOption(null)}
              className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
              Back
            </button>

            {/* LinkedIn URL Input */}
            <div className="space-y-6">
              <div>
                <label htmlFor="linkedin-url" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  id="linkedin-url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/your-profile"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>

              <button
                onClick={handleLinkedinSubmit}
                disabled={!linkedinUrl || isUploading}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Processing..." : "Submit"}
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resume Upload Option */}
            <button
              onClick={() => setSelectedOption("resume")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#00FF9D]/10 rounded-xl">
                  <svg className="w-6 h-6 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium">Upload Resume</h2>
              </div>
              <p className="text-gray-600">
                Upload your resume in PDF or Word format
              </p>
            </button>

            {/* LinkedIn Option */}
            <button
              onClick={() => setSelectedOption("linkedin")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#00FF9D]/10 rounded-xl">
                  <svg className="w-6 h-6 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium">Enter LinkedIn URL</h2>
              </div>
              <p className="text-gray-600">
                Share your LinkedIn profile URL
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
