'use client'

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { resumeService } from "@/app/services/resume"
import { toast } from "sonner"
import { Resume } from "@/types/resume"

interface ResumeUploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: (resume: Resume) => void
}

export function ResumeUploadDialog({ open, onOpenChange, onSuccess }: ResumeUploadDialogProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadFailed, setUploadFailed] = useState(false)
  const [uploadedResume, setUploadedResume] = useState<Resume | null>(null)
  const [targetJobTitle, setTargetJobTitle] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.includes('pdf') && !file.type.includes('word') && !file.type.includes('document')) {
      toast.error("Please upload a PDF or Word document")
      return
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      toast.error("File size should not exceed 10MB")
      return
    }

    setUploading(true)
    setUploadFailed(false)
    
    try {
      const resume = await resumeService.createResume(file)
      setUploadedResume(resume)
    } catch (error) {
      console.error('Upload failed:', error)
      setUploadFailed(true)
      toast.error("Failed to upload resume. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    if (!uploadedResume) return

    try {
      // TODO: Implement updateResume in resumeService
      const updatedResume = await resumeService.updateResume(uploadedResume.id, {
        targetJobTitle
      })
      onSuccess(updatedResume)
      onOpenChange(false)
      toast.success("Resume uploaded successfully!")
    } catch (error) {
      console.error('Failed to update resume:', error)
      toast.error("Failed to update resume. Please try again.")
    }
  }

  const handleClose = () => {
    setUploading(false)
    setUploadFailed(false)
    setUploadedResume(null)
    setTargetJobTitle("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {uploadedResume ? "Set Target Job Title" : "Upload Resume"}
          </DialogTitle>
        </DialogHeader>

        {!uploadedResume && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full"
              >
                {uploading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Uploading...</span>
                  </div>
                ) : (
                  "Select File"
                )}
              </Button>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Files should be in PDF or Word format and must not exceed 10MB in size.
            </p>
          </div>
        )}

        {uploadFailed && (
          <div className="text-center space-y-4">
            <div className="text-destructive">Upload failed. Please try again.</div>
            <Button onClick={() => setUploadFailed(false)} variant="secondary">
              Try Again
            </Button>
          </div>
        )}

        {uploadedResume && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="target-job-title" className="text-sm font-medium">
                Target Job Title
              </label>
              <Input
                id="target-job-title"
                placeholder="e.g., Software Engineer"
                value={targetJobTitle}
                onChange={(e) => setTargetJobTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
