"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPinIcon, BuildingIcon, DollarSignIcon, BriefcaseIcon } from "lucide-react"

// Mock data - replace with real API call later
const recommendedJobs = [
  {
    id: 1,
    title: "Frontend Software Engineer",
    company: "PublicSquare",
    location: "West Palm Beach, FL",
    type: "Full-time",
    level: "Mid, Senior Level",
    match: 50,
    logo: "/companies/publicsquare.png",
    postedAt: "23 hours ago",
    applicants: 161,
  },
  {
    id: 2,
    title: "Website Engineer",
    company: "EventLedger",
    location: "United States",
    type: "Full-time",
    level: "Mid Level",
    match: 42,
    logo: "/companies/eventledger.png",
    postedAt: "5 hours ago",
    applicants: 250,
  },
  {
    id: 3,
    title: "Web Developer",
    company: "FlexAI Inc.",
    location: "United States",
    type: "Full-time",
    level: "New Grad, Entry Level",
    match: 66,
    logo: "/companies/flexai.png",
    postedAt: "1 hour ago",
    applicants: 25,
  },
]

export default function RecommendJobsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">推荐职位</h1>
        <p className="text-gray-600">基于你的简历和偏好，为你推荐最合适的职位</p>
      </div>

      <div className="grid gap-4">
        {recommendedJobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <img src={job.logo} alt={job.company} className="h-8 w-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-semibold">{job.match}</span>
                    <span className="text-sm text-gray-500">分</span>
                  </div>
                </div>
                
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <BuildingIcon className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{job.level}</Badge>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{job.postedAt}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{job.applicants} 申请</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">询问 Orion</Button>
                <Button size="sm">申请</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
