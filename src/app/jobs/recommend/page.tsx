"use client"

import Image from "next/image"
import { LogoutButton } from "@/components/logout-button"

export default function RecommendJobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0FFFF] to-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto pt-6 px-4 flex justify-between items-center">
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
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl font-semibold">推荐职位</h1>
          <p className="text-gray-600">
            基于你的简历和偏好，为你推荐最合适的职位
          </p>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 gap-6">
          {/* 这里会添加职位列表 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-center py-8">
              正在为你分析简历并匹配合适的职位...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
