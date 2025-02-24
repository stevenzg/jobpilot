export interface SkillGroup {
  groupName: string;
  skills: string[];
}

export interface WorkExperience {
  companyName: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  isCurrentPosition: boolean;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrentEducation: boolean;
  gpa?: number;
  achievements: string[];
}

export interface Resume {
  id: number;
  userId: string;
  resumeName: string;
  targetJobTitle?: string;
  storageUrl: string;
  skills: SkillGroup[];
  workExperience: WorkExperience[];
  education: Education[];
  createdAt: string;
  updatedAt: string;
}
