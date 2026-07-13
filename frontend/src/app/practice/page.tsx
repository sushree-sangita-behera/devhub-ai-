'use client'

import { useState } from 'react'

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
}

export default function PracticePage() {
  const [challenges] = useState<Challenge[]>([
    {
      id: '1',
      title: 'Two Sum',
      description: 'Find two numbers that add up to a target',
      difficulty: 'Easy',
      category: 'Algorithms',
    },
    {
      id: '2',
      title: 'Reverse Linked List',
      description: 'Reverse a singly linked list',
      difficulty: 'Medium',
      category: 'Data Structures',
    },
    {
      id: '3',
      title: 'Binary Tree Max Depth',
      description: 'Find the maximum depth of a binary tree',
      difficulty: 'Hard',
      category: 'Trees',
    },
  ])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Coding Practice</h1>

      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="border rounded-lg px-3 py-2">
            <option>All Categories</option>
            <option>Algorithms</option>
            <option>Data Structures</option>
            <option>Trees</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>All Difficulties</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="text-gray-600">{challenges.length} challenges available</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  )
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-500'
      case 'Medium':
        return 'text-yellow-500'
      case 'Hard':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{challenge.title}</h3>
        <span className={`text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
          {challenge.difficulty}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{challenge.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
          {challenge.category}
        </span>
        <button className="bg-primary text-white px-4 py-1 rounded-lg text-sm