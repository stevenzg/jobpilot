'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Resume } from "@/types/resume";
import { format } from "date-fns";
import { toast } from "sonner";

export default function ResumePage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/Resume", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch resumes");
        }

        const data = await response.json();
        setResumes(data);
      } catch (error) {
        toast.error("Failed to load resumes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

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
      ) : resumes.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No resumes found. Click "Add Resume" to create one.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {resumes.map((resume) => (
            <Card key={resume.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Resume #{resume.id}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Skills: {resume.skills.join(", ")}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Last Modified: {format(new Date(resume.updatedAt), "PP")}</span>
                  <span>Created: {format(new Date(resume.createdAt), "PP")}</span>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/jobs/resume/${resume.id}`}>
                      <span className="sr-only">View Resume</span>
                      <PlusCircle className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
