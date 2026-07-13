'use client'

import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
  action?: ReactNode
}

export default function Layout({ children, title, subtitle, action }: LayoutProps) {
  return (
    <div className="space-y-8">
      {(title || subtitle || action) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            {title && <h1 className="text-3xl font-bold">{title}</h1>}
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  )
}