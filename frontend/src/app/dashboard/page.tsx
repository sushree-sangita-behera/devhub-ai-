'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../components/Layout'
import { formatTimeAgo } from '@/lib/utils'

interface DashboardStats {
  projects: number
  portfolioItems: number
  practiceSessions: number
  learningHours: number
  githubRepos: number
  resumeVersions: number
}

interface Activity {
  id: string
  type: 'project' | 'portfolio' | 'practice' | 'learning'
  title: string
  description: string
  time: string
  icon: string
  color: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchDashboardData()
    }
  }, [session])

  const fetchDashboardData = async () => {
    try {
      // Simulate fetching data
      setStats({
        projects: 12,
        portfolioItems: 5,
        practiceSessions: 34,
        learningHours: 120,
        githubRepos: 8,
        resumeVersions: 3,
      })

      setActivities([
        {
          id: '1',
          type: 'project',
          title: 'Created new project',
          description: 'AI-Powered Chat Application',
          time: new Date().toISOString(),
          icon: '📝',
          color: 'blue',
        },
        {
          id: '2',
          type: 'portfolio',
          title: 'Updated portfolio',
          description: 'Added new design system showcase',
          time: new Date(Date.now() - 3600000 * 3).toISOString(),
          icon: '🎨',
          color: 'pink',
        },
        {
          id: '3',
          type: 'practice',
          title: 'Completed practice session',
          description: 'Data Structures & Algorithms - 45 min',
          time: new Date(Date.now() - 3600000 * 8).toISOString(),
          icon: '💻',
          color: 'purple',
        },
        {
          id: '4',
         