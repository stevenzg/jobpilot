'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Resume } from "@/types/resume"
import { format } from "date-fns"
import { toast } from "sonner"
import { resumeService } from "@/app/services/resume"

export default function ResumePage() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await resumeService.getResumes()
        setResumes(data)
      } catch {
        toast.error("Failed to load resumes. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchResumes()
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-sm text-muted-foreground">
            You have {resumes.length} resume{resumes.length !== 1 ? "s" : ""} saved out of 5 available slots.
          </p>
        </div>
        <Button asChild>
          <Link href="/jobs/resume/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Resume
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-2">
          {resumes.map((resume) => (
            <div key={resume.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                  {resume.fileName?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{resume.fileName}</span>
                    {resume.isPrimary && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">PRIMARY</span>
                    )}
                    {resume.analysisComplete && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">Analysis Complete</span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{resume.targetJobTitle || 'No target job title'}</span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Last Modified</span>
                  <span className="text-sm">{format(new Date(resume.updatedAt), 'MMM d, yyyy')}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Created</span>
                  <span className="text-sm">{format(new Date(resume.createdAt), 'MMM d, yyyy')}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
