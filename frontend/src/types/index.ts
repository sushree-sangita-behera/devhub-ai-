export interface User {
  id: string
  email: string
  name: string
  image?: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface Portfolio {
  id: string
  title: string
  description: string
  image: string
  skills: string[]
  experience: Experience[]
  education: Education[]
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  current: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  current: boolean
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export interface LearningProgress {
  id: string
  skill: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  progress: number
  hoursSpent: number
  userId: string
  updatedAt: Date
}

export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  solution?: string
  testCases: TestCase[]
}

export interface TestCase {
  input: string
  expected: string
}

export interface Resume {
  id: string
  title: string
  content: any
  version: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface AuthResponse {
  user: User
  token: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}