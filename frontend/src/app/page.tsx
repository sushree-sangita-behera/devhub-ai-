import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          AI-Powered Developer Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Build your portfolio, store projects, generate README files,
          practice coding, track learning, and manage your developer profile
          all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 text-lg font-semibold"
          >
            Get Started Free
          </Link>
          <Link
            href="/projects"
            className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-300 transition-all duration-200 text-lg font-semibold"
          >
            View Projects
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          🚀 Used by 1000+ developers worldwide
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Portfolio Builder"
          description="Create and manage your professional portfolio with ease"
          icon="🎨"
          link="/portfolio"
          color="from-pink-500 to-rose-500"
        />
        <FeatureCard
          title="Project Management"
          description="Store and organize all your development projects"
          icon="📁"
          link="/projects"
          color="from-blue-500 to-indigo-500"
        />
        <FeatureCard
          title="README Generator"
          description="AI-powered README file generation for your projects"
          icon="📝"
          link="/projects"
          color="from-green-500 to-emerald-500"
        />
        <FeatureCard
          title="Coding Practice"
          description="Practice coding with interactive challenges"
          icon="💻"
          link="/practice"
          color="from-purple-500 to-violet-500"
        />
        <FeatureCard
          title="Learning Tracker"
          description="Track your learning progress and skills"
          icon="📚"
          link="/learning"
          color="from-orange-500 to-amber-500"
        />
        <FeatureCard
          title="GitHub Integration"
          description="Connect and manage your GitHub repositories"
          icon="🐙"
          link="/github"
          color="from-gray-700 to-gray-900"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-gray-600">Projects Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">5K+</div>
            <div className="text-gray-600">Developers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">1M+</div>
            <div className="text-gray-600">Lines of Code</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, icon, link, color }: any) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className={`text-5xl mb-4 bg-gradient-to-r ${color} w-16 h-16 rounded-xl flex items-center justify-center text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}