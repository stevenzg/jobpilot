'use client'

import { Button } from "@/components/ui/button"
import { PlusCircle, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { Resume } from "@/types/resume"
import { formatDistanceToNow } from "date-fns"
import { toast } from "sonner"
import { resumeService } from "@/app/services/resume"
import { ResumeUploadDialog } from "@/components/resume-upload-dialog"

export default function ResumePage() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)

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

  const handleUploadSuccess = (resume: Resume) => {
    setResumes((prev) => [...prev, resume])
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">
            You have {resumes.length} resume{resumes.length !== 1 ? "s" : ""} saved out of 5 available slots.
          </p>
        </div>
        <Button onClick={() => setUploadDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Resume
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Resume</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Target Job Title</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Last Modified</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Created</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {resumes.map((resume) => (
                <tr key={resume.id} className="group hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                        {resume.resumeName?.[0]?.toUpperCase() || '?'}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{resume.resumeName}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {resume.targetJobTitle || 'No target job title'}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(resume.updatedAt), { addSuffix: true })}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(resume.createdAt), { addSuffix: true })}
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ResumeUploadDialog
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        onSuccess={handleUploadSuccess}
      />
    </div>
  )
}
