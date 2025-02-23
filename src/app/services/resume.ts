import { Resume } from "@/types/resume";
import request from "./request";

export const resumeService = {
  async getResumes(): Promise<Resume[]> {
    return request.get("/api/resume");
  },

  async getResume(id: number): Promise<Resume> {
    return request.get(`/api/resume/${id}`);
  },

  async createResume(file: File): Promise<Resume> {
    const formData = new FormData();
    formData.append("file", file);
    
    return request.post("/Resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async deleteResume(id: number): Promise<void> {
    return request.delete(`/Resume/${id}`);
  },
};
