'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const resumes = [
    {
      id: 1,
      name: "linkedin_profile_export",
      targetJobTitle: "Analysis Complex",
      lastModified: "3 days ago",
      created: "3 days ago"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-sm text-muted-foreground">
            You have 1 resume saved out of 5 available slots.
          </p>
        </div>
        <Button asChild>
          <Link href="/jobs/resume/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Resume
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {resumes.map((resume) => (
          <Card key={resume.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{resume.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Target Job Title: {resume.targetJobTitle}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Last Modified: {resume.lastModified}</span>
                <span>Created: {resume.created}</span>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Menu</span>
                  <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="currentColor"/>
                    <path d="M7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5C6 2.32843 6.67157 3 7.5 3Z" fill="currentColor"/>
                    <path d="M13.5 3C14.3284 3 15 2.32843 15 1.5C15 0.671573 14.3284 0 13.5 0C12.6716 0 12 0.671573 12 1.5C12 2.32843 12.6716 3 13.5 3Z" fill="currentColor"/>
                  </svg>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
