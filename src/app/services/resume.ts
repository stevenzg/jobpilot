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
    
    return request.post("/api/file/upload/resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async updateResume(id: number, data: Partial<Resume>): Promise<Resume> {
    return request.patch(`/api/resume/${id}`, data);
  },

  async deleteResume(id: number): Promise<void> {
    return request.delete(`/api/resume/${id}`);
  },
};
