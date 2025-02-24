export interface AuthResponse {
  token: string;
  id: string;
  email: string;
  name: string | null;
  searchMode?: string | null;
  resumeUrl?: string | null;
  jobCategories?: string[] | null;
  jobTypes?: string[] | null;
  locations?: string[] | null;
}
